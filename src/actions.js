import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js'

export const setSearchField =  (text) => ({
 type: CHANGE_SEARCH_FIELD,
 payload: text
})

// API CALL WITH PENDING BY DEFAULT AND PAYLOAD DEPENDANT ON SUCCESS OR FAILURE
// This is a function that return a function
// in redux - dispatches with function as returns are prioritized over normal returns
export const requestRobots = () => (dispatch)=>{
    dispatch({type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch ({type: REQUEST_ROBOTS_SUCCESS , payload: data}))
    .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}