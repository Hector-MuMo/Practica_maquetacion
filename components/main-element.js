import { LitElement, html, css } from 'lit';
import '../components/top-menu.js';
import '../components/select-element.js';
import '../components/search-input.js';
import '../components/card-element.js';
import { MainElementStyles } from '../styles/main-element-styles.js';

export class MainElement extends LitElement {
    static get styles() {
        return [css`
            :host {
                width: 100%;
                min-height: 100vh;
            }
        `, MainElementStyles]
    }

    render() {
        return html`
                <top-menu></top-menu>
                <div class="top-options">
                    <p>-</p>
                    <div>
                        <input type='radio' id='active'/>
                        <label for="active">Activo</label>
                    </div>
                    <select-element></select-element>
                </div>
                <div class='search-container'>
                    <search-input></search-input>
                </div>
                <div class='admin-options'>
                    <div class='titles-container'>
                        <span class='titles-container__exclution-title'>EXCLUSIONES</span>
                        <span class='titles-container__sku-title'>SKU LIMIT</span>
                    </div>
                    <p class=''>GERENCIA DE VENTAS</p>
                    <div class='sales-container'>
                        <card-element title='Zona'></card-element>
                        <card-element title='Gerencia de Ventas'></card-element>
                        <card-element title='Centro de Distribución'></card-element>
                    </div>
                    <p>TIPIFICACIÓN DE CLIENTES</p>
                    <div class='customers-container'>
                        <card-element title='Canal' topColor='yellow'></card-element>
                        <card-element title='Subcanal' topColor='yellow'></card-element>
                        <card-element title='Tipo de Negocio' topColor='yellow'></card-element>
                    </div>
                </div>
                <div class='bottom-options'>
                    <div>
                        <button>Sin Vigencia</button>
                        <input type='date' placeholder='Definir fecha'/>
                    </div>
                    <button disabled class='submit-register'>Crear Registro</button>
                </div>
        `;
    }
}

customElements.define('main-element', MainElement);
