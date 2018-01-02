import { INCREMENT, DECREMENT, MULTIPLY_BY_5, SET_INPUT_VALUE, SUM_OF_DIGITS } from '../actions';

// Our reducer that handles our two action cases,
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do the count in each case?
export default (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      // Fill in the body of this case
      return count + action.inputValue; // NOTE: doing "++count" OR in this example "count=count+action.inputValue" might give correct result but its wrong.
                                        // A state should never be modified. instaed a reducer should always return the new state.
                                        // For ex: "return count + 1" OR in this example "return count + action.inputValue"

    case DECREMENT:
      // Fill in the body of this case
      return count - action.inputValue;

    case MULTIPLY_BY_5:
      return count * 5;

    case SET_INPUT_VALUE:
      return count + action.inputValue;

    case SUM_OF_DIGITS: {
      if(count >= -9 && count <= 9) return count;

      let tempCount = count;
      if(tempCount < 0) {
        tempCount *= -1;
      }
      let sum = 0;
      while(tempCount > 0) {
        sum += Math.floor(tempCount % 10);
        tempCount = Math.floor(tempCount / 10);
      }
      if(count < 0) {
        sum *= -1;
      }
      return sum;
    }

    default:
      return count;
  }
};