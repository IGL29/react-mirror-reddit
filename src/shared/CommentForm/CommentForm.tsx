import { commentContext } from '@shared/context/commentContext';
import React, { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react';
import { userContext } from '@shared/context/userContext';
import styles from './styles.scss';

interface CommentFormProps {
  className: string;
}

const CommentForm: React.FC<CommentFormProps> = ({className}) => {
  const { value, onChange } = useContext(commentContext);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const refTextaria = useRef(null);
  const { name } = useContext(userContext);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  function handleOnBlur() {
    const textareaElement: HTMLTextAreaElement | null = refTextaria.current;

    if(textareaElement?.value === '') {
      setIsFocus(false)
    }
  }

  return (
  <form className={`${styles.form} ${className}`} onSubmit={handleSubmit}>

    <div className={styles.wrapTextarea}>
      <textarea ref={refTextaria} onFocus={() => setIsFocus(true)} onBlur={handleOnBlur} className={styles.textaria} value={value}  onChange={handleChange}/>

      {!isFocus && <p className={styles.placeholder}><span className={styles.userPlaceholder}>{name}</span>, оставьте ваш комментарий</p>}
    </div>

    <div className={styles.containerButtons}>
      <div className={styles.wrapButtons}></div>
      <button className={styles.button}>Комментировать</button>
    </div>
  </form>
  )
}

export default CommentForm;
