import React, { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react';
import { userContext } from '@shared/context/userContext';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, updateComment } from 'src/store';
import { CommentForm } from '../CommentForm';

interface ContainerCommentFormProps {
  className: string;
}

const CommentFormContainer: React.FC<ContainerCommentFormProps> = ({className}) => {
  const value = useSelector<RootState, string>(store => store.commentText);
  const dispatch = useDispatch();

  const [isFocus, setIsFocus] = useState<boolean>(false);
  const refTextaria = useRef(null);
  const { name } = useContext(userContext);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value));
  }

  function handleOnBlur() {
    const textareaElement: HTMLTextAreaElement | null = refTextaria.current;

    if(textareaElement?.value === '') {
      setIsFocus(false)
    }
  }

  return (
    <CommentForm value={value} ref={refTextaria} setIsFocus={setIsFocus} isFocus={isFocus} className={className} name={name || ''} onChange={handleChange} onBlur={handleOnBlur} onSubmit={handleSubmit} />
  )
}

export default CommentFormContainer;
