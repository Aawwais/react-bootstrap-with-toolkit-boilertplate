import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/portfolio/porfolioSlice';
import { Button, } from 'reactstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Home = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.portfolio);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const logout = () => {
    // Implement your logout logic
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center  home">
      <h1 className="text-3xl font-bold mb-4">Counter App</h1>
      <Button onClick={logout} color="primary">Logout</Button>
      <div className="d-flex ">
        <Button onClick={handleDecrement} color="primary" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2">-</Button>
        <span className="mx-2 my-auto text-2xl font-bold">{counter}</span>
        <Button onClick={handleIncrement} color="primary" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-2 rounded">+</Button>
      </div>
      <p>Click here to go to the About page</p>
      <Link to="/about" className="btn btn-primary">
       About
      </Link>
    </div>
  );
};

export default Home;
