import React from 'react';
import Logo from '../Logo';
import MenuButton from '../../Buttons/MenuButton';
import Enable from '../../Buttons/Accessibility/Enable';

const Nav = () => {
     return (
          <div>
               <nav className='navbar sticky-top navbar-light'>
                    <div className='container-fluid'>
                         <Enable />
                         <a className='navbar-brand' href='/'>
                              <Logo size='small' />
                         </a>
                         <MenuButton />
                    </div>
               </nav>
          </div>
     );
};

export default Nav;
