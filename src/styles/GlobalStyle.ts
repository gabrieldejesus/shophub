import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    :root {
        --black: #010101;
        --orange: #FF7610;
        --orange-ligth: #FFEBC1;
        --purple: #46419C;
    }
    
    :hover {
        transition: all ease 0.3s;
    }

    body {
        color: var(--black);
        background: var(--orange-ligth);
    }

    ul {
        display: flex;
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    header .active {
        color: var(--orange);
    }

    header .menu ul li {
        cursor: pointer;
        font-size: 18px;
        font-weight: 700;
        margin-right: 30px;
    }

    header .menu ul li:hover,
    header .menu ul li a:hover {
        color: var(--orange);
    }

    header .menu ul li a {
        color: var(--black);
    }

    header .cart img {
        border-radius: 50%;
    }

    header .cart img:hover {
        cursor: pointer;
        transform:scale(1.2);
        transform:rotate(10deg);
        box-shadow: 0px 0px 10px #FBB788;
    }

    header .menu ul li:last-child {
        margin-right: 0px;
    }

    section {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    section .banner {
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        border-radius: 50px;
        background-size: cover;
        background-position: center;
        background-image: url("/banner.svg");
    }

    .container-products {
        top: -150px;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
    }

    .container-products ul {
        flex-wrap: wrap;
    }

    .container-products ul li {
        width: 320px;
        padding: 40px;
        display: flex;
        justify-content: center;
        border-radius: 40px;
        background-color: #FFFCFA;
        margin: 0px 0px 40px 64px;
        box-shadow: 0px 0px 20px #fbb78840;
    }

    .container-products ul li:first-child {
        margin-left: 0px;
    }
    
    .container-products ul li:hover {
        transform:scale(1.1);
    }

    .container-products ul li a {
        display: flex;
        align-items: center;
        color: var(--purple);
        justify-content: center;
        flex-direction: column;
        font-size: 28px;
        font-weight: 400;
    }

    .container-products ul li a span {
        font-size: 28px;
        font-weight: 700;
        padding: 20px 0px 10px 0px;
    }

    .container-products img {
        max-width: 250px;
    }

    section .product {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 40px;
        background-color: #FFF;
        margin-top: 175px;
        box-shadow: 0px 0px 20px #FBB788;
    }

    section .product .description p {
        font-size: 18px;
        font-weight: 400;
        padding-right: 35px;
    }

    .price-and-buy {
        display: flex;
        align-items: center;
        margin-top: 23px;
    }

    .price-and-buy span {
        font-size: 30px;
        font-weight: 700;
        margin-right: 30px;
    }

    .price-and-buy .buy {
        cursor: pointer;
        width: 166px;
        height: 50px;
        display: flex;
        border-radius: 10px;
        align-items: center;
        justify-content: center;
        color: #FFF;
        font-size: 20px;
        font-weight: 700;
        background-color: var(--orange);
    }

    .price-and-buy .buy:hover {
        transform:scale(1.1);
    }

    .price-and-buy img {
        margin-right: 10px;
    }

    @media (max-width:1208px) {
        body {
            padding-left: 10px;
            padding-right: 10px;
        }
    }

    @media (max-width: 1108px) {
        .container-products ul {
            align-items: center;
            justify-content: center;
        }

        .container-products ul li {
            margin-left: 20px;
        }
    }

    @media (max-width: 680px) {
        header .menu ul li {
            font-size: 18px;
            margin-right: 10px;
        }
        .container-products ul {
            flex-direction: column;
        }
        .container-products ul li {
            margin-left: 0px;
        }
    }
`;