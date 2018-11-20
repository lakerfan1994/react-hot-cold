export const SET_FEEDBACK = 'SET_FEEDBACK';
export const setFeedBack = feedback => ({
	type: SET_FEEDBACK,
	feedback
});

export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = guess => ({
	type: ADD_GUESS,
	guess
});