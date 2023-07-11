import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting, selectGreeting } from '../redux/slices/greeting-slice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(selectGreeting);

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  if (!greeting) {
    return null;
  }

  return <h1 className="text-center">{greeting.text}</h1>;
};

export default Greeting;
