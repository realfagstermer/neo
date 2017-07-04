import { CALL_API } from "redux-api-middleware";
import { serverURL } from  "../api";
import store from "../store";
import { GET, FAILURE } from "./actions";

// Action types
export const GET_USER = "GET_USER";
export const RECEIVE_USER= "RECEIVE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const PUT_USER = "PUT_USER";

// Action creators
export function getAllUsers() {
    return {
      [CALL_API]: {
        endpoint: `${serverURL}/users`,
        method: 'GET',
        types: [GET, RECEIVE_ALL_USERS, FAILURE]
      }
    }
}

export function getUser(id) {
    return {
      [CALL_API]: {
        endpoint: `${serverURL}/users/${id}`,
        method: 'GET',
        types: [GET_USER, RECEIVE_USER, FAILURE]
      }
    }
}

export function putUser(user) {
    console.log("saving user", user);
    return {
      [CALL_API]: {
        endpoint: `${serverURL}/users/${user.id}`,
        method: 'PUT',
        types: [PUT_USER, RECEIVE_USER, FAILURE]
      }
    }
}


// Bound action creators
export const boundGetAllUsers = () => store.dispatch(getAllUsers());
export const boundGetUser = id => store.dispatch(getUser(id));
export const boundPutUser = user => store.dispatch(putUser(user));
