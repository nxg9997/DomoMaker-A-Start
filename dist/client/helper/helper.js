"use strict";
// console.log('hi from helper');
// - redirects to the given path
const redirect = (path) => {
    window.location = path;
};
// - sends an ajax call based on the action (path), and a data object
const sendAjax = (action, data) => {
    $.ajax({
        data,
        cache: false,
        type: 'POST',
        url: action,
        dataType: 'json',
        success: (result, status, xhr) => {
            window.location = result.redirect;
        },
        error: (xhr, status, error) => {
            const messageObj = JSON.parse(xhr.responseText);
            // handleError(messageObj.error);
        },
    });
};
//# sourceMappingURL=helper.js.map