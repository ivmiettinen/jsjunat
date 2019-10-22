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