function sigin() {
  // event.preventDefault();

  var username = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var email = document.getElementById("email").value;

  var user = {
    email: email,
    username: username,
    password: pass,
  };

  localStorage.setItem(username, JSON.stringify(user));
}

function login()
{
  event.preventDefault();
  var username = document.getElementById("username").value;
  var pass = document.getElementById("password").value;

  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  console.log(data);

  if (username == data.username && pass == data.password)
  {
    var login = document.getElementById("login-form");
    login.submit();
  }
  else
  {
    alert("Invalid username or password");
  }
}
