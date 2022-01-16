import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { tokenContext } from '../shared/context/tokenContext';

export const usePostData = () => {

  const[data, setData] = useState([]);
  const token = useContext(tokenContext)

  useEffect(() => {
    axios
      .get('https://oauth.reddit.com/best', {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((response) => {
        const listPosts = response.data?.data?.children
        if(listPosts) {
          setData(listPosts)
        }
      })
      .catch(console.log)
  },[token]);

  return [data]
}
