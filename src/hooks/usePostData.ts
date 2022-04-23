import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/reducer';

const MAX_COUNT_DOWNLOADS = 2;

export const usePostData = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');
  const [nextAfter, setNextAfter] = useState('');
  const [data, setData] = useState([]);
  const [isLoadMoreCards, setIsLoadMoreCards] = useState(true);
  const [countDownloads, setCountDownloads] = useState(0);
  const token = useSelector<RootState>(store => store.token);
  const bottomOfList = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoadMoreCards && countDownloads >= MAX_COUNT_DOWNLOADS) {
      setCountDownloads(0);
      setIsLoadMoreCards(true);
    }
  }, [isLoadMoreCards]);

  useEffect(() => {
    if (!token || token === 'undefined') return;

    async function load() {
      if (countDownloads >= MAX_COUNT_DOWNLOADS && isLoadMoreCards) {
        setIsLoadMoreCards(false);
        return;
      }

      setIsLoading(true);
      setErrorLoading('');

      try {
        const { data: { data: { after, children: listPosts } } } = await axios.get('https://oauth.reddit.com/best', {
          headers: { Authorization: `bearer ${token}` },
          params: {
            limit: 3,
            after: nextAfter
          }

        });

        setCountDownloads(prevCountDownloads => ++prevCountDownloads)
        setNextAfter(after)
        setData(prevListPosts => prevListPosts.concat(listPosts));
      } catch (err) {
        setErrorLoading(String(err))
      }

      setIsLoading(false);
    }

    const observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting) {
        load();
      }
    }, {
      rootMargin: '30px'
    });

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    }

  }, [bottomOfList.current, nextAfter, countDownloads]);

  return [data, isLoading, errorLoading, bottomOfList, setIsLoadMoreCards, isLoadMoreCards];
}
