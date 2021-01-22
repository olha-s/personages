export const LOADING_CARDS = "LOADING_CARDS";
export const GET_RACE = "GET_RACE";
export const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";
export const GET_IMAGE = "GET_IMAGE";
export const GET_INFO_FORM = "GET_INFO_FORM";
export const ADD_RACE = "ADD_RACE";
export const CHANGE_NAME = "CHANGE_NAME";
export const DELETE_ITEM = "DELETE_ITEM";

export const CardsIsLoading = (isLoading) => ({
  type: TOGGLE_IS_LOADING,
  payload: isLoading
});

export const loadCards = (socket) => (dispatch) => {
  return (
    dispatch(CardsIsLoading(true)),
   socket.onopen = () => {
    socket.send({ cmd: "git_list" });
  },
  socket.onmessage = (message) => {
      const data = JSON.parse(message.data);
      dispatch({ type: "LOADING_CARDS", payload: data});
      dispatch(getRace(data.map(el => el.race)));
      dispatch(CardsIsLoading(false));
      }
)
}

export const getPhoto = (name) =>({
  type: GET_IMAGE,
  payload: name
});

export const getRace = (race) => ({
type: GET_RACE,
  payload: race
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id
});

export const getInfoForm = (valueForm) => (dispatch) =>{
  return (
    dispatch({type: 'GET_INFO_FORM', payload: valueForm}),
   dispatch({type: 'ADD_RACE', payload: valueForm.race})
  )
};
export const getInfoFormName = (valueForm) => (dispatch) =>{
  return (
    dispatch({type: 'CHANGE_NAME', payload: valueForm})
  )
};

