// Vendors
import React, {useState} from 'react';
import cn from 'classnames';
// Internals
import {MetaData} from '@shared/CardsList/Card/MetaData';
import styles from './title.scss';
import {Post} from '@shared/Post';

interface ITextContentProps {
  className?: string;
  author: string
  url: string
  title: string
  created: string
  permalinkComments: string
}

export default function TextContent({className = '', author, title, created, permalinkComments}: ITextContentProps): JSX.Element {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModal = () => {
    document.body.style.overflow ='hidden';
    setIsModalOpened(!isModalOpened);
  }

  return (
    <div className={cn(styles['text-content'], className)}>
      <MetaData created={created} author={author}/>

      <h2 className={styles.title}>
        <a href='#post-url' onClick={ openModal } className={styles.postLink}>
          {title}
        </a>
      </h2>

    {isModalOpened && <Post permalinkComments={permalinkComments} title={title} onClose={() => setIsModalOpened(false)} />}
    </div>
  )
}
