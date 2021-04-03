import * as React from 'react';

import { Field } from '@progress/kendo-react-form';


import {
    FormInput, FormMaskedTextBox, FormDateInput
} from './form-components.js';

import {
   phoneValidator
} from './validators.js'

export const RestTeamDetails = (
    <div>
        <br/>
        <h6>Membre3</h6>
         <Field
            key={'fullName3'}
            id={'fullName3'}
            name={'nom3'}
            label={'Nom et Prénom'}
            component={FormInput}
            required={false}
        />
        <Field
            key={'Tel3'}
            id={'Tel3'}
            name={'tel3'}
            label={'Numéro de téléphone'}
            component={FormInput}
           // validator={phoneValidator}
            required={false}
        />
        <Field
            key={'Profession3'}
            id={'Profession3'}
            name={'profession3'}
            label={'Profession'}
            component={FormInput}
            required={false}
        />
        <br/>
        <h6>Membre4</h6>
       <Field
            key={'fullName4'}
            id={'fullName4'}
            name={'nom4'}
            label={'Nom et Prénom'}
            component={FormInput}
            required={false}
        />
        <Field
            key={'Tel4'}
            id={'Tel4'}
            name={'tel4'}
            label={'Numéro de téléphone'}
            component={FormInput}
            //validator={phoneValidator}
            required={false}
        />
        <Field
            key={'Profession4'}
            id={'Profession4'}
            name={'profession4'}
            label={'Profession'}
            component={FormInput}
            required={false}
        />
    </div>
);

