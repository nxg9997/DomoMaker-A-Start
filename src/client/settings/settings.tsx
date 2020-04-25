$("#buyPremium").on('click', ()=>{
    fetch('/premium', {method:'GET'}).then((res)=>{
        res.json().then((data)=>{
            window.location = data.redirect;
        });
    });
});