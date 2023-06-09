import { LitElement, html, css } from 'lit';
import "./badges-list.js";

export class BadgesTypes extends LitElement {
    static get tag(){
        return 'badges-types';
    }

        static get propeties(){
        return {
            types: {type: Array},
            
            
        }
    }
    constructor() {
        super();
        this.types=[]; 
        this.updateType();
    }
    async updateType() { 
        const adress = new URL('../api/type');
        fetch(adress).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return[];
        })
        .then((data) => {
            this.type = data;

        });
        console.log(data);
        }
        
    static get styles() {
        return css`
        :host {
            display: block;
        }
        .wrapper {
            
            border: 2px solid black;
            display: flex;
        }
        .item {
            display: inline-flex;
        }
        `;
    }
    render() {
        return html`
        <div class="wrapper">
        ${this.types.map(type => html`
        <div class="item">
        <badges-list title="${type.title}" body="${type.body}" icon="${type.icon}" author="${type.author}"></badges-list>
        </div>
    `)}
    </div>
        
    `;

        
        }

    }
customElements.define(BadgesTypes.tag, BadgesTypes);
        