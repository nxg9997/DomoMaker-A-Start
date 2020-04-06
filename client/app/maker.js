const handleDomo = (e) => {
    e.preventDefault();

    $('#domoMessage').animate({width:'hide'}, 350);

    if($('#domoName').val() == '' || $('#domoAge').val() == '' || $('#domoFood').val() == ''){
        handleError("RAWR! All fields are required");
        return false;
    }

    let csrf = getKeyFromForm($('#domoForm'));

    sendAjax('POST', $('#domoForm').attr("action"), $('#domoForm').serialize(), () => {
        loadDomosFromServer(csrf);
    });

    return false;
};

const getKeyFromForm = (form) => {
    let fData = $(form).serializeArray();
    let csrf = null;
    console.log(fData);
    fData.forEach(element => {
        console.log(element);
        if(element.name === '_csrf'){
            //loadDomosFromServer(element.value);
            //break;
            csrf = element.value;
        }
    });
    return csrf;
};

const handleDomoDel = (e) => {
    e.preventDefault();
    console.log($(e.target).serializeArray());

    let csrf = getKeyFromForm(e.target);

    $('#domoMessage').animate({width:'hide'}, 350);
    //return;
    sendAjax('POST', $(e.target).attr('action'), $(e.target).serialize(), () => {
        loadDomosFromServer(csrf);
    });

    return false;
};

const DomoForm = (props) => {
    console.log(props.csrf);
    return (
        <form id="domoForm" name="domoForm"
            onSubmit={handleDomo}
            action="/maker"
            method="POST"
            className="domoForm"
        >
            <label htmlFor="name">Name: </label>
            <input id="domoName" type="text" name="name" placeholder="Domo Name"/>
            <label htmlFor="age">Age: </label>
            <input id="domoAge" type="text" name="age" placeholder="Domo Age"/>
            <label htmlFor="food">Food: </label>
            <input id="domoFood" type="text" name="food" placeholder="Favorite Food"/>
            <input type="hidden" name="_csrf" value={props.csrf} />
            <input className="makeDomoSubmit" type="submit" value="Make Domo"/>
        </form>
    );
};

const DomoList = (props) => {
    if(props.domos.length === 0) {
        return (
            <div className="domoList">
                <h3 className="emptyDomo">No Domos yet</h3>
            </div>
        );
    }
    console.log(props.csrf);
    const domoNodes = props.domos.map((domo) => {
        return (
            <div key={domo._id} className="domo">
                <img src="/assets/img/domoface.jpeg" alt="domo face" className="domoFace" />
                <h3 className="domoName"> Name: {domo.name} </h3>
                <h3 className="domoAge"> Age: {domo.age} </h3>
                <h3 className="domoFood"> Favorite Food: {domo.food} </h3>
                <form name="domoDel"
                    onSubmit={handleDomoDel}
                    action="/domodel"
                    method="POST"
                    className="domoDel"
                >
                    <input type="hidden" name="name" value={domo.name} />
                    <input type="hidden" name="age" value={domo.age} />
                    <input type="hidden" name="food" value={domo.food} />
                    <input type="hidden" name="_csrf" value={props.csrf} />
                    <input className="delDomoSubmit" type="submit" value="Delete Domo"/>
                </form>
            </div>
        );
    });

    return (
        <div className="domoList">
            {domoNodes}
        </div>
    );
};

const loadDomosFromServer = (csrf) => {
    sendAjax('GET', '/getDomos', null, (data) => {
        ReactDOM.render(
            <DomoList domos={data.domos} csrf={csrf} />,
            document.querySelector('#domos')
        );
    });
    
};

const setup = (csrf) => {
    ReactDOM.render(
        <DomoForm csrf={csrf} />,
        document.querySelector('#makeDomo')
    );

    ReactDOM.render(
        <DomoList domos={[]} />,
        document.querySelector("#domos")
    );

    loadDomosFromServer(csrf);
};

const getToken = (callback) => {
    sendAjax('GET', '/getToken', null, callback);
};

$(document).ready(()=>{
    getToken((result) => {
        setup(result.csrfToken);
    });
});