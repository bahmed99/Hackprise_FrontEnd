import * as React from 'react';

import { Field } from '@progress/kendo-react-form';

import {
    FormInput, FormAutoComplete, FormRadioGroup,
    FormTextArea
} from './form-components.js';

import {
    ProfessionValidator,phoneValidator,userNameValidator
} from './validators.js'


export const TeamDetails = (
    <div>
        <br/>
        <h6>Membre1</h6>
        <Field
            key={'fullName1'}
            id={'fullName1'}
            name={'nom1'}
            label={'Nom et Prénom'}
            component={FormInput}
            validator={userNameValidator}
        />
        <Field
            key={'Tel1'}
            id={'Tel1'}
            name={'tel1'}
            label={'Numéro de téléphone'}
            component={FormInput}
            validator={phoneValidator}
        />
        <Field
            key={'Profession1'}
            id={'Profession1'}
            name={'profession1'}
            label={'Profession'}
            component={FormInput}
            validator={ProfessionValidator}

        />
        <br/>
        <h6>Membre2</h6>
       <Field
            key={'fullName2'}
            id={'fullName2'}
            name={'nom2'}
            label={'Nom et Prénom'}
            component={FormInput}
            validator={userNameValidator}
        />
        <Field
            key={'Tel2'}
            id={'Tel2'}
            name={'tel2'}
            label={'Numéro de téléphone'}
            component={FormInput}
            validator={phoneValidator}
        />
        <Field
            key={'Profession2'}
            id={'Profession2'}
            name={'profession2'}
            label={'Profession'}
            component={FormInput}
            validator={ProfessionValidator}

        />
    </div>
);