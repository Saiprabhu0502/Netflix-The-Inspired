// WatchList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import  MovieCard  from '../../components/card/CardWatch'; 
import './watchstyle.css';
 const WatchList = () => {
  const watchlist = useSelector(state => state.home.watchlist);
  console.log(watchlist);
  return (
    <div className='watch'>
      <h1>Watchlist</h1>
      <div className="card-container">
        {watchlist.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default WatchList;

