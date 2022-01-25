import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.scss';
import { CommentForm } from '@shared/CommentForm';

interface IPostProps {
  onClose?: () => void
}

const Post = (props: IPostProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if(event.target instanceof Node && !ref.current?.contains(event.target)) {
        props.onClose?.();
      }
    }
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const node = document.querySelector('#modal_root');

  if(!node) return null;

  return ReactDOM.createPortal((
    <div ref={ref} className={styles.modal}>
      <h2 className={styles.title}>Название поста</h2>

      <div className={styles.content}>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur illo, placeat corporis laborum iure commodi corrupti adipisci nihil nisi vitae, similique dolorem quae magni recusandae. Eius molestias ipsam iusto hic quae, dolorum tenetur, porro officia reprehenderit, cupiditate aspernatur distinctio illum? Magnam id tenetur dolores natus earum explicabo, minima nulla velit.</div>
      </div>

      <CommentForm />
    </div>
  ), node)
}

export default Post;
