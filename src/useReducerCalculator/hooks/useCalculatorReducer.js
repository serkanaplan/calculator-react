import { useReducer } from 'react';

const initialState = {
  display: '0',
  previousValue: null,
  operation: null,
};

function calculatorReducer(state, action) {
  switch (action.type) {
    case 'ADD_DIGIT':
      return {
        ...state,
        display: state.display === '0' ? action.payload : state.display + action.payload,
      };
    case 'SET_OPERATION':
      return {
        ...state,
        previousValue: parseFloat(state.display),
        operation: action.payload,
        display: '0',
      };
    case 'CALCULATE':
      const current = parseFloat(state.display);
      let result;
      switch (state.operation) {
        case '+': result = state.previousValue + current; break;
        case '-': result = state.previousValue - current; break;
        case '*': result = state.previousValue * current; break;
        case '/': result = state.previousValue / current; break;
        default: return state;
      }
      return {
        ...state,
        display: result.toString(),
        previousValue: null,
        operation: null,
      };
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
}

const useCalculatorReducer = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return {
    state,
    dispatch
  };
};

export default useCalculatorReducer;