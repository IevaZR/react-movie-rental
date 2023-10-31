import { createAction } from "@reduxjs/toolkit";

export const loginUser = createAction("user/login");
export const clearLoginError = createAction("user/clearError");
