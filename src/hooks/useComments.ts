import { RootState } from 'src/store/reducer';
import { useSelector, useDispatch } from 'react-redux';
import {useState, useEffect} from 'react';
import axios from 'axios';

const useComments = (permalink: string) => {
  console.log('id', permalink)
  const [data, setData] = useState(null);
  const token = useSelector<RootState>(store => store.token);

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
