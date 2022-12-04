// action creators related to auth state;
export const loginLoadingAction = (lr) => {
    return {type: "LOGIN_LOADING",payload:lr}
    
};

export const loginSuccessAction= (data) => {
   return {type: "LOGIN_SUCCESS",
    payload:data
}
}

export const loginFailureAction = (lf) => {
   return { type: "LOGIN_FAILURE",payload:lf
}
};

