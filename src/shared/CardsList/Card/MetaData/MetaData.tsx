// Vendor
import React from 'react';
// Internals
import user from './username.scss';
import textcontent from './textContent.scss';

export default function MetaData() {
  return (
    <div className={textcontent.metaData}>
      <div className={user.userLink}>
        <img
          className={user.avatar}
          src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"
          alt="Константин Кодов"
        />
        <a
          className={user.username}
          href="#user">Константин Кодов
        </a>
      </div>

      <span className={textcontent.createdAt}>
        <span className={textcontent.publishedLabel}>
          опубликовано
        </span>
          8 часов назад
      </span>
    </div>
  )
}
