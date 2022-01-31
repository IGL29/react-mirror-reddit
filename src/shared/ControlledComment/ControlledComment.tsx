import React, {useState, useEffect, ChangeEvent, createRef, FormEvent, ChangeEventHandler} from 'react';
import styles from './styles.scss';

interface IData {
  author: string
  created: number
  body: string
}
interface IControlledCommentProps {
  data: IData
}

const ControlledComment = ({data}: IControlledCommentProps) => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [inputValue, setInputValue] = useState(`${data.author}, `);
  const refTextarea = createRef<HTMLTextAreaElement>();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Controlled value :', inputValue);
    setIsOpenForm(false);
  }

  const handlerChange = (ev: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(ev.target.value);
  }

  useEffect(() => {
    if(isOpenForm === true && refTextarea.current) {
      refTextarea.current.focus();
      refTextarea.current.selectionStart = refTextarea.current.value.length;
    }
  }, [isOpenForm])

  return (
    <div className={styles.comment}>
      <div className={styles.commentHeader}>
        <h4 className={styles.name}>{data.author}</h4>
        <p className={styles.time}>{data.created} сек назад</p>
      </div>
      <p className={styles.text}>{data.body}</p>

      <div className={styles.wrapBtn}>
        <button onClick={() => setIsOpenForm(!isOpenForm)} className={styles.btn}>Ответить</button>
        <button className={styles.btn}>Поделиться</button>
        <button className={styles.btn}>Пожаловаться</button>
      </div>

      {isOpenForm && <form onSubmit={handleSubmit}>
        <textarea ref={refTextarea} value={inputValue} onChange={handlerChange} className={styles.textarea}/>
        <button className={styles.sendBtn}>Комментировать</button>
      </form>}
    </div>
  )
}

export default ControlledComment;
