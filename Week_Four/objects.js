
//This is a user object with two attributes of name and password

let user = { username: 'Joel', password: 'fakerpassword' }

// print your username
// print your password
console.log(user.username)
console.log(user.password)

// another way to print your password
let password = user.password
console.log(password)

// add email to user object
user.email = 'user@user.com'
console.log(user)

let roles = ['answer emails', ' make pwoerpoints']

user.roles = roles
console.log(roles)

let contact = { office: 'roomNum', phone: '1234567899' }

user.contact = contact
console.log(contact)
