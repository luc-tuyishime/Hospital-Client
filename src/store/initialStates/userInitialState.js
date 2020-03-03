const checkUser = require('../../helpers/checkUser')();

module.exports = {
    profile: checkUser.profile,
    token: localStorage.token,
    isAuth: checkUser.isAuth,
    listOfUsers: [],
    currentUser: {},
    signup: {
        loading: false,
        message: '',
        errors: {}
    },
    login: {
        loading: false,
        message: '',
        errors: {}
    },
};
