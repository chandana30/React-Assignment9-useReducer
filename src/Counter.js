import React, { useReducer } from 'react'

function Counter() {

    let initialState=0;
    let reducer=(prevState,action)=>{
        switch(action.type){
            case 'increment':
                return prevState+1;
            case 'decrement':
                return prevState-1;
            case 'reset':
              return initialState;
            default:  
            return prevState;


              
        }

    };
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <p>Counter: {state} </p>
            <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
            <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
            <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
            
        </div>
    )
}

export default Counter
