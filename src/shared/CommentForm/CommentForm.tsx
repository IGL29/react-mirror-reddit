import React, {ChangeEvent, FormEvent} from 'react';
import styles from './styles.scss';

interface CommentFormProps {
  className: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (event: FormEvent) => void;
  onSubmit: () => void;
  isFocus: boolean;
  name: string;
  setIsFocus: (arg0: boolean) => void;
  ref: React.Ref<HTMLTextAreaElement>
}

const CommentForm: React.FC<CommentFormProps> = ({className, setIsFocus, value, onChange, onBlur, onSubmit, isFocus, name, ref}) => {

  return (
  <form className={`${styles.form} ${className}`} onSubmit={onSubmit}>

    <div className={styles.wrapTextarea}>
      <textarea ref={ref} onFocus={() => setIsFocus(true)} onBlur={onBlur} className={styles.textaria} value={value}  onChange={onChange}/>

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
