import React, { useState, useEffect } from "react";
import Header from "../Hooks/Header";
import "./Heart.css";


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

    // Функция для получения количества карточек товаров
    const getCardCount = () => {
        return favoriteProducts.length;
    }

    return (
        <>
            <Header />

            <div className="container">
                <div className="sale__menu__cards card-container">
                    <div className="d-flex">
                        <h1 className="favourite">Избранное</h1>
                        <p className="value">{getCardCount()}</p>
                    </div>

                    <div className="carddzz">
                        {favoriteProducts.map((product, index) => (
                            <div className="df" key={index}>
                                <div className="div card">
                                    <img src={product.Img} alt="ProductImagee" />
                                    <p className="text-muted">{product.Price}сум</p>
                                    <p className="pp">Info: {product.Info}</p>
                                    <img className="imggg" src={product.Stars} alt="Product Rating" />
                                </div>
                                {/* Ваши другие данные о товаре здесь */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Heart;
