"use strict";
// console.log('hi from msgs.tsx');
// - sends a new message based on the message form
$('#msgForm').on('submit', (e) => {
    e.preventDefault();
    /*const path = $('#signupForm').attr('action');
    sendFetch(path !== undefined?path:'/', {method:'POST',body:$("#signupForm").serialize()}
    ,(res:any)=>{ redirect(res.redirect);},(res:any)=>{});*/
    const path = $('#msgForm').attr('action');
    sendAjax(path !== undefined ? path : '/', $('#msgForm').serialize());
});
//# sourceMappingURL=messages.js.map