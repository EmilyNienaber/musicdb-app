import { useContext, useEffect, useMemo, useState } from "react";
import { Context } from "../Context/Context";

export const useFetch = (path: string) => {
  const baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/';
  const [state, dispatch] = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const params = {
    "method": "GET",
    "headers": {
      "Accept": 'application/json',
      "Content-Type" : "application/json"
    }
  }

  const doFetch = (uri: string, type: string) => {
    dispatch({type: "set_loading", payload: true})
    try {
      fetch(uri, params).then(resp => {
        try{
          resp.json().then(data => {
            dispatch({type, payload: data})
            dispatch({type: "set_loading", payload: false})
        })
        } catch(e:any) {
          dispatch({type: "set_loading", payload: false})
          console.log("DEEP ERROR" + e.message)
        }
      })
    } catch(err: any) {
      dispatch({type: "set_loading", payload: false})
      dispatch({type: "set_error", payload: err})
      console.log('ERROR' + err.message)
    }
  }

  const getArtist = () => {
    doFetch(`${baseUrl}artist/${path}`, "set_artist");
    getAlbums();
    getTopTracks();
  }

  const getAlbums = () => {
    doFetch(`${baseUrl}artist/${path}/albums`, "set_albums")
  }

  const getTopTracks = () => {
    doFetch(`${baseUrl}artist/${path}/top`, "set_top")
  }

  const getSearch = () => {
    doFetch(`${baseUrl}search?q=${path}`, "set_results")
  }

  return {getArtist, getSearch}
}

