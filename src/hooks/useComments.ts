import { RootState } from 'src/store/reducer';
import { useSelector, useDispatch } from 'react-redux';
import {useState, useEffect} from 'react';
import axios from 'axios';

const useComments = (permalink: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const token = useSelector<RootState>(store => store.token);


  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://oauth.reddit.com/comments/${permalink}`, {
        headers: { Authorization: `bearer ${token}` }
      })
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
      })
      .catch(err => {
        setIsLoading(false);
        setIsError(true);
        console.log(err);
      })
    }, [token])

  return [data, isLoading, isError];
}

export {useComments};
