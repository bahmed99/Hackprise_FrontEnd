import * as React from 'react';

import { Field } from '@progress/kendo-react-form';


import {
    FormInput
} from '../form-components.js';
import {
     emailValidator,EtablissementValidator
} from '../validators.js'


export const RestTeamDetails = (
    
    <div>
        <br/>
        <h6>Participant 3</h6>
        <Field
            key={'fullName2'}
            id={'fullName2'}
            name={'nom2'}
            label={'Nom et Prénom'}
            component={FormInput}
            
        />

        <Field
            key={'email2'}
            id={'email2'}
            name={'email2'}
            label={'Email'}
            type={'email2'}
            component={FormInput}
            
        />
        <Field
            key={'Tel2'}
            id={'Tel2'}
            name={'tel2'}
            label={'Numéro de téléphone'}
            component={FormInput}
           
        />
        <Field
            key={'Profession2'}
            id={'Profession2'}
            name={'profession2'}
            label={'Occupation'}
            component={FormInput}
           
        />
        <Field
            key={'Etablissement2'}
            id={'Etablissement2'}
            name={'Etablissement2'}
            label={'Etablissement'}
            component={FormInput}
        />
        <br/>   
        <h6>Participant 4</h6>
        <Field
            key={'fullName3'}
            id={'fullName3'}
            name={'nom3'}
            label={'Nom et Prénom'}
            component={FormInput}
            required={false}
        />
        <Field
            key={'email3'}
            id={'email3'}
            name={'email3'}
            label={'Email'}
            type={'email3'}
            component={FormInput}
            required={false}
        />
        <Field
            key={'Tel3'}
            id={'Tel3'}
            name={'tel3'}
            label={'Numéro de téléphone'}
            component={FormInput}
          
            required={false}
        />
        <Field
            key={'Profession3'}
            id={'Profession3'}
            name={'profession3'}
            label={'Occupation'}
            component={FormInput}
            required={false}
        />
        <Field
            key={'Etablissement3'}
            id={'Etablissement3'}
            name={'Etablissement3'}
            label={'Etablissement'}
            component={FormInput}
            required={false}
        />
    </div>
   
);

