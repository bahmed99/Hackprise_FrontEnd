import React from 'react'

import { FormControlLabel, Tooltip } from '@material-ui/core';
import { Field } from '@progress/kendo-react-form';

import {
  FormCheckbox
} from './form-components.js';


export const Validations=(
   
        <div>
             <Field
                key={'Accord'}
                id={'Accord'}
                name={'Accord'}
                label={`J'accepte de partager mes informations avec les entreprises présentes au forum annuel de l'ENSI`}
                layout={'horizontal'}
                component={FormCheckbox}
                
            /> 
          

        </div>
    
    )
