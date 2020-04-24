console.log('hi from signup.tsx');

$('#signupForm').on('submit', (e) => {
  e.preventDefault();
    /*const path = $('#signupForm').attr('action');
    sendFetch(path !== undefined?path:'/', {method:'POST',body:$("#signupForm").serialize()},
    (res:any)=>{ redirect(res.redirect);},(res:any)=>{});*/
  const path = $('#signupForm').attr('action');
  sendAjax(path !== undefined ? path :'/', $('#signupForm').serialize());
});
