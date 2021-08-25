import React from 'react';

const Menu = () => {
     return (
          <div>
               <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavDropdown'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
               >
                    <span className='navbar-toggler-icon'></span>
               </button>
          </div>
     );
};

export default Menu;
