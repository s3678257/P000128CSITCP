import { combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { legacy_createStore as createStore } from "redux"

import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer
} from "./reducers/userReducers"

import {
  courseCreateReducer,
  courseDetailsReducer,
  courseListReducer,
  courseUpdateReducer,
  courseDeleteReducer,
} from "./reducers/courseReducers"




const reducer = combineReducers({

  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  courseCreate: courseCreateReducer,
  courseDetails: courseDetailsReducer,
  courseList: courseListReducer,
  courseUpdate: courseUpdateReducer,
  courseDelete: courseDeleteReducer,


})



const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null


const initialState = {

  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
