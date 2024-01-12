// // import { useSelector } from 'react-redux';
// // import { useNavigate } from 'react-router-dom';
// // import { FiArrowLeft } from "react-icons/fi";
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // import Card from "../../components/card/Card";
// // import './favstyle.css';
// // const Favorites = () => {
// //   const { fav } = useSelector((state) => state.favorites);

// //   const navigate = useNavigate();
// //   return (
// //     <>
// //       <div className="container ">
// //         <div className="header">
// //           <FiArrowLeft size={24} onClick={() => navigate("/")} />
// //         </div>
// //         <h4 className="title">Favorites</h4>
// //         {!fav.length && (
// //           <h3 style={{ marginTop: "70px" }}>Please add your favorite movies</h3>
// //         )}
// //         <div className="row">
// //           {fav?.map(({ id, poster_path, original_title }) => {
// //             return (
// //               <Card
// //                 key={id} // Adding key prop for React lists
// //                 id={id}
// //                 poster_path={poster_path}
// //                 original_title={original_title}
// //               />
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Favorites;
// // import React from 'react';
// // import './favstyle.css';

// // const Favorites = () => {
// //     console.log("hi")
// //   return (

// //     <div className='conatiner fav_class'>
// //       <h1 className='fav'>Favorite Page</h1>
// //       <h3 className='fav_to'>Add To Favorites</h3>
// //     </div>
// //   )
// // };

// // export default Favorites;

// //Favorite.jsx
// // import React, { useEffect } from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import MovieCard from "../../components/card/Card";
// // import "./favstyle.css";
// // import { fetchMediaDetails } from '../../store/homeSlice';

// // const Favorites = () => {
// //   const dispatch = useDispatch();
// //   const favorites = useSelector((state) => state.home.favorites); // Select only the 'favorites' array

// //   useEffect(() => {
// //     const fetchDetails = async () => {
// //       for (const id of favorites) {
// //         dispatch(fetchMediaDetails(id, 'movie'));
// //       }
// //     };

// //     fetchDetails();
// //   }, [dispatch, favorites]);

// //   return (
// //     <div className="container fav_class">
// //       <h1 className="fav">Favorite Page</h1>
// //       <div className="row">
// //         {favorites.map(({ id, poster_path, original_title }) => (
// //           <MovieCard
// //             key={`${id}`}
// //             id={id}
// //             poster_path={poster_path}
// //             original_title={original_title}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Favorites;

// // import React, { useEffect } from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import MovieCard from "../../components/card/Card";
// // import { fetchMediaDetails } from "../../store/homeSlice";

// // const Favorites = () => {
// //   const dispatch = useDispatch();
// //   const favorites = useSelector((state) => state.home.favorites);
// //   const mediaDetails = useSelector((state) => state.home.mediaDetails);

// //   useEffect(() => {
// //     const fetchDetails = async () => {
// //       console.log(favorites); // Add this line just before the for loop in useEffect

// //       for (const id of favorites) {
// //         // Check if details already exist in state, avoid re-fetching
// //         if (!mediaDetails[id]) {
// //           dispatch(fetchMediaDetails(id, "movie"));
// //         }
// //       }
// //     };

// //     fetchDetails();
// //   }, [dispatch, favorites, mediaDetails]);

// //   return (
// //     <div className="container fav_class">
// //       <h1 className="fav">Favorite Page</h1>
// //       <div className="row">
// //         {favorites.map(
// //           ({ id, poster_path, original_title }) =>
// //             // Check if poster_path and original_title are defined before rendering
// //             poster_path &&
// //             original_title && (
// //               <MovieCard
// //                 key={`${id}`}
// //                 id={id}
// //                 poster_path={poster_path}
// //                 original_title={original_title}
// //               />
// //             )
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Favorites;
// // import React from "react";
// // import "./favstyle.css";
// // // import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
// // // import InfiniteScroll from "react-infinite-scroll-component";
// // const Favorites = () => {
// //   return (
// //      <div>
// //       h
// //      </div>
// //   );
// // };

// // export default Favorites;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Grid, Card, CardMedia, CardContent, Typography } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   card: {
//     maxWidth: 250,
//     margin: theme.spacing(2),
//   },
//   media: {
//     height: 300,
//   },
// }));

// const Favorites = () => {
//   const classes = useStyles();
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     const fetchFavorites = async () => {
//       try {
//         const { data } = await axios.get(`http://localhost:4091/favorites`);
//         // Use the fetched IDs to fetch movie/TV show details
//         // Assuming you have an API endpoint to fetch details by ID
//         // Loop through data and fetch details for each ID
//         const favoritesDetails = await Promise.all(
//           data.map(async (id) => {
//             const response = await axios.get(`/media/${id}`);
//             return response.data;
//           })
//         );
//         setFavorites(favoritesDetails);
//       } catch (error) {
//         console.error("Error fetching favorites:", error);
//       }
//     };

//     fetchFavorites();
//   }, []);

//   return (
//     <div>
//       <h1>Favorites</h1>
//       <Grid container justify="flex-start">
//         {favorites.map((favorite) => (
//           <Grid item key={favorite.id}>
//             <Card className={classes.card}>
//               <CardMedia
//                 className={classes.media}
//                 image={favorite.poster}
//                 title={favorite.title}
//               />
//               <CardContent>
//                 <Typography variant="h6" component="h2">
//                   {favorite.title}
//                 </Typography>
//                 {/* Display other details */}
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default Favorites;

// import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

// function MovieCard({ title, genre, imageUrl }) {
//   return (
//     <Card>
//       <CardMedia
//         component="img"
//         height="140"
//         image={imageUrl}
//         alt={title}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="h2">
//           {title}
//         </Typography>
//         <Typography variant="body2" color="textSecondary" component="p">
//           {genre}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }
//  export default MovieCard;
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchFavorites } from '../../store/homeSlice'; // Update the path

// const FavoritesPage = () => {
//   const dispatch = useDispatch();
//   const favorites = useSelector((state) => state.home.favorites);

//   useEffect(() => {
//     dispatch(fetchFavorites());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Favorites</h1>
//       <div className="favorites-list">
//         {favorites.map((item) => (
//           <div key={item.id} className="favorite-card">
//             {/* Display favorite item details */}
//            <img src={item.image} alt={item.title} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FavoritesPage;

import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../../components/card/Card";
import "./favstyle.css";
const Favorites = () => {
  const favorites = useSelector((state) => state.home.favorites);
  console.log(favorites);
  return (
    <div className="fav">
      <h1>Favorites</h1>
      <div className="card-container ">
        <span className="mov_card">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </span>
      </div>
    </div>
  );
};
export default Favorites;
