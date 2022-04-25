import React, {ChangeEvent, FormEvent, forwardRef} from 'react';
import { FormikTouched, FormikErrors } from 'formik';
import styles from './styles.scss';

interface CommentFormProps {
  className: string;
  values: {comment: string};
  errors: FormikErrors<{comment: string}>
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (event: FormEvent) => void;
  onSubmit: () => void;
  isFocus: boolean;
  name: string;
  touched: FormikTouched<{comment: boolean}>;
  setIsFocus: (arg0: boolean) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({className, touched, setIsFocus, values, errors, onChange, onBlur, onSubmit, isFocus, name}) => {

  return (
  <form className={`${styles.form} ${className}`} onSubmit={onSubmit}>

    <div className={styles.wrapTextarea}>
      <textarea name="comment" onFocus={() => setIsFocus(true)} onBlur={onBlur} className={styles.textaria} value={values.comment}  onChange={onChange}/>

      {(!isFocus && !values.comment) && <p className={styles.placeholder}><span className={styles.userPlaceholder}>{name}</span>, оставьте ваш комментарий</p>}
    </div>

    {errors.comment && touched.comment && (<p>{ errors.comment }</p>)}

    <div className={styles.containerButtons}>
      <div className={styles.wrapButtons}></div>
      <button type='submit' className={styles.button}>Комментировать</button>
    </div>
  </form>
  )
};

export default CommentForm;
