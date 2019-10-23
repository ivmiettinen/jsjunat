//create Login-Form
$(function(){
    $('<form></form>')
                .appendTo('body')
                .attr('id','login-input')
                .attr('action', 'submit');

    $('<fieldset></fieldset>')
                .appendTo('#login-input')
                .attr('id', 'field1');
    $('<p></p>')
                .appendTo('#field1')   
                .text('User Credentials')
                .attr('id', 'creds');
    $('<div></div>')
                .attr('id', 'user-div')
                .insertAfter('#creds');
    $('<label></label>')
                .appendTo('#user-div')
                .attr('for', 'username')
                .text('Username')
                .attr('id', 'user-label');
    $('<input />')
                .appendTo('#user-div')
                .insertAfter('#user-label')
                .attr('type', 'text')
                .attr('id', 'username')
                .attr('name', 'username')
                .attr('placeholder', 'Reittiopas1')
                .attr('required', 'required');
    $('<div></div>')
                .appendTo('#field1')
                .insertAfter('#user-div')
                .attr('id', 'pass-div');
    $('<label></label>')
                .appendTo('#pass-div')
                .attr('for', 'password')
                .text('Password')
                .attr('id', 'pass-label');
    $('<input />')
                .appendTo('#pass-div')
                .insertAfter('#pass-label')
                .attr('type', 'password')
                .attr('id', 'password')
                .attr('name', 'password')
                .attr('placeholder', '********')
                .attr('required', 'required');
    $('<fieldset></fieldset>')
                .appendTo('#login-input')
                .insertAfter('#field1')
                .attr('id', 'field2');
    $('<p></p>')
                .appendTo('#field2')
                .text('Login Type')
                .attr('id', 'ltype');
    $('<span></span>')
                .appendTo('#field2')
                .insertAfter('#ltype')
                .attr('id', 'reg-span');
    $('<input />')
                .appendTo('#reg-span')
                .attr('id', 'register')
                .attr('type', 'radio')
                .attr('name', 'login_type')
                .attr('value', 'register');
    $('<label></label>')
                .appendTo('#reg-span')
                .attr('for', 'register')
                .text('Register');
    $('<span></span>')
            .appendTo('#field2')
            .insertAfter('#reg-span')
            .attr('id', 'login-span');
    $('<input />')
            .appendTo('#login-span')
            .attr('id', 'login')
            .attr('type', 'radio')
            .attr('name', 'login_type')
            .attr('value', 'login');
    $('<label></label>')
            .appendTo('#login-span')
            .attr('for', 'login')
            .text('Login');
    $('<input />')
            .appendTo('#login-input')
            .insertAfter('#field2')
            .attr('type', 'submit')
            .attr('id', 'submit-btn')
            .attr('value', 'Submit');

    $('<output></output>')
            .insertAfter("#submit-btn")
            .attr('name', 'result');

  
       
           
})
$(function(){
    formFunction();
      function formFunction(form){
          form = document.getElementById('login-input');
          form.addEventListener('submit', sendSubmit);
      }
      function sendSubmit(e){
          e.preventDefault();
 
          const {
              id, username, password, login_type, result
          } = event.target;
          const handleUser = login_type.value == "register" ? registerUser: loginUser;
          const reaction = handleUser(username.value, password.value);
          result.innerHTML = reaction;
      }
      function registerUser(username, password){
          var details = [{"id":username,"details": {"username": username, "password": password}}];
          localStorage.setItem(username, JSON.stringify(details));
        
          return `Uusi käyttäjä ${username} on nyt rekisteröity`;
      }
      function loginUser (username, password){
         
          const userdata=JSON.parse(localStorage.getItem(username));
          var userCheck = userdata;
          if(userCheck === null){
              return `Käyttäjää ${username} ei ole rekisteröity`;
          }
          else{
          const user=userdata.find(function(u){
              return u.id===username
          })
           const registeredUser = user.details.username;
          const registeredPassword = user.details.password;
          console.dir(user);
          const validUser = user.details.username == registeredUser;
          const validPassword = password == registeredPassword;
          if(validUser && validPassword){return `Tervetuloa takaisin ${username} !`;}
         
          else if(!validPassword) {return `Väärä salasana käyttäjälle ${username}`}
        }
      } 
 })


