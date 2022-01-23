// Vendor
import React from 'react';
// Internals
import user from './username.scss';
import textcontent from './textContent.scss';

export default function MetaData({author, created}) {
  return (
    <div className={textcontent.metaData}>
      <div className={user.userLink}>
        <img
          className={user.avatar}
          src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"
          alt={author}
        />
        <a
          className={user.username}
          href="#user">{author}
        </a>
      </div>

      <span className={textcontent.createdAt}>
        <span className={textcontent.publishedLabel}>
          опубликовано
        </span>
        <span>
          {created} часов назад
        </span>
      </span>
    </div>
  )
}
