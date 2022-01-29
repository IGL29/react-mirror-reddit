import React, {createRef, useState, useEffect} from 'react';
import styles from './styles.scss';

const Comment = ({data}) => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const refTextarea = createRef();

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const value = event.target[0].value;
    console.log('uncontrolled value :', value);
    setIsOpenForm(false);
  }

  useEffect(() => {
    if(isOpenForm === true) {
      refTextarea.current.focus();
      refTextarea.current.selectionStart = refTextarea.current.value.length;
    }
  }, [isOpenForm])

  const openForm = () => {
    setIsOpenForm(!isOpenForm);
  }

  return (
    <div className={styles.comment}>
      <div className={styles.commentHeader}>
        <h4 className={styles.name}>{data.author}</h4>
        <p className={styles.time}>{data.created} сек назад</p>
      </div>
      <p className={styles.text}>{data.body}</p>

      <div className={styles.wrapBtn}>
        <button onClick={openForm} className={styles.btn}>Ответить</button>
        <button className={styles.btn}>Поделиться</button>
        <button className={styles.btn}>Пожаловаться</button>
      </div>

      {isOpenForm && <form onSubmit={handleSubmit}>
        <textarea ref={refTextarea} defaultValue={`${data.author}, `} className={styles.textarea}/>
        <button className={styles.sendBtn}>Комментировать</button>
      </form>}
    </div>
  )
}

export default Comment;
