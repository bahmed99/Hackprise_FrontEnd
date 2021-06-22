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
        <br/>
        <h6>Participant 4</h6>
       <Field
            key={'fullName4'}
            id={'fullName4'}
            name={'nom4'}
            label={'Nom et Prénom'}
            component={FormInput}
            required={false}
        />
        <Field
            key={'email4'}
            id={'email4'}
            name={'email4'}
            label={'Email'}
            type={'email4'}
            component={FormInput}
            required={false}
        />
        <Field
            key={'Tel4'}
            id={'Tel4'}
            name={'tel4'}
            label={'Numéro de téléphone'}
            component={FormInput}
          
            required={false}
        />
        <Field
            key={'Profession4'}
            id={'Profession4'}
            name={'profession4'}
            label={'Occupation'}
            component={FormInput}
            required={false}
        />
        <Field
            key={'Etablissement4'}
            id={'Etablissement4'}
            name={'Etablissement4'}
            label={'Etablissement'}
            component={FormInput}
            required={false}
        />
    </div>
   
);

