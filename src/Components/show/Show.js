import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { apiGet } from "../../misc/config";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "FETCH_SUCCES": {
      return { isLoading: false, error: null, show: action.show };
    }
    case "FETCH_FAILED": {
      return { ...prevState, isLoading: false, error: action.error };
    }

    default: {
      return prevState;
    }
  }
};

const initialState = {
  show: null,
  isLoading: true,
  error: null,
};

const Show = () => {
  const { id } = useParams();

  const [{ show, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    let isMounted = true;
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((res) => {
        if (isMounted) {
          dispatch({ type: "FETCH_SUCCES", show: res });
        }
      })
      .catch((err) => {
        if (isMounted) {
          dispatch({ type: "FETCH_FAILED", show: err.message });
        }
      });
    return () => {
      isMounted = false;
    };
  }, [id]);
  if (isLoading) {
    return <div>Date is being loaded</div>;
  }
  if (error) {
    return <div>error</div>;
  }

  return <div>this is show page</div>;
};

export default Show;
