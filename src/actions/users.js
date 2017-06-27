import { CALL_API } from "redux-api-middleware";
import { serverURL } from  "../api";
import store from "../store";
import { GET, FAILURE } from "./actions";

// Action types
export const GET_USERS = "GET_USERS";
export const RECEIVE_USERS = "RECEIVE_USERS";

// Action creators
export function getAllUsers() {
    return {
      [CALL_API]: {
        endpoint: `${serverURL}/users`,
        method: 'GET',
        types: [GET, RECEIVE_USERS, FAILURE]
      }
    }
  }

// Bound action creators
export const boundGetAllUsers = () => store.dispatch(getAllUsers());
