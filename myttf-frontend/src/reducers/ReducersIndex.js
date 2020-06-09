import { combineReducers } from 'redux';
import signUp from './SignUpReducer'
import player from './PlayersReducer';
// import matches from './MatchesReducer';
import login from "./LoginFormReducer";

console.log("Combining reducers and creating store/state.")

export default combineReducers({
    signUp, login, player
});

// Longhand syntax:
// export default combineReducer({
//     player: player,
//     matches: matches,
//     current_player: current_player,
//     login: login 
// })

// store.js imports this file and creates the store.

// When importing state from reducers, "players" and "matches" is being named here in the import statement, as they are default exports from the individual reducers.

// ? When dispatching an action, dispatch will look for the the correct action.type in any/all of the reducer files. As long as they are combined here. But it is in the reducer that determines what state you'll be using.