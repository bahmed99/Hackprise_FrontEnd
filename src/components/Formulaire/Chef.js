import * as React from 'react';

import { Field } from '@progress/kendo-react-form';

import {
    FormInput, FormMultiSelect,FormDropDownList
} from './form-components.js';

import {
    emailValidator, nameValidator, phoneValidator, ProfessionValidator,requiredValidator
} from './validators.js'
const data = ['Stb', 'Infor'
]
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

        <Field
            key={'SelectHackathon'}
            id={'SelectHackathon'}
            name={'SelectHackathon'}
            label={'Choisir Hackathon'}
            data={data}
            validator={requiredValidator}
            component={FormDropDownList}
        />

    </div>

);