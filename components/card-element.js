import { LitElement, html } from 'lit';
import { CardElementStyles } from '../styles/card-element-styles';


export class CardElement extends LitElement {
    static get styles() {
        return [CardElementStyles];
    };

    static get properties() {
        return {
            title: { type: String },
            topColor: { type: String },
        };
    }

    constructor() {
        super();
        this.title = "Card Title";
        this.topColor = "black";
    }

    render() {
        return html`
            <div class='card-container' >
                ${this.topColor === "black"
                ?
                html`
                    <div class='top-card-container'>
                        <p>${this.title}</p>
                    </div>
                    `
                :
                html`
                    <div class='top-card-container y'>
                    <p>${this.title}</p>
                    </div>
                    `
            }
            </div>
        `;
    };
};

customElements.define('card-element', CardElement);