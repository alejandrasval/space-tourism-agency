import * as types from "./actionTypes";
import { auth, firestore } from "../firebase/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const signUpStart = () => ({
  type: types.SIGNUP_START,
});

const signUpSuccess = (user) => ({
  type: types.SIGNUP_SUCCESS,
  payload: user,
});

const signUpError = (error) => ({
  type: types.SIGNUP_FAIL,
  payload: error,
});

const logInStart = () => ({
  type: types.LOGIN_START,
});

const logInSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const logInError = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

const logOutStart = () => ({
  type: types.LOGOUT_START,
});

const logOutSuccess = (user) => ({
  type: types.LOGOUT_SUCCESS,
});

const logOutError = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

export const setDest = (data) => ({
  type: types.GET_DEST,
  payload: data,
});

export const setCrew = (data) => ({
  type: types.GET_CREW,
  payload: data,
});

export const setTech = (data) => ({
  type: types.GET_TECH,
  payload: data,
});

export const signUpInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(signUpStart());
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(signUpSuccess(user));
      })
      .catch((error) => dispatch(signUpError(error.message)));
  };
};

export const logInInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(logInStart());
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(logInSuccess(user));
      })
      .catch((error) => dispatch(logInError(error.message)));
  };
};

export const logOutInitiate = () => {
  return function (dispatch) {
    dispatch(logOutStart());
    signOut(auth)
      .then((resp) => dispatch(logOutSuccess()))
      .catch((error) => dispatch(logOutError(error.message)));
  };
};

export const getDest = (destination) => {
  return async (dispatch) => {
    const data = collection(firestore, "destinations");
    const search = query(data, where("name", "==", destination));
    const datos = await getDocs(search);
    const elements = [];
    datos.forEach((element) => {
      elements.push({
        id: element.id,
        ...element.data(),
      });
    });
    dispatch(setDest(elements));
  };
};

export const getCrew = (member) => {
  return async (dispatch) => {
    const data = collection(firestore, "crew");
    const search = query(data, where("name", "==", member));
    const datos = await getDocs(search);
    const elements = [];
    datos.forEach((element) => {
      elements.push({
        id: element.id,
        ...element.data(),
      });
    });
    dispatch(setCrew(elements));
  };
};

export const getTech = (ship) => {
  return async (dispatch) => {
    const data = collection(firestore, "technology");
    const search = query(data, where("name", "==", ship));
    const datos = await getDocs(search);
    const elements = [];
    datos.forEach((element) => {
      elements.push({
        id: element.id,
        ...element.data(),
      });
    });
    dispatch(setTech(elements));
  };
};
