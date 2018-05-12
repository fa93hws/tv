const login = {
    withPassword: function (id, pass) {
        // ajax userName, avatar, userId, success
        return {
            userInfo: {
                userName: '某人',
                avatar: '0.png',
                userId: 1,
            },
            success: true
        }
    }
}
export default {
    login,
}