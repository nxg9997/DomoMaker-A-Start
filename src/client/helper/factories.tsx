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

const TITLE = (props:any) => {
  return(
        <h1>Working!</h1>

  );
};

const NAVLINK = (props:any) => {
  return(
        <a className="mdl-navigation__link" href={props.href}>{props.text}</a>
  );
};

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

const GRID = (props:any) => {
  return(
        <div className="mdl-grid">
            {props.inside}
        </div>
  );
};

const CELL = (props:any) => {
  if (props.size === undefined) props.size = 1;
  const cellClass = `mdl-cell--${props.size}-col`;
  return(
        <div className={cellClass}>{props.inside}</div>
  );
};

const BUTTON = (props:any) => {
  return(
        <a href={props.href}><button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            {props.text}
        </button></a>
  );
};
