import  React,{useState} from 'react';

import { Field } from '@progress/kendo-react-form';

import {
    FormInput, FormDropDownList, FormRadioGroup, FormUpload
} from '../form-components.js';

import {
    emailValidator, nameValidator, phoneValidator, ProfessionValidator, requiredValidator, EtablissementValidator, NomEquipeValidator
} from '../validators.js'


const data = [{ label: "En ligne", value: "En ligne" },
{ label: "En Présentiel", value: "En Présentiel" }]



export const ChefDetails = (
   

    <div>
        <Field
            key={'SelectEnLigne'}
            id={'SelectEnLigne'}
            name={'SelectEnLigne'}
            label={'Choisir'}
            data={data}
            validator={requiredValidator}
            component={FormRadioGroup}
            layout={"horizontal"}

        />
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
            label={'Occupation'}
            component={FormInput}
            validator={ProfessionValidator}
        />

        <Field
            key={'Etablissement'}
            id={'Etablissement'}
            name={'Etablissement'}
            label={'Etablissement'}
            component={FormInput}
            validator={EtablissementValidator}
        />
        <Field
            key={'NomEquipe'}
            id={'NomEquipe'}
            name={'NomEquipe'}
            label={`Nom d'équipe`}
            component={FormInput}
            validator={NomEquipeValidator}
        />

        <Field
            key={"cv"}
            id={"cv"}
            name={"cv"}
            label={"CV"}
            hint={"Astuce: Veuillez joindre votre cv ci-dessus"}
            component={FormUpload}
            
        /> 

    </div>

);