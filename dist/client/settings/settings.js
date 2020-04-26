"use strict";
// - activates or deactivates premium
$('#buyPremium').on('click', () => {
    fetch('/premium', { method: 'GET' }).then((res) => {
        res.json().then((data) => {
            window.location = data.redirect;
        });
    });
});
$('#changePassword').on('submit', (e) => {
    e.preventDefault();
    /*const path = $('#signupForm').attr('action');
    sendFetch(path !== undefined?path:'/', {method:'POST',body:$("#signupForm").serialize()}
    ,(res:any)=>{ redirect(res.redirect);},(res:any)=>{});*/
    const path = $('#changePassword').attr('action');
    sendAjax(path !== undefined ? path : '/', $('#changePassword').serialize());
});
//# sourceMappingURL=settings.js.map