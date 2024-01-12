// import { createSlice } from '@reduxjs/toolkit'

// export const homeSlice = createSlice({
//   name: 'home',
//   initialState:{
//     url: {},
//     genres:{},
//     favorites: [], // Array to store favorite items
//     watchlist: [], // Array to store watchlist items
//   },
//   reducers: {
//     getApiConfiguration : (state,action)=>{
//          state.url=action.payload;
//     },
//     getGenres : (state,action) => {
//         state.genres= action.payload
//     },
//     addToFavorites: (state, action) => {
//       const itemId = action.payload;
//       if (!state.favorites.includes(itemId)) {
//         state.favorites.push(itemId);
//       } else {
//         state.favorites = state.favorites.filter((id) => id !== itemId);
//       }
//     },
//     addToWatchlist: (state, action) => {
//       const itemId = action.payload;
//       if (!state.watchlist.includes(itemId)) {
//         state.watchlist.push(itemId);
//       } else {
//         state.watchlist = state.watchlist.filter((id) => id !== itemId);
//       }
//     },
//   },
// })

// // Action creators are generated for each case reducer function
// // export const { getApiConfiguration, getGenres } = homeSlice.actions

// // export default homeSlice.reducer;
// export const {
//   getApiConfiguration,
//   getGenres,
//   addToFavorites,
//   addToWatchlist,
// } = homeSlice.actions;

// export default homeSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import { db } from './firebaseConfig';

// export const homeSlice = createSlice({
//   name: 'home',
//   initialState: {
//     url: {},
//     genres: {},
//     favorites: [], // Array to store favorite items
//     watchlist: [], // Array to store watchlist items
//   },
//   reducers: {
//     getApiConfiguration: (state, action) => {
//       state.url = action.payload;
//     },
//     getGenres: (state, action) => {
//       state.genres = action.payload;
//     },
//     addToFavorites: (state, action) => {
//       const newItem = action.payload;
//       if (!state.favorites.find(item => item.id === newItem.id)) {
//         state.favorites.push(newItem);
//       } else {
//         state.favorites = state.favorites.filter(item => item.id !== newItem.id);
//       }
//     },

//     addToWatchlist: (state, action) => {
//       const newItem = action.payload;
//       if (!state.watchlist.find(item => item.id === newItem.id)) {
//         state.watchlist.push(newItem);
//       } else {
//         state.watchlist = state.watchlist.filter(item => item.id !== newItem.id);
//       }
//     },

//   },
// });

// export const {
//   getApiConfiguration,
//   getGenres,
//   addToFavorites,
//   addToWatchlist
// } = homeSlice.actions;

// // Async action creators for interacting with Firebase
// export const fetchFavorites = () => async (dispatch) => {
//   try {
//     const response = await fetch("http://localhost:5000/favorites");
//     const favorites = await response.json();
//     dispatch(setFavorites(favorites));
//   } catch (error) {
//     console.error("Error fetching favorites:", error);

//   }
// };

// export const addToFavorites = (item) => async (dispatch) => {
//   try {
//     const response = await fetch("http://localhost:5000/favorites", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(item),
//     });
//     const addedItem = await response.json;

//     dispatch(fetchFavorites());
//   } catch (error) {
//     console.error("Error adding to favorites:", error);
//     // Handle error if needed
//   }
// };
// export default homeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
export const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
    favorites: [],
    watchlist: [],
  },
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
    addToFavorites: (state, action) => {
      const itemId = action.payload.id;
      if (!state.favorites.some((item) => item.id === itemId)) {
        state.favorites.push(action.payload);
      }
    },
    
    addToWatchlist: (state, action) => {
      const itemId = action.payload;
      if (!state.watchlist.some((item) => item.id === itemId)) {
        state.watchlist.push(action.payload);
      }
    },
    remove: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    },
    removeWatch: (state, action) => {
      console.log(state+"hi");
      state.watchlist = state.watchlist.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  getApiConfiguration,
  getGenres,
  addToFavorites,
  addToWatchlist,
  remove,
  removeWatch,
} = homeSlice.actions;

export default homeSlice.reducer;
