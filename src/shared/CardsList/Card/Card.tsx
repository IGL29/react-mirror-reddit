import React from 'react';
import styles from './card.scss';
import user from './username.scss';
import textcontent from './textContent.scss';
import title from './title.scss';
import preview from './preview.scss';
import menu from './menu.scss';
import controls from './controls.scss';
import karmaCounter from './karmaCounter.scss';
import commentsButton from './commentsButton.scss';
import shareButton from './shareButton.scss';
import saveButton from './saveButton.scss';

export default function Card() {
  return (
    <li className={ styles.card }>
        <div className={ styles['text-content'] }>
          <div className={ textcontent.metaData }>
            <div className={ user.userLink }>
              <img
                className={ user.avatar }
                src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"
                alt="Константин Кодов"
              />
              <a
                className={ user.username }
                href="#user">Константин Кодов
              </a>
            </div>

            <span className={ textcontent.createdAt }>
              <span className={ textcontent.publishedLabel }>опубликовано </span>
              8 часов назад</span>
          </div>

          <h2 className={ title.title }>
            <a href="#article" className={ title.postLink }>
              Реплицированные с зарубежных источников возможности
            </a>
          </h2>
        </div>
        <div className={ preview.preview }>
          <img
            className={ preview.previewImg }
            src="https://cdn.dribbble.com/users/2424774/screenshots/16289478/media/9f74e74364ca09bce0004bcc17ba1bd5.png?compress=1&resize=400x300"
            alt=""
          />
        </div>

        <div className={ menu.menu }>
          <button className={ menu.menuButton }>
          <svg width="20" height="5" viewBox="0 0 20 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17.5" cy="2.5" r="2.5" transform="rotate(90 17.5 2.5)" fill="#D9D9D9"/>
            <circle cx="10" cy="2.5" r="2.5" transform="rotate(90 10 2.5)" fill="#D9D9D9"/>
            <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)" fill="#D9D9D9"/>
          </svg>
          </button>
        </div>

        <div className={ controls.controls }>
          <div className={ karmaCounter.karmaCounter }>
            <button className={ karmaCounter.up }>
              <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
              </svg>
            </button>

            <span>234</span>

            <button className={ karmaCounter.down }>
              <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#C4C4C4"/>
              </svg>
            </button>
          </div>
          <button className={ commentsButton.commentsButton }>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z" fill="#C4C4C4"/>
            </svg>

            <span className={ commentsButton.commentsNumber }>13</span>
          </button>

          <div className={ controls.actions }>
            <button className={ shareButton.shareButton }>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#C4C4C4"/>
                <path d="M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z" fill="white"/>
              </svg>
            </button>

            <button className={ saveButton.saveButton }>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#C4C4C4"/>
                <path d="M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z" fill="white"/>
              </svg>
            </button>
          </div>
        </div>
    </li>
  );
}
