// import React from 'react'
import {evaluate} from 'mathjs';
import { useSelector, useDispatch } from 'react-redux';

function useCalculator() {
  const result = useSelector((state) => state.result);
  const dispatch = useDispatch();

  function handleButtonClick(value){
    if (value === '=') {
        const answer = evaluate(result);
        dispatch({type: "UPDATE_RESULT",value:answer});
    } 
    else if (value === 'CE') {
      dispatch({type:"UPDATE_RESULT",value:''});
    } 
    else {
      dispatch({type:"UPDATE_RESULT",value:result+value});
    }
  };
  return{
    result,handleButtonClick
  };
}

export default useCalculator