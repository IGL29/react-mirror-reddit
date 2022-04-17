import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, updateComment } from '../../store/reducer';
import { CommentForm } from '../CommentForm';
import { Formik, FormikErrors, FormikHandlers } from 'formik';

interface ContainerCommentFormProps {
  className: string;
}

interface FormValues {
  comment: string;
}

const CommentFormContainer: React.FC<ContainerCommentFormProps> = ({ className }) => {
  const value = useSelector<RootState, string>(store => store.commentText);
  const dispatch = useDispatch();

  const [isFocus, setIsFocus] = useState<boolean>(false);

  const { name } = useSelector<RootState>(store => store.me.data);

  function handleSubmit(values: FormValues) {
    console.log('Отправлено: ', values.comment);
  }

  function updateInputState(ev: ChangeEvent, callback: FormikHandlers['handleChange'], values: FormValues) {
    callback(ev);
    dispatch(updateComment(values.comment));
  }

  const initialValues: FormValues = {
    comment: value || ''
  }

  function validate(values: FormValues) {
    const errors: FormikErrors<FormValues> = {};
    if (values.comment.length <= 3) {
      errors.comment = 'Поле должно содержать более 3-х символов';
    }
    return errors;
  }

  return (
    <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit} handleChange>
      {
        ({ values, errors, handleSubmit, handleChange, handleBlur, touched }) => <CommentForm values={values} touched={touched} errors={errors} setIsFocus={setIsFocus} isFocus={isFocus} className={className} name={name || ''} onChange={(ev) => {(updateInputState(ev, handleChange, values))}} onBlur={handleBlur} onSubmit={handleSubmit} />
      }
    </Formik>)
}

export default CommentFormContainer;
