import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getGreetings } from '../redux/greeting';

export default function Greeting() {
  const state=useSelector((state)=>state.greetings)
  console.log(state)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getGreetings())
  },[]);
  console.log(state)
  return (<h1>{state.message.message}</h1>);
}