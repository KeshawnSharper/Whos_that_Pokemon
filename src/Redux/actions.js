import axios from "axios";

export function getCharacters() {
  return (dispatch) => {
    dispatch({
      type: "GET_CHARACTERS"
    });
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=1118`)
      .then((res) => {
        dispatch({
          type: "GET_CHARACTERS_SUCCESS",
          characters: res.data.results
        });
      })
      .catch((err) => {
        dispatch({ type: "GET_CHARACTERS_FAILED", characters: err });
      });
  };
}
export function getCharacter(url) {
  return (dispatch) => {
    dispatch({
      type: "GET_CHARACTER"
    });
    console.log(url);
    axios.get(url).then((res) => {
      console.log(res);
      dispatch({
        type: "GET_CHARACTER_SUCCESS",
        character: res.data
      });
    });
  };
}
