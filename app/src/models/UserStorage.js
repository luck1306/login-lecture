"use strict";

class UserStorage {
    static #users = {
        id : ['woorimIT', '나개발', 'id'],
        psword :['1234','123456', 'password'],
        name : ['우리밋',  '나개발', 'test'],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    };
    static getUserInfo(id) {
        const user = this.#users;
        const idx = user.id.indexOf(id);
        const usersKeys = Object.keys(user);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[idx] = user[info][idx];
            return newUser;
        }, {})
        return userInfo;
    }
}

module.exports = UserStorage;