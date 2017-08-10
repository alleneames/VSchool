let defaultState = {
  lat: 40.7608,
  lng: -111.8910,
  markers: [
    {
      position: {
        lat: 40.770743,
        lng: -111.885062
      },
      key: "V School",
      defaultAnimation: 2
    }
  ]
};

const mainReducer = (state = defaultState, action) => {
  return {
    ...state
  }
}

export default mainReducer;