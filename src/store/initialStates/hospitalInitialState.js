const checkUser = require('../../helpers/checkUser')();

module.exports = {
    profile: checkUser.profile,
    token: localStorage.token,
    isAuth: checkUser.isAuth,
    listOfHospitals: [],
    currentHospital: {},
    signup: {
        loading: false,
        message: '',
        errors: {}
    },
};
