//let users = {
   // username: 'Victor',
    //password: 'victor123',
  //  email: 'itsvictorlopez@gmail.com',
  //  subscriptionStatus: 'VIP',
  //  discordId: 'Victor#000',
  //  lessonsCompleted: [0, 1]
//}

//console.log(users.username[0]);

///console.log(users.subscriptionStatus)

// How do we map the progress of something? //

// By keeping the lesson IDS in an array //

//console.log(users.lessonsCompleted)

// we can treat the above as an array

//how to log someone into your app

/**
 * 
 * 
 * 
 * 
 * 
 * function login(email, password) {
    for (let i = 0; i < users.length; ++i) {
        if (users[i].email === email) {
            console.log(users[i]);  
            if (users[i].password === password) {
                console.log('log the user in')
            } 
        }
    }
}

login('itsvictorlopez@gmail.com', 'victor123')
 */


// then you want to loop over the user array to make sure the email matches the email

//Question//

/**
 * Create a register function that accepts:
 * - username
 * - email
 * - password
 * - subscriptionstatus
 * - discordId
 * - lessonscompleted
 * 
 * inside your register function:
 * 1. create a new user object
 * 2. push this object onto the users array
 * 
 */


function register(user) {
  user.push(user);
}

register({username: "Victor", email:"victor@test.com", password:"victor123", subscriptionStatus:"a winner", discordId:"discord123", lessonsCompleted:[1, 2]});

console.log(users);

// go over objects again

// DOM // 

// The DOM allows you to access and change the styling and content of elements on your website.