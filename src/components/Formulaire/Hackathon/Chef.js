import * as React from 'react';

import { Field } from '@progress/kendo-react-form';

import {
    FormInput,FormDropDownList,FormRadioGroup
} from '../form-components.js';

import {
    emailValidator, nameValidator, phoneValidator, ProfessionValidator,requiredValidator,EtablissementValidator,NomEquipeValidator
} from '../validators.js'
const data = ['STB', 'INFOR']
 const gender = [
    { label: "STB", value: "STB" },
    { label: "INFOR", value: "INFOR" },
   
  ];


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
            key={'SelectHackathon'}
            id={'SelectHackathon'}
            name={'SelectHackathon'}
            label={'Choisir Hackathon'}
            data={data}
            validator={requiredValidator}
            component={FormDropDownList}
            
        />

        
        <Field
            key={'NomEquipe'}
            id={'NomEquipe'}
            name={'NomEquipe'}
            label={`Nom d'équipe`}
            component={FormInput}
            validator={NomEquipeValidator}
        />

    </div>
  
);