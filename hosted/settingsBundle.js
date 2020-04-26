"use strict"; // - activates or deactivates premium

$('#buyPremium').on('click', function () {
  fetch('/premium', {
    method: 'GET'
  }).then(function (res) {
    res.json().then(function (data) {
      window.location = data.redirect;
    });
  });
});
$('#changePassword').on('submit', function (e) {
  e.preventDefault();
  /*const path = $('#signupForm').attr('action');
  sendFetch(path !== undefined?path:'/', {method:'POST',body:$("#signupForm").serialize()}
  ,(res:any)=>{ redirect(res.redirect);},(res:any)=>{});*/

  var path = $('#changePassword').attr('action');
  sendAjax(path !== undefined ? path : '/', $('#changePassword').serialize());
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
// - returns a link to a game thumbnail based on the first word in the game title

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
}; // - React components - //
// - returns a material card with the user's name and option to add them as a friend


var PERSON = function PERSON(props) {
  // console.log(props);
  return (/*#__PURE__*/React.createElement("div", {
      className: "demo-card-square mdl-card mdl-shadow--2dp user-card-child ".concat(props.color, "-color")
    }, /*#__PURE__*/React.createElement("div", {
      className: 'mdl-card__title mdl-card--expand'
    }, /*#__PURE__*/React.createElement("div", {
      className: "display-flex"
    }, /*#__PURE__*/React.createElement("h2", null, props.name))), /*#__PURE__*/React.createElement("div", {
      className: "display-flex"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mdl-card__actions mdl-card--border"
    }, /*#__PURE__*/React.createElement("a", {
      className: "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect add-friend",
      placeholder: props.name,
      accessKey: props.csrfToken
    }, "Add Friend"))))
  );
}; // - returns a material card for game information


var GAMECARD = function GAMECARD(props) {
  return (/*#__PURE__*/React.createElement("div", {
      className: "demo-card-square mdl-card mdl-shadow--2dp small-width"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mdl-card__title mdl-card--expand ".concat(props.name.replace(/:/g, ''), "-game")
    }), /*#__PURE__*/React.createElement("div", {
      className: "mdl-card__actions mdl-card--border"
    }, /*#__PURE__*/React.createElement("a", {
      className: "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect",
      href: props.link
    }, "Profile")))
  );
}; // - returns a list item that is formatted to best fit a message


var DETAILEDLI = function DETAILEDLI(props) {
  return (/*#__PURE__*/React.createElement("li", {
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
    }, "star"))))
  );
}; // - returns a basic list item containing a name of a user


var LISTITEM = function LISTITEM(props) {
  return (/*#__PURE__*/React.createElement("li", {
      className: "mdl-list__item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mdl-list__item-primary-content"
    }, /*#__PURE__*/React.createElement("i", {
      className: "material-icons mdl-list__item-icon"
    }, "person"), props.name))
  );
}; // - unused, originally for prototyping


var TITLE = function TITLE(props) {
  return (/*#__PURE__*/React.createElement("h1", null, "Working!")
  );
}; // - creates a new link for the navigation bar


var NAVLINK = function NAVLINK(props) {
  return (/*#__PURE__*/React.createElement("a", {
      className: "mdl-navigation__link",
      href: props.href
    }, props.text)
  );
}; // - creates an entire navigation bar, unused in final version


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
}; // - creates a material grid


var GRID = function GRID(props) {
  return (/*#__PURE__*/React.createElement("div", {
      className: "mdl-grid"
    }, props.inside)
  );
}; // - creates a material cell


var CELL = function CELL(props) {
  if (props.size === undefined) props.size = 1;
  var cellClass = "mdl-cell--".concat(props.size, "-col");
  return (/*#__PURE__*/React.createElement("div", {
      className: cellClass
    }, props.inside)
  );
}; // - creates a material button


var BUTTON = function BUTTON(props) {
  return (/*#__PURE__*/React.createElement("a", {
      href: props.href
    }, /*#__PURE__*/React.createElement("button", {
      className: "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
    }, props.text))
  );
};
"use strict"; // console.log('hi from helper');
// - redirects to the given path

var redirect = function redirect(path) {
  window.location = path;
}; // - sends an ajax call based on the action (path), and a data object


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
