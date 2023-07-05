import { css } from 'lit';

export const MainElementStyles = css`
    .top-options, .bottom-options{
        display: flex;
        justify-content: space-between;
        margin: 30px;
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
`