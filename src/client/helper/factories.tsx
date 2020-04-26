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
const getThumbLink = (game: string) => {
  switch (game) {
    case 'Rocket': return '/rocketleague.jpg'; break;
    case 'League': return '/lol.jpg'; break;
    case 'Rainbow': return '/r6.jpeg'; break;
    default: return '/cs.png'; break;
  }
};

// - React components - //

// - returns a material card with the user's name and option to add them as a friend
const PERSON = (props:any) => {
  // console.log(props);
  return(
    <div className={
      `demo-card-square mdl-card mdl-shadow--2dp user-card-child ${props.color}-color`
      } >
      <div className={'mdl-card__title mdl-card--expand'} >
        <div className="display-flex" >
          <h2>{props.name}</h2>
        </div>

      </div>
      <div className="display-flex">
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect add-friend" placeholder={props.name} accessKey={props.csrfToken} >
            Add Friend
          </a>
        </div>

      </div>

    </div>
  );
};

// - returns a material card for game information
const GAMECARD = (props:any) => {
  return(
    <div className="demo-card-square mdl-card mdl-shadow--2dp small-width" >
      <div className={
        `mdl-card__title mdl-card--expand ${props.name.replace(/:/g, '')}-game`
      } >

      </div>
      <div className="mdl-card__actions mdl-card--border">
        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
         href={props.link} >
          Profile
        </a>
      </div>
    </div>
  );
};

// - returns a list item that is formatted to best fit a message
const DETAILEDLI = (props:any) => {
  return(
    <li className="mdl-list__item mdl-list__item--three-line">
      <span className="mdl-list__item-primary-content">
        <i className="material-icons mdl-list__item-avatar">person</i>
        <span>{props.name}</span>
        <span className="mdl-list__item-text-body">
          {props.message}
        </span>
      </span>
      <span className="mdl-list__item-secondary-content">
        <a className="mdl-list__item-secondary-action" href="#">
          <i className="material-icons">star</i>
        </a>
      </span>
    </li>
  );
};

// - returns a basic list item containing a name of a user
const LISTITEM = (props:any) => {
  return(
    <li className="mdl-list__item">
      <span className="mdl-list__item-primary-content">
        <i className="material-icons mdl-list__item-icon">person</i>
        {props.name}
      </span>
    </li>
  );
};

// - unused, originally for prototyping
const TITLE = (props:any) => {
  return(
        <h1>Working!</h1>

  );
};

// - creates a new link for the navigation bar
const NAVLINK = (props:any) => {
  return(
        <a className="mdl-navigation__link" href={props.href}>{props.text}</a>
  );
};

// - creates an entire navigation bar, unused in final version
const NAVBAR = (props:any) => {
  const test = [0, 1, 2];
  return (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
            <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">{props.title}</span>
                <nav className="mdl-navigation">
                {
                    props.links.map((name:string, index:number) => {
                      return(
                            <NAVLINK text={name}></NAVLINK>
                      );
                    })
                }
                </nav>
            </div>
            <main className="mdl-layout__content">
                <div className="page-content">
                    {props.inside}
                </div>
            </main>
        </div>
  );
};

// - creates a material grid
const GRID = (props:any) => {
  return(
        <div className="mdl-grid">
            {props.inside}
        </div>
  );
};

// - creates a material cell
const CELL = (props:any) => {
  if (props.size === undefined) props.size = 1;
  const cellClass = `mdl-cell--${props.size}-col`;
  return(
        <div className={cellClass}>{props.inside}</div>
  );
};

// - creates a material button
const BUTTON = (props:any) => {
  return(
        <a href={props.href}><button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            {props.text}
        </button></a>
  );
};
