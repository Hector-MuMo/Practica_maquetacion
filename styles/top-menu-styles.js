import { css } from 'lit';

export const TopMenuStyles = css`
    :host {
        border-bottom: 2px solid #000;
    }

    img {
        width: 100%;
        height: 100%;
    }

    .menu-container {
        display:flex;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        list-style: none;
        border-bottom: 1px solid #000;
    }

    .menu-container__title {
        display: inline-block;
        line-height: 60px;
        text-align: center;
        margin: 10px 25px;
        font-weight: 400;
        font-size: 20px;
    }

    .menu-container__user {
        display: flex;
        margin: 10px;
        text-align: center
    }

    .menu-container__user-info {
        margin: auto;
        padding: 5px;
    }

    .menu-container__user-name {
        margin:0;
        font-size: 14px;
        font-weight: 400;
    }
    
    .menu-container__user-update {
        margin:0;
        font-size: 11px;
        font-weight: 300;
    }

    .menu-container__user-logo{
        margin: 0 10px;
        width: 50px;
        height: 50px;
    }
`