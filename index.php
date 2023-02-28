<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TODO App</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <div class="container">
      <h1>TODO App</h1>
      <h3>Double click to edit tasks</h3>
      <form id="todo-form">
        <input type="text" id="todo-input" placeholder="Add a new task">
        <button type="submit">Add</button>
      </form>
      <ul id="todo-list"></ul>
      <div id="percentage"></div>
    </div>
    <script src="todo.js"></script>
    <script>
      // Set the SameSite attribute of the cookie to 'None' to allow cross-site access
      document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';
    </script>
  </body>
</html>
