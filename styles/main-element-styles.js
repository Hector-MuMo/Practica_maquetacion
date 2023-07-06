import { css } from 'lit';

export const MainElementStyles = css`
    button {
        padding: 10px;
        background-color: #F0ECFC;
        border: none;
        border-radius: 2px;
        font-weight: 600;
    }

    input[type=date] {
        font-weight: 600;
        border: 2px solid #000;
        width: 120px;
    }

    .top-options, .bottom-options{
        display: flex;
        justify-content: space-between;
        margin: 30px 30px 10px 30px;
    }

    .user-options > p {
        margin: 0;
        font-size: 16px;
        font-weight: 700;
    }

    .search-container {
        margin: 15px 30px 15px 30px;
    }

    .admin-options {
        margin: 30px;
    }

    .titles-container {
        border-bottom: 2px solid #C4C4C4;
    }

    .titles-container__exclution-title {
        padding: 0 5px;
        font-size: 20px;
        font-weight: 500;
        border-bottom: 2px solid #000;
    }

    .titles-container__sku-title {
        padding: 0 5px;
        color: #747474;
        font-size: 20px;
    }

    .admin-options p {
        font-size: 16px;
        font-weight: 400;
        color: #747474;
    }

    .sales-container, .customers-container {
        display: flex;
    }

    .bottom-options {
        border-top: 2px solid #000;
        padding-top: 10px;
    }

    .submit-register {
        width: 170px;
        padding: 10px;
        background-color: #D4D4D4;
        font-weight: 600;
    }
`