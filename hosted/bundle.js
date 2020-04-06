"use strict";

var handleDomo = function handleDomo(e) {
  e.preventDefault();
  $('#domoMessage').animate({
    width: 'hide'
  }, 350);

  if ($('#domoName').val() == '' || $('#domoAge').val() == '' || $('#domoFood').val() == '') {
    handleError("RAWR! All fields are required");
    return false;
  }

  var csrf = getKeyFromForm($('#domoForm'));
  sendAjax('POST', $('#domoForm').attr("action"), $('#domoForm').serialize(), function () {
    loadDomosFromServer(csrf);
  });
  return false;
};

var getKeyFromForm = function getKeyFromForm(form) {
  var fData = $(form).serializeArray();
  var csrf = null;
  console.log(fData);
  fData.forEach(function (element) {
    console.log(element);

    if (element.name === '_csrf') {
      //loadDomosFromServer(element.value);
      //break;
      csrf = element.value;
    }
  });
  return csrf;
};

var handleDomoDel = function handleDomoDel(e) {
  e.preventDefault();
  console.log($(e.target).serializeArray());
  var csrf = getKeyFromForm(e.target);
  $('#domoMessage').animate({
    width: 'hide'
  }, 350); //return;

  sendAjax('POST', $(e.target).attr('action'), $(e.target).serialize(), function () {
    loadDomosFromServer(csrf);
  });
  return false;
};

var DomoForm = function DomoForm(props) {
  console.log(props.csrf);
  return (/*#__PURE__*/React.createElement("form", {
      id: "domoForm",
      name: "domoForm",
      onSubmit: handleDomo,
      action: "/maker",
      method: "POST",
      className: "domoForm"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "name"
    }, "Name: "), /*#__PURE__*/React.createElement("input", {
      id: "domoName",
      type: "text",
      name: "name",
      placeholder: "Domo Name"
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: "age"
    }, "Age: "), /*#__PURE__*/React.createElement("input", {
      id: "domoAge",
      type: "text",
      name: "age",
      placeholder: "Domo Age"
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: "food"
    }, "Food: "), /*#__PURE__*/React.createElement("input", {
      id: "domoFood",
      type: "text",
      name: "food",
      placeholder: "Favorite Food"
    }), /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "_csrf",
      value: props.csrf
    }), /*#__PURE__*/React.createElement("input", {
      className: "makeDomoSubmit",
      type: "submit",
      value: "Make Domo"
    }))
  );
};

var DomoList = function DomoList(props) {
  if (props.domos.length === 0) {
    return (/*#__PURE__*/React.createElement("div", {
        className: "domoList"
      }, /*#__PURE__*/React.createElement("h3", {
        className: "emptyDomo"
      }, "No Domos yet"))
    );
  }

  console.log(props.csrf);
  var domoNodes = props.domos.map(function (domo) {
    return (/*#__PURE__*/React.createElement("div", {
        key: domo._id,
        className: "domo"
      }, /*#__PURE__*/React.createElement("img", {
        src: "/assets/img/domoface.jpeg",
        alt: "domo face",
        className: "domoFace"
      }), /*#__PURE__*/React.createElement("h3", {
        className: "domoName"
      }, " Name: ", domo.name, " "), /*#__PURE__*/React.createElement("h3", {
        className: "domoAge"
      }, " Age: ", domo.age, " "), /*#__PURE__*/React.createElement("h3", {
        className: "domoFood"
      }, " Favorite Food: ", domo.food, " "), /*#__PURE__*/React.createElement("form", {
        name: "domoDel",
        onSubmit: handleDomoDel,
        action: "/domodel",
        method: "POST",
        className: "domoDel"
      }, /*#__PURE__*/React.createElement("input", {
        type: "hidden",
        name: "name",
        value: domo.name
      }), /*#__PURE__*/React.createElement("input", {
        type: "hidden",
        name: "age",
        value: domo.age
      }), /*#__PURE__*/React.createElement("input", {
        type: "hidden",
        name: "food",
        value: domo.food
      }), /*#__PURE__*/React.createElement("input", {
        type: "hidden",
        name: "_csrf",
        value: props.csrf
      }), /*#__PURE__*/React.createElement("input", {
        className: "delDomoSubmit",
        type: "submit",
        value: "Delete Domo"
      })))
    );
  });
  return (/*#__PURE__*/React.createElement("div", {
      className: "domoList"
    }, domoNodes)
  );
};

var loadDomosFromServer = function loadDomosFromServer(csrf) {
  sendAjax('GET', '/getDomos', null, function (data) {
    ReactDOM.render( /*#__PURE__*/React.createElement(DomoList, {
      domos: data.domos,
      csrf: csrf
    }), document.querySelector('#domos'));
  });
};

var setup = function setup(csrf) {
  ReactDOM.render( /*#__PURE__*/React.createElement(DomoForm, {
    csrf: csrf
  }), document.querySelector('#makeDomo'));
  ReactDOM.render( /*#__PURE__*/React.createElement(DomoList, {
    domos: []
  }), document.querySelector("#domos"));
  loadDomosFromServer(csrf);
};

var getToken = function getToken(callback) {
  sendAjax('GET', '/getToken', null, callback);
};

$(document).ready(function () {
  getToken(function (result) {
    setup(result.csrfToken);
  });
});
"use strict";

var handleError = function handleError(message) {
  $("#errorMessage").text(message);
  $("#domoMessage").animate({
    width: 'toggle'
  }, 350);
};

var redirect = function redirect(response) {
  $("#domoMessage").animate({
    width: 'hide'
  }, 350);
  window.location = response.redirect;
};

var sendAjax = function sendAjax(type, action, data, success) {
  $.ajax({
    cache: false,
    type: type,
    url: action,
    data: data,
    dataType: 'json',
    success: success,
    error: function error(xhr, status, _error) {
      var messageObj = JSON.parse(xhr.responseText);
      handleError(messageObj.error);
    }
  });
};
