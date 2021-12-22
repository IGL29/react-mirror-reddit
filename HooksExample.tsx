import React from 'react';
import {useEffect} from 'react';

MyHooks({title: 'sds'})

function MyHooks({title}: { title: string }) {
  // Хуки, хоть и повторяют поведение жизненного цикла, но все же зависят от порядка, в котором они идут и соотвественно от deps

  useEffect(() => {
    //первый рендер - аналог -
    console.log('componentDidMount');
    // и все последующие рендеры - аналог -
    console.log('componentWillUpdate');
    return () => {
      //в useEffect можно вернуть функцию и она будет вызываться перед Unmount компонента - аналог
      console.log('componentWillUnmount');
    }
  });


  // если передать пустой массив, useEffect будет следить за undefined которое не поменяется
  // поэтому запуск функции будет только при первом рендере
  useEffect(() => {
    //первый рендер - аналог -
    console.log('componentDidMount');
    return () => {
      //в useEffect можно вернуть функцию и она будет вызываться перед Unmount компонента - аналог
      console.log('componentWillUnmount');
    }
  }, []);


  // Если передать значение за которым нужно следить, то useEffet будет отрабатывать каждый раз,
  // когда значение будет меняться. Но при самом ПЕРВОМ рендере происходит вызов, так как всегда при первом
  // рендере присваивается какое-то значение.
  useEffect(() => {
    console.log('componentWillReceiveProps:', title);
    return () => {
      //в useEffect можно вернуть функцию и она будет вызываться перед Unmount компонента - аналог
      console.log('componentWillUnmount');
    }
  }, [title]);

  return (
    <div>{title}</div>
  )

  // Собственный кастомный Хук

  // const [isMounted] = React.useIsMounted();
}

function useIsMounted() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true)
  }, []);

  return [isMounted];
}
