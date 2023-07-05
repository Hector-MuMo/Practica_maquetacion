import { LitElement, html } from "lit";
import { SideBarStyles } from "../styles/sidebar-element-styles";

export class SidebarElement extends LitElement {
    static get styles() {
        return [SideBarStyles]
    }

    render() {
        return html`
            <section class='container'>
                <figure class='container__img-logo'>
                    <img src="../images/Logo-HOme.png" alt="home-logo">
                </figure>
                <figure class='container__img-products'>
                    <img src="../images/btn-Adm-Productos.png" alt="home-logo">
                </figure>
                <figure class='container__img-data'>
                    <img src="../images/Btn-Dataloader.png" alt="home-logo">
                </figure>
            </section>
        `;
    }
}

customElements.define('sidebar-element', SidebarElement);