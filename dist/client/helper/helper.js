"use strict";
console.log('hi from helper');
const redirect = (path) => {
    window.location = path;
};
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