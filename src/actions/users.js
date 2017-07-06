import { CALL_API } from "redux-api-middleware";
import { serverURL } from  "../api";
import store from "../store";
import { GET, NONE, FAILURE } from "./actions";

// Send credentials with api calls, switch to "same-origin" for production?
export const credentials  ="include";

// Action types

export const GET_USER = "GET_USER";
export const RECEIVE_USER= "RECEIVE_USER";
export const RECEIVE_CURRENT_USER=  "RECEIVE_CURRENT_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const PUT_USER = "PUT_USER";

// Action creators
export function getAllUsers() {
    return {
      [CALL_API]: {
        endpoint: `${serverURL}/users`,
        method: 'GET',
        credentials,
        types: [GET, RECEIVE_ALL_USERS, FAILURE]
      }
    }
}

export function getUser(id) {
    return {
      [CALL_API]: {
        endpoint: `${serverURL}/users/${id}`,
        method: 'GET',
        credentials,
        types: [GET_USER, RECEIVE_USER, FAILURE]
      }
    }
}

export function getCurrentUser() {
    console.log("getting current user");
    return {
      [CALL_API]: {
        endpoint: `${serverURL}/me`,
        method: 'GET',
        credentials,
        types: [GET, RECEIVE_CURRENT_USER, FAILURE]
      }
    }
}

export function putUser(user) {
    console.log("saving user", user);
    return {
      [CALL_API]: {
        endpoint: `${serverURL}/users/${user.id}`,
        method: 'PUT',
        credentials,
        types: [PUT_USER, NONE, FAILURE]
      }
    }
}


// Bound action creators
export const boundGetAllUsers = () => store.dispatch(getAllUsers());
export const boundGetUser = id => store.dispatch(getUser(id));
export const boundGetCurrentUser = () => store.dispatch(getCurrentUser());
export const boundPutUser = user => store.dispatch(putUser(user));
