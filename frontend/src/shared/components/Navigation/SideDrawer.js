import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition} from 'react-transition-group'

import './SideDrawer.css';

import logoImg from '../../../images/book-chor-logo-white.png';

const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.isOpen}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer">
        <img src={logoImg} alt="mobile logo" />
        {props.children}
      </aside>
    </CSSTransition>
  );
    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
}

export default SideDrawer;