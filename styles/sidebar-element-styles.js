import { css } from 'lit'

export const SideBarStyles = css`
    :host{
        display: flex;
        flex-direction: column;
        width: 70px;
        background-color: #F0ECFC;
    }

    .container {
        width: 70px;
    }

    img {
        width: 100%;
        height: 100%;
    }

    .container__img-logo, 
    .container__img-products, 
    .container__img-data{
        margin: 0;
    }
`