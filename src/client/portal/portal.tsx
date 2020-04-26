// console.log('hi from portal.tsx');

// - adds a new friend
$('#friendForm').on('submit', (e) => {
  e.preventDefault();
  const path = $('#friendForm').attr('action');
  sendAjax(path !== undefined ? path :'/', $('#friendForm').serialize());
});

// - adds a new game based on the add game form
$('#addGame').on('submit', (e) => {
  e.preventDefault();
  const path = $('#addGame').attr('action');
  sendAjax(path !== undefined ? path :'/', $('#addGame').serialize());
});

// - renders all the react components
$(document).ready(() => {
  $('.friendsLi').each((index, el) => {
    ReactDOM.render(<LISTITEM name={$(el).attr('name-prop')}></LISTITEM>, el);
  });

  $('.game-card').each((index, el) => {
    ReactDOM.render(
    <GAMECARD
      name={$(el).attr('name-prop')}
      link={$(el).attr('link-prop')}>
    </GAMECARD>,
    el);
  });

  $('.messageLi').each((index, el) => {
    ReactDOM.render(
        <DETAILEDLI name={$(el).attr('name-prop')} message={$(el).attr('msg-prop')}>
        </DETAILEDLI>,
        el);
  });
});
