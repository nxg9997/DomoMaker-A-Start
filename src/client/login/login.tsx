// console.log('hi from login.tsx');

// - sends a login request using the login form
$('#loginForm').on('submit', (e) => {
  e.preventDefault();
    /*const path = $('#signupForm').attr('action');
    sendFetch(path !== undefined?path:'/', {method:'POST',body:$("#signupForm").serialize()}
    ,(res:any)=>{ redirect(res.redirect);},(res:any)=>{});*/
  const path = $('#loginForm').attr('action');
  sendAjax(path !== undefined ? path :'/', $('#loginForm').serialize());
});
