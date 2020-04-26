// - renders the users and attaches click events to the "Add Friend" buttons
$(document).ready(() => {
  $('.user-card').each((index, el) => {
    ReactDOM.render(
    <PERSON name={$(el).attr('name-prop')}
    color={$(el).attr('color-prop')}
    csrfToken={$(el).attr('csrf-prop')} ></PERSON>,
    el);
  });

  const addBtns = document.querySelectorAll('.add-friend');

  addBtns.forEach((el) => {
    $(el).on('click', (e) => {
      e.preventDefault();
      const path = '/addFriend';
      // console.log($(el).attr('accesskey'));
      sendAjax(path !== undefined ? path :'/', {
        username: $(el).attr('placeholder'),
        _csrf: $(el).attr('accesskey'),
      });
    });
  });

    /*let chatBtns = document.querySelectorAll('.start-chat');

    chatBtns.forEach((el)=>{
        $(el).on('click', (e) => {
            e.preventDefault();
            const path = '/startchat';
            //console.log('started chat');
        });
    });*/
});
