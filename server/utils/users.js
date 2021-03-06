

class Users {
    constructor () {
        this.users = [];
    }

    addUser (id , name,  room) {

        let user = {id, name, room};
        this.users.push(user);
        return user;
    }

    checkUser (name) {
        return this.users.find((user) => user.name === name);
        
    }

    removeUser (id) {
        let userToRemove =  this.getUser(id);

        if (userToRemove) {
            this.users = this.users.filter((user) => user.id !== id);
        }

        return userToRemove;
        
    }
    getUser (id) {
        return this.users.filter((user) => user.id === id)[0];
    }

    getRooms () {
        let rooms = this.users.map((user) => user.room);
        return rooms.reduce(function(a, b){
            if (a.indexOf(b) < 0 ) a.push(b);
            return a;
        },[]);
    }

    getUserList (room) {
        let users = this.users.filter((user) => user.room === room);
        let namesArray = users.map((user) => user.name);

        return namesArray;
    }
}

module.exports ={Users};