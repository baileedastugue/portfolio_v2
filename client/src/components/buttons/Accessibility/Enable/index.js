import React from 'react';

const Enable = () => {
     return (
          <div className='form-check'>
               <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='enableAccessibility'
               />
               <label
                    className='form-check-label heading-secondary'
                    for='enableAccessibility'
               >
                    Enable Accessibility
               </label>
          </div>
     );
};

export default Enable;
