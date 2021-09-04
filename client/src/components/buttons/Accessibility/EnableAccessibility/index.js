import React from 'react';
import SetSessionStorage from '../../../../utils/SetSessionStorage';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const EnableAccessibility = () => {
     const [accessibility, setAccessibility] = SetSessionStorage(
          'accessibilityEnabled',
          false
     );

     return (
          <FormControlLabel
               control={
                    <Checkbox
                         checked={accessibility}
                         onChange={() => {
                              setAccessibility(!accessibility);
                         }}
                         name='Enable Accessibility'
                    />
               }
               label='Enable Accessibility'
          />
     );
};

export default EnableAccessibility;
