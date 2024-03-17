import React, { useState, useEffect } from "react";
import Header from "../Hooks/Header";
import "../Admin/Heart.scss"


function Heart() {
    const [favoriteProducts, setFavoriteProducts] = useState([]);

    useEffect(() => {
        // Получение данных из local storage
        const storedData = localStorage.getItem('favoriteProducts');

        // Проверка на наличие данных в local storage
        if (storedData) {
            // Распарсим JSON-строку в объект
            const parsedData = JSON.parse(storedData);
            setFavoriteProducts(parsedData);
        }
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <div className="sale__menu__cards">
                    {favoriteProducts.map((product, index) => (
                        <div className="df">
                        <div key={index}>
                            {/* <h2>Maxsulot {index + 1}:</h2> */}
                            <div className="div">
                            <img src={product.Img} alt="Product Image" />
                            <p className="text-mutedd">{product.Price}</p>
                            <p className="pp">Info: {product.Info}</p>
                            <img className="imgg" src="./imgs/stars1.svg" alt="Product Rating" />
                            <button className="basket">В корзину</button>
                            </div>
                            {/* Ваши другие данные о товаре здесь */}
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Heart;
