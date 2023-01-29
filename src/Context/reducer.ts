export const reducer = (state: any, action: {type: string; payload: any}) => {
  console.log({action})
  switch (action.type) {
    case "set_loading":
      console.log({LOADING: action.payload})
      return {
        ...state,
        loading: action.payload
      }
    case "set_results" :
      return {
        ...state,
        results: action.payload
      }
    case "set_artist" : {
      return {
        ...state,
        artist: action.payload
      }
    }
    

    default:
      return state
  }
}

export const initialState = {
  loading: false,
  results: [],
  artist: [],
}