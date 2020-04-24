console.log('from main');
// import * as ReactDOM from 'react-dom';

const populateHome = () => {
  ReactDOM.render(
    <BUTTON text="Sign up!" href="/signup"></BUTTON>,
    document.querySelector('#signup'),
  );

};

$(document).ready(() => {
  populateHome();
});
