console.log('hi from msgs.tsx');

$('#msgForm').on('submit', (e) => {
    e.preventDefault();
        /*const path = $('#signupForm').attr('action');
        sendFetch(path !== undefined?path:'/', {method:'POST',body:$("#signupForm").serialize()}
        ,(res:any)=>{ redirect(res.redirect);},(res:any)=>{});*/
    const path = $('#msgForm').attr('action');
    sendAjax(path !== undefined ? path :'/', $('#msgForm').serialize());
});