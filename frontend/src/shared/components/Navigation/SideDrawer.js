import React from 'react';
import ReactDOM from 'react-dom';

import './SideDrawer.css';

import logoImg from '../../../images/book-chor-logo-white.png';

const SideDrawer = (props) => {
    const content = (
      <aside className="side-drawer">
        <img src={logoImg} alt="mobile logo" />
        {props.children}
      </aside>
    );
    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
}

export default SideDrawer;