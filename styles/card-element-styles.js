import { css } from 'lit';

export const CardElementStyles = css`
    .card-container{
        width: 300px;
        min-height: 200px;
        margin: 0 5px 0 5px;
        box-shadow: 0px 2px 2px 2px #00000020;
        border-radius: 5px;
    }

    .top-card-container {
        background-color: #000;
        border-radius: 5px 5px 0 0;
        padding: 5px;
    }

    .top-card-container > p {
        margin: 0;
        color: #FFFF00;
    }

     .top-card-container.y {
        background-color: #FFFF00;
        border-radius: 5px 5px 0 0;
        padding: 5px;
    }

    .top-card-container.y > p {
        margin: 0;
        color: #000;
    }
`