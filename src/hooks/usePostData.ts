import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

export const usePostData = () => {

  const[data, setData] = useState([]);
  const token = useSelector<RootState>(store => store.token);

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
