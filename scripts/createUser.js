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
                .attr('id', 'reg')
                .attr('type', 'radio');
})



$(function(formFunction){
     function formFunction(form){
         form = $('#login-input');
         form.addEventListener("submit", sendSubmit);
     }
     function sendSubmit(e){
         e.preventDefault();

         const {
             username, password, login_type, result
         } = event.target;
         const handleUser = login_type.value == "register" ? registerUser: loginUser;
         const reaction = handleUser(username.value, password.value);
         result.innerHTML = reaction;
     }
     function registerUser(username, password){
         window.localStorage.setItem("USERNAME", username);
         window.localStorage.setItem("PASSWORD", password);
     }
})