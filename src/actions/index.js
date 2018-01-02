export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const MULTIPLY_BY_5 = 'MULTIPLY_BY_5';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const SUM_OF_DIGITS = 'SUM_OF_DIGITS';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the centra Redux store. That
// is left to the reducer(s).

// action creator:
export const increment = (currValue) => {
   // Fill in this function 
   return {
   	type: INCREMENT,
   	inputValue: currValue
   }
};

// action creator:
export const decrement = (currValue) => {
   // Fill in this function 
   return {
   	type: DECREMENT,
   	inputValue: currValue
   }
};

// action creator:
export const multiplyBy5 = () => {
   // Fill in this function 
   return {
   	type: MULTIPLY_BY_5
   }
};

// action creator:
export const sumOfDigits = () => {
   // Fill in this function 
   return {
   	type: SUM_OF_DIGITS
   }
};
