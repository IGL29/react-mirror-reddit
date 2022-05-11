//@ts-nocheck
import React from 'react';
import { usePostData } from '../../hooks/usePostData';
import { Outlet } from 'react-router-dom';

export const postsContext = React.createContext([])

export const PostContextProvider = () => {
  const [data, isLoading, errorLoading, bottomOfList,  setIsLoadMoreCards, isLoadMoreCards] = usePostData()

  return (
    <postsContext.Provider value={{data, isLoading, errorLoading, bottomOfList,  setIsLoadMoreCards, isLoadMoreCards}}>
      <Outlet />
    </postsContext.Provider>
  )
}
