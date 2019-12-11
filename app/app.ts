import express = require('express');
import { UserController } from './api/controller/user';
import bodyParser from 'body-parser';
import { ToDoController } from './api/controller/toDo';

// Create a new express application instance
const app: express.Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var userController = new UserController();
app.post("/api/v1/user",userController.registration)
app.post("/api/v1/login",userController.login)

var toDoController = new ToDoController();
app.post("/api/v1/toDo",toDoController.create)
app.put("/api/v1/toDo/:id",toDoController.update)
app.delete("/api/v1/toDo/:id",toDoController.remove)
app.get("/api/v1/toDo/:userId",toDoController.getForUser)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
export default app;