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
const TITLE = (props) => {
    return (<h1>Working!</h1>);
};
const NAVLINK = (props) => {
    return (<a className="mdl-navigation__link" href={props.href}>{props.text}</a>);
};
const NAVBAR = (props) => {
    const test = [0, 1, 2];
    return (<div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
            <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">{props.title}</span>
                <nav className="mdl-navigation">
                {props.links.map((name, index) => {
        return (<NAVLINK text={name}></NAVLINK>);
    })}
                </nav>
            </div>
            <main className="mdl-layout__content">
                <div className="page-content">
                    {props.inside}
                </div>
            </main>
        </div>);
};
const GRID = (props) => {
    return (<div className="mdl-grid">
            {props.inside}
        </div>);
};
const CELL = (props) => {
    if (props.size === undefined)
        props.size = 1;
    const cellClass = `mdl-cell--${props.size}-col`;
    return (<div className={cellClass}>{props.inside}</div>);
};
const BUTTON = (props) => {
    return (<a href={props.href}><button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            {props.text}
        </button></a>);
};
//# sourceMappingURL=factories.js.map