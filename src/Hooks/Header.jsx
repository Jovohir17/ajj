import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import "../pages/home/Home.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Vegetables from '../Vegetables';
import asror from "../im/100191570.jpg"

function Header(props) {
    const [search,setSearch] = useState("")
    const inputName = (e) =>{
        setSearch(([e.target.name] = e.target.value))
    }
    const inputTap = (e) => {
        if(e.key === "Enter"){
            props.searchItem(search)
        }
    }
    const navlinkOnActive = ({isActive}) => {
        return {
            background: isActive ? "#f5f5f5" : "#ffffff"
        }
    }
    const [Informatios, setItems] = useState([]);
    const [tovar, setTovar] = useState("");
    useEffect(() => {
      axios
        .get("https://6493f6410da866a95366ecb6.mockapi.io/CARS")
        .then((res) => {
          console.log("🚀 ~ file: Home.js:13 ~ axios.get ~ res:", res);
          setItems(res.data);
        });
    }, []);
    const searchItems = (str) => {
        axios
          .get(`https://6493f6410da866a95366ecb6.mockapi.io/CARS?Info=${str}`)
          .then((res) => {
            console.log("🚀 ~ file: Home.js:13 ~ axios.get ~ res:", res);
            setItems(res.data);
          });
      };
  return (
    <header>
    <nav className='navbar p-0'>
        <div className="nav__top">
            <ul className='nav'>
                <li className='nav-item'><a href="#" className='nav-link'>Вопросы и ответы</a></li>
                <li className='nav-item'><a href="#" className='nav-link'>Для бизнеса</a></li>
                <li className='nav-item'><a href="#" className='nav-link'>Кэшбек</a></li>
            </ul>
            <div className="nav__top__helps">
                <div className="location">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.82617 6.92753C2.83578 4.10047 5.13534 1.81647 7.96242 1.82608C10.7895 1.83569 13.0735 4.13525 13.0639 6.96233V7.02027C13.0291 8.85793 12.003 10.5565 10.745 11.8841C10.0256 12.6311 9.22215 13.2925 8.35082 13.8551C8.11782 14.0566 7.77222 14.0566 7.53922 13.8551C6.24022 13.0095 5.10013 11.9421 4.1711 10.7015C3.34307 9.6196 2.87295 8.30647 2.82617 6.94493V6.92753Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.94478 8.66666C8.85085 8.66666 9.58536 7.93215 9.58536 7.02608C9.58536 6.12001 8.85085 5.3855 7.94478 5.3855C7.03871 5.3855 6.3042 6.12001 6.3042 7.02608C6.3042 7.93215 7.03871 8.66666 7.94478 8.66666Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>Ташкент</p>
                </div>
                <div className="language">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8.00016 1.33337C4.32416 1.33337 1.3335 4.32404 1.3335 8.00004C1.3335 11.676 4.32416 14.6667 8.00016 14.6667C11.6762 14.6667 14.6668 11.676 14.6668 8.00004C14.6668 4.32404 11.6762 1.33337 8.00016 1.33337ZM13.2875 7.33337H11.4448C11.3675 5.89004 10.9582 4.46671 10.2502 3.17137C11.8755 3.93204 13.0548 5.48537 13.2875 7.33337ZM8.3535 2.68471C9.0435 3.59404 9.9715 5.20471 10.1048 7.33337H6.02016C6.11283 5.60271 6.68283 3.98137 7.65416 2.68404C7.76883 2.67737 7.8835 2.66671 8.00016 2.66671C8.1195 2.66671 8.23616 2.67737 8.3535 2.68471ZM5.79216 3.15137C5.13616 4.41204 4.7575 5.84137 4.68683 7.33337H2.71283C2.9475 5.46937 4.14483 3.90471 5.79216 3.15137ZM2.71283 8.66671H4.6955C4.78616 10.2527 5.13883 11.652 5.73283 12.82C4.11616 12.056 2.94416 10.508 2.71283 8.66671ZM7.6335 13.3154C6.6995 12.1834 6.14816 10.5974 6.0275 8.66671H10.1028C9.96416 10.5154 9.35816 12.1307 8.3675 13.3147C8.24616 13.3227 8.12483 13.3334 8.00016 13.3334C7.87616 13.3334 7.7555 13.3227 7.6335 13.3154ZM10.3075 12.8007C10.9442 11.6047 11.3328 10.2 11.4348 8.66671H13.2868C13.0582 10.4927 11.9028 12.0314 10.3075 12.8007Z" fill="#333333"/>
                    </svg>
                    <p>Русский</p>
                </div>
            </div>
        </div>
        <div className="nav__header">
            <div className="nav__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="154" height="32" viewBox="0 0 154 32" fill="none">
                    <path d="M0 29.1254V0.761189H6.89074V23.1561H17.8678V29.1254H0Z" fill="#333333"/>
                    <path d="M80.112 25.1993C78.8568 26.6415 77.3077 27.79 75.4648 28.6446C73.6219 29.4726 71.4986 29.8866 69.0949 29.8866C66.9048 29.8866 64.875 29.526 63.0054 28.8049C61.1625 28.0838 59.56 27.0689 58.1979 25.7602C56.8358 24.4247 55.7674 22.8356 54.9929 20.9927C54.2184 19.1498 53.8311 17.12 53.8311 14.9032C53.8311 12.633 54.2184 10.5765 54.9929 8.73361C55.7941 6.89074 56.8892 5.32831 58.278 4.04631C59.6668 2.7376 61.2961 1.73604 63.1656 1.04162C65.0352 0.347208 67.0517 0 69.2151 0C71.2182 0 73.1812 0.360561 75.1042 1.08169C77.0539 1.7761 78.6297 2.80437 79.8316 4.16649L75.1844 8.81374C74.5434 7.93236 73.7021 7.27801 72.6604 6.85068C71.6188 6.42335 70.5505 6.20968 69.4554 6.20968C68.2536 6.20968 67.1452 6.4367 66.1303 6.89074C65.142 7.31807 64.2874 7.91901 63.5663 8.69355C62.8451 9.46809 62.2843 10.3895 61.8836 11.4579C61.483 12.4995 61.2827 13.6479 61.2827 14.9032C61.2827 16.1852 61.483 17.3604 61.8836 18.4287C62.2843 19.4971 62.8318 20.4185 63.5262 21.193C64.2473 21.9409 65.102 22.5284 66.0902 22.9558C67.0784 23.3831 68.1601 23.5968 69.3353 23.5968C70.6974 23.5968 71.8859 23.3297 72.9008 22.7955C73.9157 22.2614 74.7303 21.5669 75.3446 20.7123L80.112 25.1993Z" fill="#333333"/>
                    <path d="M101.557 29.1254V17.2669H90.4998V29.1254H83.6491V0.761189H90.4998V11.4979H101.557V0.761189H108.408V29.1254H101.557Z" fill="#333333"/>
                    <path d="M114.845 29.1254V0.761189H121.735V29.1254H114.845Z" fill="#333333"/>
                    <path d="M146.228 29.1254L134.81 10.5765H134.69L134.85 29.1254H128.2V0.761189H136.012L147.39 19.27H147.51L147.35 0.761189H154V29.1254H146.228Z" fill="#333333"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M44.3288 28.856C48.3585 25.9691 50.9842 21.2472 50.9842 15.912C50.9842 7.12406 43.8602 0 35.0722 0C26.2842 0 19.1602 7.12406 19.1602 15.912C19.1602 17.334 19.3467 18.7124 19.6966 20.0241C19.8601 19.2908 20.0795 18.643 20.0795 18.643C19.9892 18.4899 21.155 16.0406 21.155 16.0406C20.9784 16.0681 20.0795 17.3555 20.0795 17.3555C20.3464 16.2486 21.5828 14.7296 21.5828 14.7296L21.2531 15.0083C21.3787 14.5019 22.8428 12.9632 22.8428 12.9632C22.4385 12.9397 21.6574 13.6972 21.6574 13.6972C21.783 12.8926 24.5111 11.2243 24.5111 11.2243C24.2598 11.0987 23.8045 11.401 23.8045 11.401C24.0415 11.0807 25.1764 10.6517 25.884 10.3842C26.2432 10.2484 26.4923 10.1542 26.458 10.1371C26.3559 10.086 26.1793 10.0625 26.1793 10.0625C26.1793 10.0625 27.769 9.15575 29.084 9.03014C29.084 9.03014 29.5197 8.93201 30.2694 8.55519C30.2694 8.55519 32.2673 7.62884 36.3064 8.20977C36.3064 8.20977 39.3366 8.81033 40.0432 9.23818C40.0432 9.23818 43.1009 10.0782 42.6966 11.66H42.8222C42.8222 11.66 46.3314 12.3509 47.4933 14.3959C47.4933 14.3959 49.1615 16.963 48.3058 20.221C48.3058 20.221 47.8505 21.2768 47.6503 20.0914C47.6503 20.0914 47.3755 18.5527 46.8181 18.4507C46.8181 18.4507 44.0901 18.7255 43.2815 18.5253C43.2815 18.5253 43.5092 19.5576 42.9793 19.9383C42.9793 19.9383 43.2305 19.432 42.9793 19.1808C42.9793 19.1808 42.8497 20.115 42.2452 20.2916C42.2452 20.2916 42.6221 19.9148 42.4219 19.5851C42.4219 19.5851 41.888 20.6841 41.2836 20.6527C41.2836 20.6527 41.6368 20.3937 41.5858 20.166C41.5858 20.166 40.9538 20.5939 40.9224 20.8961C40.9224 20.8961 40.7694 20.6724 41.3267 19.9383C41.3267 19.9383 40.3415 20.8451 40.0903 20.8961C40.0903 20.8961 40.4436 20.5899 40.369 20.3387C40.369 20.3387 39.5094 20.743 40.0903 21.6026C40.0903 21.6026 42.7398 26.6309 43.4738 27.6907C43.4738 27.6907 43.8536 28.1801 44.3288 28.856ZM34.0027 31.7887C34.0027 31.7716 34.0026 31.7545 34.0023 31.7376C34.0023 31.7376 33.9942 31.7554 33.9794 31.7871C33.9871 31.7876 33.9949 31.7882 34.0027 31.7887ZM19.9622 20.9137C20.0608 20.2442 20.1423 19.7264 20.1423 19.7264C20.0067 19.8182 19.8904 20.0827 19.7971 20.3839C19.8491 20.5618 19.9042 20.7384 19.9622 20.9137Z" fill="#333333"/>
                </svg>
            </div>
            <div className="nav__input">
                <input
                type="text"
                placeholder='Поиск товаров...'
                className='input__group'
                onChange={inputName}
                name="search"
                onKeyDown={inputTap}
                 />
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clip-path="url(#clip0_1446_6805)">
                        <path d="M8.89671 16.3869C13.0336 16.3869 16.3872 13.0333 16.3872 8.89647C16.3872 4.7596 13.0336 1.40601 8.89671 1.40601C4.75984 1.40601 1.40625 4.7596 1.40625 8.89647C1.40625 13.0333 4.75984 16.3869 8.89671 16.3869Z" stroke="#69707E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.5454 14.5453L19.0909 19.0908" stroke="#69707E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1446_6805">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="nav__helps">
                <div class="dropdown__group">
                    <div class="uk-inline">
                        <button class="uk-button uk-button-default" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11.997 15.1746C7.684 15.1746 4 15.8546 4 18.5746C4 21.2956 7.661 21.9996 11.997 21.9996C16.31 21.9996 19.994 21.3206 19.994 18.5996C19.994 15.8786 16.334 15.1746 11.997 15.1746Z" fill="#333333"/>
                            <path opacity="0.4" d="M11.997 12.5837C14.935 12.5837 17.289 10.2287 17.289 7.29169C17.289 4.35469 14.935 1.99969 11.997 1.99969C9.06008 1.99969 6.70508 4.35469 6.70508 7.29169C6.70508 10.2287 9.06008 12.5837 11.997 12.5837Z" fill="#69707E"/>
                        </svg>
                        <p className='user__title'>Log In</p>
                        <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M13.5775 7.74414L9.99997 11.3216L6.42247 7.74414L5.24414 8.92247L9.99997 13.6783L14.7558 8.92247L13.5775 7.74414Z" fill="#2E384C"/>
                        </svg>
                        </button>
                        <div className='click__mode' uk-dropdown="mode: click">
                            <p className='user__name'>User Name</p>
                            <p className='user__number'>+998 12 345 67 89</p>
                            <p class="uk-nav-divider"></p>
                            <li className='lilka'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8207 9.00075C14.8207 9.61088 15.3217 10.1073 15.9375 10.1073C16.248 10.1073 16.5 10.357 16.5 10.6646V12.6719C16.5 14.3692 15.1065 15.75 13.3935 15.75H4.60725C2.89425 15.75 1.5 14.3692 1.5 12.6719V10.6646C1.5 10.357 1.752 10.1073 2.0625 10.1073C2.679 10.1073 3.18 9.61088 3.18 9.00075C3.18 8.40623 2.69925 7.95885 2.0625 7.95885C1.91325 7.95885 1.77075 7.90013 1.665 7.79535C1.55925 7.69057 1.5 7.5486 1.5 7.40149L1.5015 5.32886C1.5015 3.63151 2.895 2.25 4.608 2.25H13.392C15.105 2.25 16.4993 3.63151 16.4993 5.32886L16.5 7.33684C16.5 7.48398 16.4408 7.62668 16.3358 7.7307C16.23 7.83547 16.0875 7.8942 15.9375 7.8942C15.3217 7.8942 14.8207 8.39063 14.8207 9.00075ZM10.689 9.486L11.5732 8.63287C11.727 8.48572 11.7802 8.26875 11.7135 8.06812C11.6475 7.86742 11.475 7.72477 11.2665 7.69575L10.0448 7.5189L9.498 6.42203C9.40425 6.23327 9.21375 6.11584 9.0015 6.1151H9C8.7885 6.1151 8.598 6.23252 8.50275 6.42128L7.956 7.5189L6.7365 7.695C6.52575 7.72478 6.35325 7.86742 6.2865 8.06812C6.2205 8.26875 6.27375 8.48572 6.42675 8.63287L7.311 9.486L7.1025 10.6922C7.0665 10.9002 7.15125 11.1068 7.32375 11.2309C7.42125 11.3 7.5345 11.3357 7.64925 11.3357C7.737 11.3357 7.8255 11.3141 7.9065 11.2718L9 10.7026L10.0912 11.2703C10.2802 11.3706 10.5045 11.355 10.6762 11.2302C10.8495 11.1068 10.9342 10.9002 10.8983 10.6922L10.689 9.486Z" fill="#333333"/>
                                </svg>
                                <a href="#">Кэшбэк</a>
                                <p>0 сум</p>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.56665 14.8652C5.88315 14.8652 6.1404 15.1225 6.1404 15.439C6.1404 15.7555 5.88315 16.012 5.56665 16.012C5.25015 16.012 4.99365 15.7555 4.99365 15.439C4.99365 15.1225 5.25015 14.8652 5.56665 14.8652Z" fill="#333333" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0059 14.8652C14.3224 14.8652 14.5796 15.1225 14.5796 15.439C14.5796 15.7555 14.3224 16.012 14.0059 16.012C13.6894 16.012 13.4321 15.7555 13.4321 15.439C13.4321 15.1225 13.6894 14.8652 14.0059 14.8652Z" fill="#333333" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2.0625 2.4375L3.6225 2.7075L4.34475 11.3123C4.40325 12.0135 4.989 12.552 5.6925 12.552H13.8765C14.5485 12.552 15.1185 12.0585 15.2153 11.3925L15.927 6.474C16.0148 5.86725 15.5445 5.32425 14.9318 5.32425H3.873" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.1865 2.74476L10.5915 0.998686L8.54962 4.95003L13.0498 4.95001L14.1865 2.74476Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <a href="#">Мои заказы</a>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.82075 15.6404C7.1928 14.6384 5.67833 13.4592 4.30447 12.1239C3.33858 11.1622 2.60326 9.98985 2.15482 8.69655C1.34785 6.18773 2.29045 3.31562 4.92834 2.46564C6.31471 2.01932 7.8288 2.27441 8.99708 3.15111C10.1657 2.27549 11.6794 2.02049 13.0658 2.46564C15.7037 3.31562 16.6531 6.18773 15.8461 8.69655C15.3976 9.98985 14.6623 11.1622 13.6964 12.1239C12.3226 13.4592 10.8081 14.6384 9.18015 15.6404L9.00383 15.75L8.82075 15.6404Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.8047 5.28979C12.6037 5.54502 13.1713 6.26232 13.2423 7.10628" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <Link to="my_heart_is_broken">Избранное</Link>
                            </li>
                            <li className='lolks'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.605 5.71764L15.1382 4.90758C14.7433 4.22214 13.8681 3.98568 13.1817 4.37898C12.855 4.57144 12.4651 4.62605 12.0981 4.53075C11.731 4.43545 11.417 4.19808 11.2252 3.87096C11.1018 3.66305 11.0355 3.42623 11.0329 3.18447C11.0441 2.79685 10.8979 2.42124 10.6276 2.14319C10.3573 1.86514 9.98595 1.70833 9.5982 1.7085H8.6577C8.27782 1.70849 7.91355 1.85987 7.64558 2.12914C7.37758 2.39842 7.22795 2.76338 7.22977 3.14328C7.21851 3.92763 6.57942 4.55754 5.79499 4.55746C5.55323 4.55495 5.31641 4.48864 5.10849 4.36524C4.42211 3.97194 3.5469 4.2084 3.15197 4.89385L2.65082 5.71764C2.25637 6.40223 2.48961 7.27689 3.17256 7.67418C3.61649 7.93046 3.88997 8.40416 3.88997 8.91671C3.88997 9.42933 3.61649 9.90296 3.17256 10.1593C2.49048 10.5539 2.25698 11.4264 2.65082 12.1089L3.12451 12.9259C3.30955 13.2598 3.62002 13.5062 3.98721 13.6105C4.3544 13.7149 4.74804 13.6686 5.08103 13.482C5.40837 13.2909 5.79845 13.2386 6.16457 13.3366C6.53069 13.4346 6.84249 13.6747 7.03069 14.0037C7.15409 14.2116 7.22039 14.4484 7.2229 14.6902C7.2229 15.4826 7.86525 16.125 8.6577 16.125H9.5982C10.3879 16.125 11.0292 15.4868 11.0329 14.697C11.0311 14.316 11.1817 13.95 11.4511 13.6805C11.7206 13.411 12.0867 13.2604 12.4678 13.2623C12.709 13.2687 12.9448 13.3347 13.1542 13.4545C13.8388 13.8489 14.7135 13.6157 15.1108 12.9327L15.605 12.1089C15.7963 11.7806 15.8489 11.3895 15.751 11.0222C15.653 10.655 15.4127 10.3419 15.0833 10.1524C14.7538 9.96288 14.5136 9.64983 14.4157 9.28263C14.3177 8.91543 14.3702 8.52431 14.5615 8.19588C14.686 7.97868 14.8661 7.79861 15.0833 7.67418C15.7621 7.2771 15.9949 6.40755 15.605 5.72451V5.71764Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.13142 10.8939C10.2234 10.8939 11.1085 10.0087 11.1085 8.91682C11.1085 7.82488 10.2234 6.9397 9.13142 6.9397C8.03948 6.9397 7.1543 7.82488 7.1543 8.91682C7.1543 10.0087 8.03948 10.8939 9.13142 10.8939Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <a href="#">Настройки</a>
                            </li>
                            <p class="uk-nav-divider"></p>
                            <li className='lastik'>
                                <img src="./imgs/Enter.png" alt="" />
                                <a href="#">Вход</a>
                            </li>

                        </div>
                    </div>
                </div>
                <div className="favorites text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.761 20.8538C9.5904 19.5179 7.57111 17.9456 5.73929 16.1652C4.45144 14.8829 3.47101 13.3198 2.8731 11.5954C1.79714 8.25031 3.05393 4.42083 6.57112 3.28752C8.41961 2.69243 10.4384 3.03255 11.9961 4.20148C13.5543 3.03398 15.5725 2.69398 17.4211 3.28752C20.9383 4.42083 22.2041 8.25031 21.1281 11.5954C20.5302 13.3198 19.5498 14.8829 18.2619 16.1652C16.4301 17.9456 14.4108 19.5179 12.2402 20.8538L12.0051 21L11.761 20.8538Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.7393 7.05298C16.8046 7.39328 17.5615 8.34968 17.6561 9.47496" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <Link to="my_heart_is_broken" className='text-dark' style={{textDecoration: "none" , height: "35px"}}>Избранное</Link>
                </div>
                <div className="bag">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.4222 19.8203C7.8442 19.8203 8.1872 20.1633 8.1872 20.5853C8.1872 21.0073 7.8442 21.3493 7.4222 21.3493C7.0002 21.3493 6.6582 21.0073 6.6582 20.5853C6.6582 20.1633 7.0002 19.8203 7.4222 19.8203Z" fill="#333333" stroke="#2E384C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6747 19.8203C19.0967 19.8203 19.4397 20.1633 19.4397 20.5853C19.4397 21.0073 19.0967 21.3493 18.6747 21.3493C18.2527 21.3493 17.9097 21.0073 17.9097 20.5853C17.9097 20.1633 18.2527 19.8203 18.6747 19.8203Z" fill="#333333" stroke="#2E384C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.75 3.25L4.83 3.61L5.793 15.083C5.871 16.018 6.652 16.736 7.59 16.736H18.502C19.398 16.736 20.158 16.078 20.287 15.19L21.236 8.632C21.353 7.823 20.726 7.099 19.909 7.099H5.164" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.1255 10.795H16.8985" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    <button class="bagger" >
                        <Link className="h" to="karzina">Корзина:</Link>
                        {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 id="offcanvasRightLabel">aaa</h5>
                            <button type="button" class="close" data-bs-dismiss="offcanvas" aria-label="Close">
                                <img src="./imgs/group.svg" alt="" />
                            </button>
                        </div>
                        <div class="offcanvas-body">
                        <div className="box">
                        <img className="asror" src={asror} alt="" />
                        <p>15.000 <span>Сум</span></p>
                        <button className="basket">karzina</button>
                        

                            <img className="asrors"  src="./imgs/stars1.svg" alt="" />
                            
                        </div>
                        <div className="box">
                        <img className="asror" src={asror} alt="" />
                        <p>15.000 <span>Сум</span></p>
                        <button className="basket">karzina</button>
                        

                            <img className="asrors"  src="./imgs/stars1.svg" alt="" />
                            
                        </div>
                            
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </nav>
    <div className="nav__links">
            <input id="burger" type="checkbox" />
            <label for="burger">
                    <span></span>
                    <span></span>
                    <span></span>
            </label>
            <a href="#" className='title'>Каталог</a>
        <nav className='catalog'>
            <ul className='catalog__menu'>
                <li className='catalog-item'><NavLink style={navlinkOnActive} to="vegetables"  className='catalog-link ovosh'>
                Овощи
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.6665 3.33331L10.3332 7.99998L5.6665 12.6666" stroke="#C3C6CB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </NavLink></li>
                <li className='catalog-item'><NavLink style={navlinkOnActive} to="fruits" className='catalog-link'>
                Фрукты
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.6665 3.33331L10.3332 7.99998L5.6665 12.6666" stroke="#C3C6CB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </NavLink></li>
                <li className='catalog-item'><NavLink style={navlinkOnActive} to="Vega" className='catalog-link'>
                Молочные продукты
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.6665 3.33331L10.3332 7.99998L5.6665 12.6666" stroke="#C3C6CB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </NavLink></li>
                <li className='catalog-item'><NavLink style={navlinkOnActive} to="Meet" className='catalog-link'>
                Мясные продукты
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.6665 3.33331L10.3332 7.99998L5.6665 12.6666" stroke="#C3C6CB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </NavLink></li>
                <li className='catalog-item'><NavLink style={navlinkOnActive} to="Xleb" className='catalog-link'>
                Хлебобулочные изделия
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.6665 3.33331L10.3332 7.99998L5.6665 12.6666" stroke="#C3C6CB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </NavLink></li>
                <li className='catalog-item'><NavLink style={navlinkOnActive} to="Other" className='catalog-link'>
                Полуфабрикаты
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.6665 3.33331L10.3332 7.99998L5.6665 12.6666" stroke="#C3C6CB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </NavLink></li>
                <li className='catalog-item'><NavLink style={navlinkOnActive} to="Concervs" className='catalog-link'>
                Консервы
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.6665 3.33331L10.3332 7.99998L5.6665 12.6666" stroke="#C3C6CB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </NavLink></li>
                <li className='catalog-item'><NavLink style={navlinkOnActive} to="Bocals" className='catalog-link'>
                Бакалея
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.6665 3.33331L10.3332 7.99998L5.6665 12.6666" stroke="#C3C6CB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </NavLink></li>
                <li className='catalog-item'><NavLink style={navlinkOnActive} to="Dietic" className='catalog-link'>
                Диетические продукты
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.6665 3.33331L10.3332 7.99998L5.6665 12.6666" stroke="#C3C6CB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </NavLink></li>
                <li className='catalog-item'><NavLink to="Kids" className='catalog-link'>
                Детское питание
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.6665 3.33331L10.3332 7.99998L5.6665 12.6666" stroke="#C3C6CB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </NavLink></li>
            </ul>
            <hr />
                        <Outlet/>
        </nav>
            <hr />
            <ul className='nav'>
                <li className='nav-item'><a href="#" className='nav-link'>Мясо и птица</a></li>
                <li className='nav-item'><a href="#" className='nav-link'>Овощи и фрукты</a></li>
                <li className='nav-item'><a href="#" className='nav-link'>Молочные продукты</a></li>
                <li className='nav-item'><a href="#" className='nav-link'>Для детей</a></li>
                <li className='nav-item'><a href="#" className='nav-link'>Хоз. товары</a></li>
                <li className='nav-item'><a href="#" className='nav-link'>Бытовая химия</a></li>
            </ul>
    </div>

    <div className="header__swiper">
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            autoScrollOffset={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
        >
            <SwiperSlide className='product'>
                <div className="product__info">
                    <p className='product__name'>Детское питание Nutrilon</p>
                    <p className='product__sale'>Скидки 20%</p>
                    <button>NUTRILON</button>
                </div>
                <div className="product__sale">
                    <img src="./imgs/nutrilon.png" alt="" />
                    <p className='product__2ale'>-20%</p>
                </div>

            </SwiperSlide>


            <SwiperSlide className='product3'>
                <div className="product__info">
                    <p className='product__name'>Черное кофе Cart Noire</p>
                    <p className='product__sale'>Скидки 20%</p>
                    <button>CART NOIRE</button>
                </div>
                <div className="product__sale">
                    <img src="https://www.cartenoire.ru/siteassets/products/1/cn_orig_1.png" alt="" />
                    <p className='product__2ale'>-20%</p>
                </div>

            </SwiperSlide>
            <SwiperSlide className='product4'>
                <div className="product__info">
                    <p className='product__name'>Сладости Skittles</p>
                    <p className='product__sale'>Скидки 20%</p>
                    <button>SKITTLES</button>
                </div>
                <div className="product__sale">
                    <img src="https://pngimg.com/d/skittles_PNG98752.png" alt="" />
                    <p className='product__2ale'>-20%</p>
                </div>
            </SwiperSlide>
            <SwiperSlide  className='product2'>
                <div className="product__info">
                    <p className='product__name'>Детское питание Friso</p>
                    <p className='product__sale'>Скидки 20%</p>
                    <button>FRISO</button>
                </div>
                <div className="product__sale">
                    <img src="https://friso.com.ru/wp-content/uploads/2021/11/friso-gold_2_800-correct.png" alt="" />
                    <p className='product__2ale'>-20%</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className='product5'>
                <div className="product__info">
                    <p className='product__name'>Сок Добрый</p>
                    <p className='product__sale'>Скидки 20%</p>
                    <button>ДОБРЫЙ</button>
                </div>
                <div className="product__sale">
                    <img src="https://bro-pizza.com/wp-content/uploads/2021/01/IMG_9643.png" alt="" />
                    <p className='product__2ale'>-20%</p>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</header>
  )
}

export default Header