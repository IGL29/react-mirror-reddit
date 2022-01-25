import { commentContext } from '@shared/context/commentContext';
import React, { ChangeEvent, FormEvent, useContext, useEffect, useRef, useState } from 'react';
import styles from './styles.scss';

const CommentForm = () => {
  const { value, onChange } = useContext(commentContext);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  const node = document.querySelector('#dropdown_root');

  return (
  <form className={styles.form} onSubmit={handleSubmit}>
    <textarea  className={styles.textaria} value={value}  onChange={handleChange}/>
    <button className={styles.button}>Комментировать</button>
  </form>
  )
}

export default CommentForm;
