"use strict";
console.log('hi from portal.tsx');
$('#friendForm').on('submit', (e) => {
    e.preventDefault();
    /*const path = $('#signupForm').attr('action');
    sendFetch(path !== undefined?path:'/', {method:'POST',body:$("#signupForm").serialize()}
    ,(res:any)=>{ redirect(res.redirect);},(res:any)=>{});*/
    const path = $('#friendForm').attr('action');
    sendAjax(path !== undefined ? path : '/', $('#friendForm').serialize());
});
$('#addGame').on('submit', (e) => {
    e.preventDefault();
    /*const path = $('#signupForm').attr('action');
    sendFetch(path !== undefined?path:'/', {method:'POST',body:$("#signupForm").serialize()}
    ,(res:any)=>{ redirect(res.redirect);},(res:any)=>{});*/
    const path = $('#addGame').attr('action');
    sendAjax(path !== undefined ? path : '/', $('#addGame').serialize());
});
$(document).ready(() => {
    $('.friendsLi').each((index, el) => {
        ReactDOM.render(<LISTITEM name={$(el).attr('name-prop')}></LISTITEM>, el);
    });
    $('.game-card').each((index, el) => {
        ReactDOM.render(<GAMECARD name={$(el).attr('name-prop')} link={$(el).attr('link-prop')}></GAMECARD>, el);
    });
    $('.messageLi').each((index, el) => {
        ReactDOM.render(<DETAILEDLI name={$(el).attr('name-prop')} message={$(el).attr('msg-prop')}>
        </DETAILEDLI>, el);
    });
});
//# sourceMappingURL=portal.js.map