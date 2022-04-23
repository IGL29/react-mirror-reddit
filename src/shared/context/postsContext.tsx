import React from 'react';
import { usePostData } from '../../hooks/usePostData';

export const postsContext = React.createContext([])

export const PostContextProvider = ({children}: {children: React.ReactNode}) => {
  const [data, isLoading, errorLoading, bottomOfList,  setIsLoadMoreCards, isLoadMoreCards] = usePostData()

  return (
    <postsContext.Provider value={{data, isLoading, errorLoading, bottomOfList,  setIsLoadMoreCards, isLoadMoreCards}}>
      {children}
    </postsContext.Provider>
  )
}
