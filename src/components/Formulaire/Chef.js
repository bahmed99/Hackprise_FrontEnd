import * as React from 'react';

import { Field } from '@progress/kendo-react-form';

import {
    FormInput, FormUpload
} from './form-components.js';

import {
    emailValidator, nameValidator,phoneValidator,ProfessionValidator
} from './validators.js'

export const ChefDetails = (

    
    
    <div>
        <Field
            key={'userName'}
            id={'userName'}
            name={'nom'}
            label={'Nom et Prénom'}
            component={FormInput}
            validator={nameValidator}
        />
         <Field
            key={'email'}
            id={'email'}
            name={'email'}
            label={'Email'}
            type={'email'}
            component={FormInput}
            validator={emailValidator}
        />
         <Field
            key={'Tel'}
            id={'Tel'}
            name={'tel'}
            label={'Numéro de téléphone'}
            type={'Tel'}
            component={FormInput}
            validator={phoneValidator}
        />
        <Field
            key={'Profession'}
            id={'Profession'}
            name={'profession'}
            label={'Profession'}
            component={FormInput}
            validator={ProfessionValidator}
        />
       
    </div>
    
);