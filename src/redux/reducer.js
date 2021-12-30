import * as types from "./actionTypes";

const initialState = {
  loading: false,
  user: null,
  error: null,
  dest: [
    {
      description: "loading...",
      name: "loading...",
      travel: "loading...",
      distance: "loading...",
      image:
        "https://res.cloudinary.com/dtkdsolsz/image/upload/v1640704473/Space%20Tourism/loader_k33xf6.svg",
    },
  ],
  crew: [
    {
      description: "loading...",
      name: "loading...",
      travel: "loading...",
      distance: "loading...",
      image:
        "https://res.cloudinary.com/dtkdsolsz/image/upload/v1640704473/Space%20Tourism/loader_k33xf6.svg",
    },
  ],
  tech: [
    {
      description: "loading...",
      name: "loading...",
      image:
        "https://res.cloudinary.com/dtkdsolsz/image/upload/v1640704473/Space%20Tourism/loader_k33xf6.svg",
    },
  ],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_START:
    case types.LOGIN_START:
    case types.LOGOUT_START:
      return {
        ...state,
        loading: true,
      };
    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
      };
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case types.SIGNUP_FAIL:
    case types.LOGIN_FAIL:
    case types.LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const destReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DEST:
      return {
        dest: action.payload,
      };
    default:
      return state;
  }
};

export const crewReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CREW:
      return {
        crew: action.payload,
      };
    default:
      return state;
  }
};

export const techReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TECH:
      return {
        tech: action.payload,
      };
    default:
      return state;
  }
};
