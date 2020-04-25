"use strict";

console.log('hi from login.tsx');
$('#loginForm').on('submit', function (e) {
  e.preventDefault();
  /*const path = $('#signupForm').attr('action');
  sendFetch(path !== undefined?path:'/', {method:'POST',body:$("#signupForm").serialize()}
  ,(res:any)=>{ redirect(res.redirect);},(res:any)=>{});*/

  var path = $('#loginForm').attr('action');
  sendAjax(path !== undefined ? path : '/', $('#loginForm').serialize());
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

var getThumbLink = function getThumbLink(game) {
  switch (game) {
    case 'Rocket':
      return '/rocketleague.jpg';
      break;

    case 'League':
      return '/lol.jpg';
      break;

    case 'Rainbow':
      return '/r6.jpeg';
      break;

    default:
      return '/cs.png';
      break;
  }
};

var GAMECARD = function GAMECARD(props) {
  //console.log(props.name);

  /*<h2 className="mdl-card__title-text">{
          props.name === "Rocket" ? "Rocket League" : props.name === "League" ? "League of Legends" : props.name === "Rainbow" ? "Rainbow 6: Siege" : "CS:GO"
        }</h2>*/
  return /*#__PURE__*/React.createElement("div", {
    className: "demo-card-square mdl-card mdl-shadow--2dp small-width"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mdl-card__title mdl-card--expand " + props.name.replace(/:/g, '') + "-game"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mdl-card__actions mdl-card--border"
  }, /*#__PURE__*/React.createElement("a", {
    className: "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect",
    href: props.link
  }, "Profile")));
};

var DETAILEDLI = function DETAILEDLI(props) {
  return /*#__PURE__*/React.createElement("li", {
    className: "mdl-list__item mdl-list__item--three-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mdl-list__item-primary-content"
  }, /*#__PURE__*/React.createElement("i", {
    className: "material-icons mdl-list__item-avatar"
  }, "person"), /*#__PURE__*/React.createElement("span", null, props.name), /*#__PURE__*/React.createElement("span", {
    className: "mdl-list__item-text-body"
  }, props.message)), /*#__PURE__*/React.createElement("span", {
    className: "mdl-list__item-secondary-content"
  }, /*#__PURE__*/React.createElement("a", {
    className: "mdl-list__item-secondary-action",
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    className: "material-icons"
  }, "star"))));
};

var LISTITEM = function LISTITEM(props) {
  return /*#__PURE__*/React.createElement("li", {
    className: "mdl-list__item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mdl-list__item-primary-content"
  }, /*#__PURE__*/React.createElement("i", {
    className: "material-icons mdl-list__item-icon"
  }, "person"), props.name));
};

var TITLE = function TITLE(props) {
  return /*#__PURE__*/React.createElement("h1", null, "Working!");
};

var NAVLINK = function NAVLINK(props) {
  return /*#__PURE__*/React.createElement("a", {
    className: "mdl-navigation__link",
    href: props.href
  }, props.text);
};

var NAVBAR = function NAVBAR(props) {
  var test = [0, 1, 2];
  return /*#__PURE__*/React.createElement("div", {
    className: "mdl-layout mdl-js-layout mdl-layout--fixed-drawer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mdl-layout__drawer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mdl-layout-title"
  }, props.title), /*#__PURE__*/React.createElement("nav", {
    className: "mdl-navigation"
  }, props.links.map(function (name, index) {
    return /*#__PURE__*/React.createElement(NAVLINK, {
      text: name
    });
  }))), /*#__PURE__*/React.createElement("main", {
    className: "mdl-layout__content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-content"
  }, props.inside)));
};

var GRID = function GRID(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mdl-grid"
  }, props.inside);
};

var CELL = function CELL(props) {
  if (props.size === undefined) props.size = 1;
  var cellClass = "mdl-cell--".concat(props.size, "-col");
  return /*#__PURE__*/React.createElement("div", {
    className: cellClass
  }, props.inside);
};

var BUTTON = function BUTTON(props) {
  return /*#__PURE__*/React.createElement("a", {
    href: props.href
  }, /*#__PURE__*/React.createElement("button", {
    className: "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
  }, props.text));
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
