import {useEffect} from 'react';

MyHooks({title: 'sds'})

function MyHooks({title}: { title: string }) {
  useEffect(() => {
    console.log('componentDidMount');
    console.log('componentWillMount');
  });
  useEffect(() => {
    console.log('componentDidMount');
    console.log('componentWillMount');
  }, []);
  useEffect(() => {
    console.log('componentDidMount');
    console.log('componentWillMount');
  }, [title]);
}
