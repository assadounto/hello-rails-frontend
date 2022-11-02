import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/greeting';

export default function Greeting() {
  const state = useSelector((state) => state.greetings);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);
  return (<h1>{state.message.message}</h1>);
}
