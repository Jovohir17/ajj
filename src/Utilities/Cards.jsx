import React from "react";
import "../pages/home/Home.scss";
import "../style/index.scss";


function Cards(props) {
    const { Stars, Info, Price, Type, Img } = props;

    // Функция для обработки нажатия на кнопку "Избранное"
    function handleFavoriteClick() {
        // Получаем текущий список товаров из Local Storage
        const storedData = localStorage.getItem("favoriteProducts");
        const existingProducts = storedData ? JSON.parse(storedData) : [];

        // Создаем объект с информацией о товаре
        const productData = {
            Info: Info, // Имя товара
            Stars: Stars, // Оценка товара (звезды)
            Img: Img, // Путь к изображению товара
            Price: Price
            // Другие данные о товаре, которые вам нужны
        };

        // Добавляем новый товар к существующему списку
        existingProducts.push(productData);

        // Преобразуем обновленный список в строку JSON и сохраняем его в Local Storage
        localStorage.setItem("favoriteProducts", JSON.stringify(existingProducts));
    }

    return (
        <div className="card">
            <div className="love" onClick={handleFavoriteClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.82075 15.6404C7.1928 14.6384 5.67833 13.4592 4.30447 12.1239C3.33858 11.1622 2.60326 9.98985 2.15482 8.69655C1.34785 6.18773 2.29045 3.31562 4.92834 2.46564C6.31471 2.01932 7.8288 2.27441 8.99708 3.15111C10.1657 2.27549 11.6794 2.02049 13.0658 2.46564C15.7037 3.31562 16.6531 6.18773 15.8461 8.69655C15.3977 9.98985 14.6624 11.1622 13.6964 12.1239C12.3226 13.4592 10.8081 14.6384 9.18015 15.6404L9.00383 15.75L8.82075 15.6404Z"
                        stroke="#FB8951"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M11.8047 5.28979C12.6037 5.54502 13.1713 6.26232 13.2423 7.10628"
                        stroke="#FB8951"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>

            <img src={Img} alt="Error" />
            <div className="card-body">
                <p className="text-muted">{Price}сум</p>
                <h3>{Info}</h3>
                <img className="stars" src="./imgs/stars1.svg" alt="Error" />
            </div>
            <p className="typik">{Type}</p>
            <button className="basket">В корзину</button>
        </div>
    );
}

export default Cards;
