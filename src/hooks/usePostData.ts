import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const usePostData = () => {

  const[data, setData] = useState({});

  useEffect(() => {
    axios
      .get('https://www.reddit.com/best')
      .then((response) => setData(response))
      .catch(console.log)
  },[data]);

  return [data]
}
