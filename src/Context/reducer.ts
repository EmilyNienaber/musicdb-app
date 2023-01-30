export const reducer = (state: any, action: {type: string; payload: any}) => {
  switch (action.type) {
    case "set_loading":
      return {
        ...state,
        loading: action.payload
      }
    case "set_results":
      return {
        ...state,
        results: action.payload
      }
    case "set_artist": 
      return {
        ...state,
        artist: action.payload
      }
    case "set_albums":
      return {
        ...state,
        albums: action.payload
      }
    case "set_top":
      return {
        ...state,
        topTracks: action.payload
      }
    case "set_auth":
      console.log('setting auth', action.payload)
      return {
        ...state,
        auth: action.payload
      }
    case "set_error":
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export const initialState = {
  loading: false,
  results: [],
  artist: [],
  albums: {data: []},
  topTracks: {data: []},
  auth: null,
  error: null
}