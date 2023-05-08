//index.js

const functions = require('firebase-functions');
const app = require('express')();
const auth = require('./util/auth');

const {
    getAllTodos,
    postOneTodo,
    deleteTodo,
    editTodo
} = require('./APIs/todos')

const {
     loginUser,
     signUpUser,
     uploadProfilePhoto,
     getUserDetail,
     updateUserDetails
 } = require('./APIs/users')
 
 // Users
app.post('/login', loginUser); //assign post route to loginUser method
app.post('/signup', signUpUser);
app.post('/user/image', auth, uploadProfilePhoto); //assign post route to signUpUser method
//added authetication layer so only user associated with account can upload image
app.post('/user', auth, updateUserDetails);

app.get('/todos', auth, getAllTodos);
app.get('/user', auth, getUserDetail);
app.post('/todo', auth, postOneTodo);
app.delete('/todo/:todoId', auth, deleteTodo);
app.put('/todo/:todoId', auth, editTodo);
exports.api = functions.https.onRequest(app);
//added authorisation layer for all to secure