import * as actions from '../actions';


const initialState ={
	guesses: [8],
	feedback: 'Make your guess',
	auralStatus: '',
	correctAnswer: 24
};


export const hotColdReducer =(state=initialState, action) => {
	if(action.type === actions.SET_FEEDBACK) {
		return Object.assign({}, state, {
			...state, feedback: action.feedback
		})
	}

	else if(action.type === action.ADD_GUESS) {
		
		return Object.assign({}, state, {
			...state, 
			guesses: state.guesses.push(action.guess)
			//[...state.guesses, action.guess]
		})
	}


	return state;
}

	