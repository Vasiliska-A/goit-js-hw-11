//toggleUserState function
const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: false },
];

const toggleUserState = (allUsers, username,) => {
    return new Promise((resolve, reject) => {
        const updatedUsers = allUsers.map(user =>
            user.name === username ? { ...user, active: !user.active } : user
        );
        resolve(updatedUsers);
    });
  
};
const result =  updatedUsers => console.table(updatedUsers);


// Currently the function works like this
// toggleUserState(users, 'Mango', console.table);
// toggleUserState(users, 'Ajax', console.table);

// The function should work like this
toggleUserState(users, 'Mango').then(console.table);
toggleUserState(users, 'Poly').then(console.table);