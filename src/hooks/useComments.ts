import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { tokenContext } from './../shared/context/tokenContext';

const useComments = (permalink: string) => {
  console.log('id', permalink)
  const [data, setData] = useState(null);
  const token = useContext(tokenContext);

  useEffect(() => {
    axios
      .get(`https://oauth.reddit.com/comments/${permalink}`, {
        headers: { Authorization: `bearer ${token}` }
      })
      .then((res) => setData(res.data))
      .catch(console.log)
  }, [token])

  return [data];
}

export {useComments};
