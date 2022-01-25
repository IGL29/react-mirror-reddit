import React, {useState} from 'react';

type CommentContext = {
  value: string
  onChange: (value: string) => void;
}

export const commentContext = React.createContext<CommentContext>({
  value: '',
  onChange: () => {}
});


export const CommentProvider = ({children}: {children: React.ReactNode}) => {
  const [commentValue, setCommentValue] = useState('');

  return (
    <commentContext.Provider value={{
      value: commentValue,
      onChange: setCommentValue,
    }}>
      {children}
    </commentContext.Provider>
  )
}
