"use strict";

console.log('hi from signup.tsx');
$('#signupForm').on('submit', function (e) {
  e.preventDefault();
  /*const path = $('#signupForm').attr('action');
  sendFetch(path !== undefined?path:'/', {method:'POST',body:$("#signupForm").serialize()},
  (res:any)=>{ redirect(res.redirect);},(res:any)=>{});*/

  var path = $('#signupForm').attr('action');
  sendAjax(path !== undefined ? path : '/', $('#signupForm').serialize());
});
"use strict";
/*declare namespace JSX {
    interface IntrinsicElements {
      [elemName:string]: any;
    }

    interface IntrinsicAttributes {
      text?:string;
      title?:string;
      size?:number;
      inside?:JSX.Element[] | JSX.Element;
      action?:any;
      href?:string;
      [elemName:string]:any;
    }
}*/

var LISTITEM = function LISTITEM(props) {
  return (/*#__PURE__*/React.createElement("li", {
      className: "mdl-list__item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mdl-list__item-primary-content"
    }, /*#__PURE__*/React.createElement("i", {
      className: "material-icons mdl-list__item-icon"
    }, "person"), props.name))
  );
};

var TITLE = function TITLE(props) {
  return (/*#__PURE__*/React.createElement("h1", null, "Working!")
  );
};

var NAVLINK = function NAVLINK(props) {
  return (/*#__PURE__*/React.createElement("a", {
      className: "mdl-navigation__link",
      href: props.href
    }, props.text)
  );
};

var NAVBAR = function NAVBAR(props) {
  var test = [0, 1, 2];
  return (/*#__PURE__*/React.createElement("div", {
      className: "mdl-layout mdl-js-layout mdl-layout--fixed-drawer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mdl-layout__drawer"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mdl-layout-title"
    }, props.title), /*#__PURE__*/React.createElement("nav", {
      className: "mdl-navigation"
    }, props.links.map(function (name, index) {
      return (/*#__PURE__*/React.createElement(NAVLINK, {
          text: name
        })
      );
    }))), /*#__PURE__*/React.createElement("main", {
      className: "mdl-layout__content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "page-content"
    }, props.inside)))
  );
};

var GRID = function GRID(props) {
  return (/*#__PURE__*/React.createElement("div", {
      className: "mdl-grid"
    }, props.inside)
  );
};

var CELL = function CELL(props) {
  if (props.size === undefined) props.size = 1;
  var cellClass = "mdl-cell--".concat(props.size, "-col");
  return (/*#__PURE__*/React.createElement("div", {
      className: cellClass
    }, props.inside)
  );
};

var BUTTON = function BUTTON(props) {
  return (/*#__PURE__*/React.createElement("a", {
      href: props.href
    }, /*#__PURE__*/React.createElement("button", {
      className: "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
    }, props.text))
  );
};
"use strict";

console.log('hi from helper');

var redirect = function redirect(path) {
  window.location = path;
};

var sendAjax = function sendAjax(action, data) {
  $.ajax({
    data: data,
    cache: false,
    type: 'POST',
    url: action,
    dataType: 'json',
    success: function success(result, status, xhr) {
      window.location = result.redirect;
    },
    error: function error(xhr, status, _error) {
      var messageObj = JSON.parse(xhr.responseText); // handleError(messageObj.error);
    }
  });
};
