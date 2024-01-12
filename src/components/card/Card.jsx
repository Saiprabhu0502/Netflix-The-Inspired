// import React from 'react';
// import PropTypes from 'prop-types';
// import { Card, CardContent, CardMedia, Typography } from '@mui/material';

// const MovieCard = ({ id, poster_path, original_title }) => {
//   const imageSrc = poster_path
//     ? `https://image.tmdb.org/t/p/original${poster_path}`
//     : 'https://via.placeholder.com/300x450.png?text=No+Image'; // Placeholder image when poster_path is undefined

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="400"
//         image={imageSrc}
//         alt={original_title}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h6" component="div">
//           {original_title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Movie ID: {id}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// MovieCard.propTypes = {
//   id: PropTypes.number.isRequired,
//   poster_path: PropTypes.string, // Add prop type validation for poster_path
//   original_title: PropTypes.string.isRequired,
// };

// export default MovieCard;
// import React from "react";
// import { Card, CardContent, CardMedia, Typography } from "@mui/material";

// const MovieCard = ({ id, poster_path, original_title }) => {
//     const imageSrc = poster_path
//     ? `https://image.tmdb.org/t/p/original/${poster_path}` // Fix the URL by removing `300` from the string
//     : "https://via.placeholder.com/300x450.png?text=No+Image";

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="400"
//         image={imageSrc}
//         alt={original_title}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h6" component="div">
//           {original_title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Movie ID: {id}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default MovieCard;
// import React from "react";
// import { Card, CardContent, CardMedia, Typography } from "@mui/material";

// const MovieCard = ({ id, poster_path, original_title }) => {
//   const imageSrc = poster_path
//     ? `https://image.tmdb.org/t/p/original/${poster_path}`
//     : "https://via.placeholder.com/300x450.png?text=No+Image";

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="400"
//         image={imageSrc}
//         alt={original_title}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h6" component="div">
//           {original_title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Movie ID: {id}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default MovieCard;

import React from "react";
import { useDispatch } from "react-redux";
import './style.scss';
import {remove} from '../../store/homeSlice';
const MovieCard = ({ movie }) => {
  console.log(movie);
  const dispatch = useDispatch();

  const handleRemove = (movieId) => {
    dispatch(remove(movieId));
  };
  return (
    <div className="movie-card" onClick={() => handleRemove(movie.id)}>
      <img className="card-image" src={movie.image} alt={movie.title} />
      </div>
  );
};
export default MovieCard;

// import React from 'react';
// import { Card } from 'react-bootstrap';
// import CircleRating from '../circleRating/CircleRating'; // Assuming you have a component for CircleRating

// import './style.scss'; // Import your SCSS file for MovieCard styles

// const MovieCard = ({ movie }) => {
//   return (
//     <Card className="movieCard">
//       <div className="posterBlock">
//         <div className="lazy-load-image-background">
//           <img src={movie.image} alt={movie.title} />
//           <div className="circleRating">
//             <CircleRating rating={movie.rating} /> {/* Use appropriate movie rating */}
//           </div>
//         </div>

//       </div>
//       <Card.Body className="textBlock">
//         <Card.Title className="title">{movie.title}</Card.Title>
//         <Card.Text className="date">{movie.release_date}</Card.Text>
//         {/* Other movie details */}
//       </Card.Body>
//     </Card>
//   );
// };

// export default MovieCard;
