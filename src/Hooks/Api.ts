import { useContext, useEffect, useMemo, useState } from "react";
import { Context } from "../Context/Context";

export const useFetch = (path: string) => {
  const baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/';
  const [state, dispatch] = useContext(Context);
  const [data, setData] : any = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const params = {
    "method": "GET",
    "headers": {
      "Accept": 'application/json',
      "Content-Type" : "application/json"
    }
  }

  const getArtist = () => {
    dispatch({type: "set_loading", payload: true})
    try {
      fetch(`${baseUrl}artist/${path}`, params).then(resp => {
        try{
          resp.json().then(data => {
            console.log({data});
            dispatch({type: "set_artist", payload: data})
            dispatch({type: "set_loading", payload: false})
            // setData(resp)
        })
        } catch(e) {
          dispatch({type: "set_loading", payload: false})
          console.log({e})
        }
      })
    } catch(err) {
      dispatch({type: "set_loading", payload: false})
      console.log(err)
    }
  }

  const getSearch = () => {
    dispatch({type: "set_loading", payload: true})
    try {
      fetch(`${baseUrl}search?q=${path}`, params).then(resp => {
        try{
          resp.json().then(data => {
            console.log({data});
            dispatch({type: "set_results", payload: data})
            dispatch({type: "set_loading", payload: false})
            // setData(resp)
        })
        } catch(e) {
          dispatch({type: "set_loading", payload: false})
          console.log({e})
        }
      })
    } catch(err) {
      dispatch({type: "set_loading", payload: false})
      console.log(err)
    }
  }

  return {data, loading, error, getArtist, getSearch}
}

