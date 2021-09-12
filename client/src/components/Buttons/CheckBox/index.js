import React from 'react';

const CheckBox = (props) => {
     return (
          <div className='form-check'>
               <input
                    className='form-check-input'
                    type='checkbox'
                    defaultChecked={props.defaultChecked}
                    onChange={props.onChange}
                    id={props.id}
               />
               <label
                    className='form-check-label heading-secondary'
                    htmlFor={props.id}
               >
                    {props.children}
               </label>
          </div>
     );
};

export default CheckBox;
