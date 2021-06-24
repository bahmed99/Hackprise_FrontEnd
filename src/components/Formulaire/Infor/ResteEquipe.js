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
        <br />
        <h6>Participant 2</h6>
        <Field
            key={'fullName1'}
            id={'fullName1'}
            name={'nom1'}
            label={'Nom et Prénom'}
            component={FormInput}
     
        />

        <Field
            key={'email1'}
            id={'email1'}
            name={'email1'}
            label={'Email'}
            type={'email1'}
            component={FormInput}
           
        />
        <Field
            key={'Tel1'}
            id={'Tel1'}
            name={'tel1'}
            label={'Numéro de téléphone'}
            component={FormInput}
            
        />
        <Field
            key={'Profession1'}
            id={'Profession1'}
            name={'profession1'}
            label={'Occupation'}
            component={FormInput}
            
        />
        
       <Field
            key={'Etablissement1'}
            id={'Etablissement1'}
            name={'Etablissement1'}
            label={'Etablissement'}
            component={FormInput}
           
        />
        <br />
        
    </div>
   
);

