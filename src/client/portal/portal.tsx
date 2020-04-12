console.log("hi from portal.tsx");

$('#friendForm').on('submit', (e) => {
    e.preventDefault();
      /*const path = $('#signupForm').attr('action');
      sendFetch(path !== undefined?path:'/', {method:'POST',body:$("#signupForm").serialize()}
      ,(res:any)=>{ redirect(res.redirect);},(res:any)=>{});*/
    const path = $('#friendForm').attr('action');
    sendAjax(path !== undefined ? path :'/', $('#friendForm').serialize());
});

$('#msgForm').on('submit', (e) => {
    e.preventDefault();
      /*const path = $('#signupForm').attr('action');
      sendFetch(path !== undefined?path:'/', {method:'POST',body:$("#signupForm").serialize()}
      ,(res:any)=>{ redirect(res.redirect);},(res:any)=>{});*/
    const path = $('#msgForm').attr('action');
    sendAjax(path !== undefined ? path :'/', $('#msgForm').serialize());
});
  

$(document).ready(()=>{
    $('.friendsLi').each((index, el) => {
        ReactDOM.render(<LISTITEM name={$(el).attr('name-prop')}></LISTITEM>, el);
    });

    $('.messageLi').each((index, el) => {
        ReactDOM.render(<DETAILEDLI name={$(el).attr('name-prop')} message={$(el).attr('msg-prop')}></DETAILEDLI>, el);
    });
});