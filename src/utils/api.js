import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: "Bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};


// export const fetchMediaDetailsById = async (id, mediaType) => {
//   try {
//     const params = {
//       language: 'en-US', // Example language parameter
//       append_to_response: 'credits', // Example additional details to append
//     };

//     const url = `/${mediaType}/${id}`; // Construct the URL based on media type

//     const mediaDetails = await fetchDataFromApi(url, params);
//     return mediaDetails;
//   } catch (error) {
//     console.error('Error fetching media details:', error);
//     throw error;
//   }
// };