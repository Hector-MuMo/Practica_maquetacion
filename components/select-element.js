import { LitElement, html, css } from 'lit';

export class SelectElement extends LitElement {
    static get styles() {
        return [css`
            select, option{
                padding: 5px;
                background-color: #F0ECFC;
                font-size: 400;
                border: none;
                border-radius: 5px;
            }
        `];
    }

    render() {
        return html`
            <select name='contries' id='c1'>
                 <option value="" selected disabled hidden>Selecciona un país</option>
                <option value='mexico'>México</option>
            </select>
        `
    };
};

customElements.define('select-element', SelectElement);