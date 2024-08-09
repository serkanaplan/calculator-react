import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        display: '0',
        previousValue: null,
        operation: null,
    },
    reducers: {
        addDigit: (state, action) => {
            state.display = state.display === '0' ? action.payload : state.display + action.payload;
        },
        setOperation: (state, action) => {
            state.previousValue = parseFloat(state.display);
            state.operation = action.payload;
            state.display = '0';
        },
        calculate: (state) => {
            const current = parseFloat(state.display);
            let result;
            switch (state.operation) {
                case '+': result = state.previousValue + current; break;
                case '-': result = state.previousValue - current; break;
                case '*': result = state.previousValue * current; break;
                case '/': result = state.previousValue / current; break;
                default: return;
            }
            state.display = result.toString();
            state.previousValue = null;
            state.operation = null;
        },
        clear: (state) => {
            state.display = '0';
            state.previousValue = null;
            state.operation = null;
        },
    },
});

export const { addDigit, setOperation, calculate, clear } = calculatorSlice.actions;
export default calculatorSlice.reducer;