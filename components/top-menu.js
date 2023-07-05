import { LitElement, html, css } from 'lit';
import { TopMenuStyles } from '../styles/top-menu-styles';

export class TopMenu extends LitElement {
    static get styles() {
        return [TopMenuStyles];
    };

    render() {
        return html`
            <ul class='menu-container'>
                <li class='menu-container__title'><span>ADMINISTRACIÓN DE PRODUCTOS</span></li>
                <li class='menu-container__user'>
                    <div class='menu-container__user-info'>
                        <p class='menu-container__user-name'>Andres Ordoñez</p>
                        <p class='menu-container__user-update'>Última modificacion 16:28</p>
                    </div>
                    <figure class='menu-container__user-logo'>
                        <img src='../images/user-avatar.png' alt='user-avatar'>
                    </figure>
                </li>
            </ul>
        `
    };
};

customElements.define('top-menu', TopMenu);