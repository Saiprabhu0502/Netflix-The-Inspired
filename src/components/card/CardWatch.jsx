import React from "react";
import { useDispatch } from "react-redux";
import './style.scss';
import {removeWatch} from '../../store/homeSlice';
const CardWatch = ({ movie }) => {
 
  const dispatch = useDispatch();

  const handleRemove = (movieId) => {
    dispatch(removeWatch(movieId));
  };
  return (
    <div className="movie-card" onClick={() => handleRemove(movie.id)}>
      <img className="card-image" src={movie.image} alt={movie.title} />
      </div>
  );
};
export default CardWatch;