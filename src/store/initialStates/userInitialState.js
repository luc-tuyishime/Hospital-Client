const checkUser = require('../../helpers/checkUser2')();

module.exports = {
    profile: checkUser.profile,
    tokenUser: localStorage.tokenUser,
    isAuth: checkUser.isAuth,
    listOfUsers: [],
    currentUser: {},
    createUser: {
        loading: false,
        message: '',
        errors: {}
    },
    loginUser: {
        loading: false,
        message: '',
        errors: {}
    },
    logout: {
        loading: false,
        message: '',
        errors: {}
    },
    forgotPassword: {
        loading: false,
        message: '',
        errors: {}
    },
    resetPassword: {
        loading: false,
        message: '',
        errors: {}
    }
};
