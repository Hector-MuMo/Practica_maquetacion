import { LitElement, css, html } from 'lit';
import 'fa-icons';

export class SearchInput extends LitElement {

    static get styles() {
        return [css`
            input{
                width: 350px;
                padding: 5px;
                border-radius: 5px;
            }
        `]
    }

    render() {
        return html`
            <fa-icon class='fas fa-magnifying-glass' color='#000' size='1.5em'></fa-icon>
            <input type='search' placeholder='Buscar por producto, SKU...'/>
        `
    };
};

customElements.define('search-input', SearchInput);
