module.exports = () => {
    try {
        const profile = JSON.parse(localStorage.hospital || '{}');
        const isAuth = !!(localStorage.token && Object.keys(profile).length);
        console.log('1', isAuth);
        return {
            profile,
            isAuth
        };
    } catch (error) {
        return {
            profile: {},
            isAuth: false
        };
    }
};
