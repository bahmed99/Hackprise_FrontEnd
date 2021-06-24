import { FormControlLabel, Tooltip } from '@material-ui/core';
import React, { useState, useCallback } from 'react';
import FormInput from "../../Utilities/Input";
import { useHistory } from 'react-router';
import axios from 'axios';
import { Form, FormElement } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { Stepper } from '@progress/kendo-react-layout';
import { Modal } from 'react-bootstrap';
import { ChefDetails } from './Chef';
import { RestTeamDetails } from './ResteEquipe';
import { Reveal } from 'react-reveal';
import { Field } from '@progress/kendo-react-form';
import Alert from 'react-bootstrap/Alert'
// import {
//     FormInput, FormDropDownList, FormRadioGroup
// } from '../form-components.js';

// import {
//     emailValidator, nameValidator, phoneValidator, ProfessionValidator, requiredValidator, EtablissementValidator, NomEquipeValidator
// } from '../validators.js'

// import Alert from 'react-bootstrap/Alert'
// const stepPages = [
//     ChefDetails,
//     RestTeamDetails
// ];

function Formulaire({ long }) {
    const path = "http://www.localhost:3001/hackathonInfor/register"
    const [file, setFile] = useState()

    const [fileName, setFileName] = useState('')
    const [fileName1, setFileName1] = useState('')

    const [fileType, setFileType] = useState('')
    const [fileType1, setFileType1] = useState('')

    const [fileValue, setFileValue] = useState('')
    const [nameValue, setNameValue] = useState('')
    const [mailValue, setMailValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')
    const [institutValue, setInstitutValue] = useState('')
    const [occupation, setOccupation] = useState('')
    const [equipe, setEquipe] = useState('')


    const [nameValue1, setNameValue1] = useState('')
    const [mailValue1, setMailValue1] = useState('')
    const [phoneValue1, setPhoneValue1] = useState('')
    const [institutValue1, setInstitutValue1] = useState('')
    const [occupation1, setOccupation1] = useState('')





    const [test, setTest] = useState(false)

    const [choix, setChoix] = useState('')
    const [accordValue, setAccordValue] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [sent, setSent] = useState(false)
    const [msg, setMsg] = useState(false)
    const handleFile = (event) => {
        setFileName(event.target.value.replace('C:\\fakepath\\', ''));
        setFileType(event.target.value.slice(event.target.value.lastIndexOf('.') + 1 - event.target.value.length));
        setFileValue(event.target.value);
        setFile(event.target.files[0]);
        console.log(event.target.value)
    }
    const close = () => {
        setFileName('');
        setFileType('');
        setFileValue('');
    }
    const handeleName = (event) => setNameValue(event.target.value)
    const handeleMail = (event) => setMailValue(event.target.value)
    const handelePhone = (event) => setPhoneValue(event.target.value)
    const handeleInstitut = (event) => setInstitutValue(event.target.value)
    const handeleOccupation = (event) => setOccupation(event.target.value)

    const handeleName1 = (event) => setNameValue1(event.target.value)
    const handeleMail1 = (event) => setMailValue1(event.target.value)
    const handelePhone1 = (event) => setPhoneValue1(event.target.value)
    const handeleInstitut1 = (event) => setInstitutValue1(event.target.value)
    const handeleOccupation1 = (event) => setOccupation1(event.target.value)



    const handeleAccord = (event) => setAccordValue(event.target.checked)
    const handeleEquipe = (event) => setEquipe(event.target.value)
    const handeleChoix = (event) => setChoix(event.target.value)
    const handeleNombre = (event) => {
        if (event.target.value === "2") {
            setTest(true)
        }
        else {
            setTest(false)
            setNameValue1("")
            setMailValue1("")
            setPhoneValue1("")
            setInstitutValue1("")
            setOccupation1("")
        }


    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        const fd = new FormData()
        fd.append('file', file);


        fd.append('nom', nameValue);
        fd.append('email', mailValue);
        fd.append('tel', phoneValue);
        fd.append('accord', accordValue);
        fd.append('Etablissement', institutValue);
        fd.append('profession', occupation);
        fd.append('NomEquipe', equipe);
        fd.append('SelectEnLigne', choix);


        fd.append('nom1', nameValue1);
        fd.append('email1', mailValue1);
        fd.append('tel1', phoneValue1);
        fd.append('Etablissement1', institutValue1);
        fd.append('profession1', occupation1);





        fd.append('fileValue', fileValue);
        axios.post(path, fd)
            .then(res => {
                setLoading(false);
                setSent(res.data.sent)
                setError(res.data.error)
                setMsg(res.data.msg)
                setTimeout(() => setError(false), 3000)
            })
            .catch(() => {
                setError(true);
                setLoading(false);
                setMsg(true)
                setTimeout(() => setError(false), 3000)
            });

    }

    const history = useHistory();
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(false)
    // const [sent, setSent] = useState(false)
    // const [msg, setMsg] = useState(false)


    // const path1 = "http://www.localhost:3001/hackathonInfor/register"




    // const [step, setStep] = useState(0);
    // const [formState, setFormState] = useState({});
    // const [steps, setSteps] = useState([
    //     { label: 'Chef du groupe', isValid: undefined, icon: 'k-i-user' },
    //     { label: `Reste de l'équipe`, isValid: undefined, icon: 'k-i-track-changes-accept' }
    // ]);

    // const lastStepIndex = steps.length - 1;
    // const isLastStep = lastStepIndex === step;
    // const isPreviousStepsValid = steps
    //     .slice(0, step)
    //     .findIndex(currentStep => currentStep.isValid === false) === -1;

    // const onStepSubmit = useCallback(
    //     (event) => {
    //         const { isValid, values } = event;

    //         const currentSteps = steps.map((currentStep, index) => ({
    //             ...currentStep,
    //             isValid: index === step ? isValid : currentStep.isValid
    //         }));

    //         setSteps(currentSteps);
    //         setStep(() => Math.min(step + 1, lastStepIndex));
    //         setFormState(values);

    //         console.log(values.cv[0])

    //         if (isLastStep && isPreviousStepsValid && isValid) {
    //             dataform.append('nom', values.nom)
    //             dataform.append('email', values.email)
    //             dataform.append('tel', values.tel)
    //             dataform.append('profession', values.profession)
    //             dataform.append('NomEquipe', values.NomEquipe)
    //             dataform.append('SelectEnLigne', values.SelectEnLigne)
    //             dataform.append('Etablissement', values.Etablissement)
    //             dataform.append('cv', values.cv[0].name)
    //             dataform.append('file', {name:values.cv[0].name , size:values.cv[0].size ,webkitRelativePath:""})

    //             axios.post(path1, dataform)
    //                 .then(res => {
    //                     setLoading(false);
    //                     setSent(res.data.sent)
    //                     setError(res.data.error)
    //                     setMsg(res.data.msg)
    //                     setTimeout(() => setError(false), 3000)
    //                     setTimeout(() => history.push('/'), 1300)

    //                 })
    //                 .catch(err => {
    //                     setError(true);
    //                     setLoading(false);
    //                     setMsg(true)
    //                     setTimeout(() => setError(false), 3000)
    //                 });
    //         }
    //     },
    //     [step, steps, setSteps, setStep, setFormState, isLastStep, isPreviousStepsValid]
    // );

    // const onPrevClick = useCallback((event) => {
    //     event.preventDefault();
    //     setStep(() => Math.max(step - 1, 0));
    // },
    //     [step, setStep]
    // );


    return (
        // <div className="contact-form-wrap" >
        //     <Alert show={error} variant={'danger'}>
        //         {msg ? "Vous êtes déjà inscrit" : "Une erreur s'est produite lors de votre inscription veuillez vous inscrire une nouvelle fois"}
        //     </Alert>
        //     <Modal
        //         size="md"
        //         show={sent}
        //         onHide={() => setSent(false)}
        //         aria-labelledby="example-modal-sizes-title-sm"
        //     >
        //         <Modal.Header closeButton>
        //             <Modal.Title id="example-modal-sizes-title-sm" >
        //                 Félicitations !
        //             </Modal.Title>
        //         </Modal.Header>
        //         <Modal.Body style={{ textAlign: 'center' }}>
        //             <i style={{ fontSize: '100px', color: '#2EA3DD' }} className="fa fa-check"></i>
        //             <h5>Vous venez de finaliser votre inscription à la 1ère édition du Hack'Prise </h5>

        //         </Modal.Body>
        //     </Modal>
        //     <Reveal top>
        //         <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        //             <Stepper value={step} items={steps} style={{ width: "109%" }} />
        //             <Form
        //                 initialValues={formState}
        //                 onSubmitClick={onStepSubmit}
        //                 render={(formRenderProps) => (
        //                     <div style={{ alignSelf: 'center' }}>
        //                         <FormElement style={{ width: long }}>
        //                             {stepPages[step]}
        //                             {/*                                    
        //                             { step==0?formRenderProps.valueGetter('SelectHackathon') !== "INFOR" ? "" :

        //                                 <Field
        //                                     key={'SelectEnLigne'}
        //                                     id={'SelectEnLigne'}
        //                                     name={'SelectEnLigne'}
        //                                     label={'Choisir'}
        //                                     data={data}
        //                                     validator={requiredValidator}
        //                                     component={FormRadioGroup}
        //                                     layout={"horizontal"}

        //                                 /> :""

        //                             } */
        //                             step===1 ?
        //                             console.log(formRenderProps.valueGetter("cv")):""

        //                             }
        //                             <span style={{ marginTop: '40px' }} className={'k-form-separator'} />
        //                             <div
        //                                 style={{ justifyContent: 'space-between', alignContent: 'center' }}
        //                                 className={'k-form-buttons k-buttons-end'}
        //                             >

        //                                 <span style={{ alignSelf: 'center' }}>Etape {step + 1} sur 2</span>
        //                                 <div>
        //                                     {
        //                                         step !== 0 ? (
        //                                             <Button style={{ marginRight: '16px', backgroudColor: '#2ea3dd' }} onClick={onPrevClick}>
        //                                                 Retour
        //                                             </Button>
        //                                         ) : undefined
        //                                     }
        //                                     <Button style={{ backgroudColor: '#2ea3dd' }}
        //                                         primary={true}
        //                                         disabled={!formRenderProps.allowSubmit}
        //                                         onClick={formRenderProps.onSubmit}
        //                                     >
        //                                         {isLastStep ? 'Envoyer' : 'Suivant'}
        //                                     </Button>
        //                                 </div>
        //                             </div>
        //                         </FormElement>
        //                     </div>
        //                 )}
        //             />
        //         </div>
        //     </Reveal>
        // </div>
        <div className="contact-form-wrap">
            <Alert show={error} variant={'danger'}>
                {msg ? "Vous êtes déjè inscrit" : "Une erreur s'est produite lors de votre inscription veuillez vous inscrire une nouvelle fois"}
            </Alert>
            <Modal
                size="md"
                show={sent}
                onHide={() => setSent(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm" >
                        Félicitations !
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    <i style={{ fontSize: '100px', color: '#2EA3DD' }} className="fa fa-check"></i>
                    <h5>Vous venez de finaliser votre inscription à la 15ème édition du forum annuel de l'ENSI</h5>
                </Modal.Body>
            </Modal>
            <form id="contact-form" onSubmit={(event) => handleSubmit(event)} encType="multipart/form-data">
                <div className="row">
                    <h5>Chef D'équipe</h5>
                    <br />
                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'nom'}
                            placeholder={'Nom et Prénom *'}
                            required={true}
                            onChange={(event) => handeleName(event)}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'email'}
                            name={'addresse_email'}
                            placeholder={'Addresse email *'}
                            required={true}
                            onChange={(event) => handeleMail(event)}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'num_telephone'}
                            placeholder={'Numéro de téléphone *'}
                            required={true}
                            onChange={(event) => handelePhone(event)}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'Occupation'}
                            placeholder={'Occupation *'}
                            required={true}
                            onChange={(event) => handeleOccupation(event)}
                        />
                    </div>
                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'Établissement'}
                            placeholder={'Établissement *'}
                            required={true}
                            onChange={(event) => handeleInstitut(event)}
                        />

                    </div>
                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'NomEquipe'}
                            placeholder={`Nom d'équipe *`}
                            required={true}
                            onChange={(event) => handeleEquipe(event)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label>Choisir</label>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="choix" value="En ligne" required onChange={(event) => handeleChoix(event)} />
                            <label class="form-check-label" for="flexRadioDefault1">
                                En ligne
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="choix" value="En Présentiel" onChange={(event) => handeleChoix(event)} />
                            <label class="form-check-label" for="flexRadioDefault2">
                                En Présentiel
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ display: "flex" }}>
                        <input type='file' id='cv' style={{ display: 'none' }} name='cv' onChange={(event) => handleFile(event)} accept=".pdf,.ppt,.pptx,.doc,.docx" />
                        <label style={{ paddingLeft: '10px' }} htmlFor="cv"><Tooltip title='Attacher un CV'><span style={{ cursor: 'pointer' }} className='clipper-outline'><i className="fa fa-paperclip" /></span></Tooltip></label>
                        <div className="col-md-6">
                            <div style={{ display: fileType !== '' ? '' : 'none', width: "60px", textAlign: 'center', paddingBottom: '15px' }}>
                                <div style={{ width: "60px" }}>
                                    <img src={require(`../../../assets/img/icons/pdf.png`).default} style={{ display: fileType !== 'pdf' ? 'none' : '' }} width="100%" />
                                    <img src={require(`../../../assets/img/icons/doc.jpg`).default} style={{ display: !['docx', 'doc'].includes(fileType) ? 'none' : '' }} width="150%" />
                                    <img src={require(`../../../assets/img/icons/ppt.png`).default} style={{ display: !['pptx', 'ppt'].includes(fileType) ? 'none' : '' }} width="150%" />
                                    <span onClick={() => close()} style={{ display: fileType !== 'pdf' ? 'none' : '', fontSize: '20px', position: 'absolute', top: "-11px", left: '9px', cursor: 'pointer' }}><i className='fa fa-times' /></span>
                                    <span onClick={() => close()} style={{ display: !['docx', 'doc', 'pptx', 'ppt'].includes(fileType) ? 'none' : '', fontSize: '20px', position: 'absolute', top: "-10px", left: '15px', cursor: 'pointer' }}><i className='fa fa-times' /></span>
                                </div>
                                <p style={{ fontSize: '10px' }}>{fileName}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label>Choisir nombre de participant:</label>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="nb" value="1" required onChange={(event) => handeleNombre(event)} />
                            <label class="form-check-label" for="flexRadioDefault1">
                                1
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="nb" value="2" onChange={(event) => handeleNombre(event)} />
                            <label class="form-check-label" for="flexRadioDefault2">
                                2
                            </label>
                        </div>

                    </div>

                    {
                        test ?
                            <>
                                <br />
                                <br /><br /><br /><br />
                                <h5>Participant 2</h5>
                                <br /><br />
                                <div className="col-md-6">
                                    <FormInput
                                        tag={'input'}
                                        type={'text'}
                                        name={'nom1'}
                                        placeholder={'Nom et Prénom *'}
                                        required={true}
                                        onChange={(event) => handeleName1(event)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <FormInput
                                        tag={'input'}
                                        type={'email'}
                                        name={'addresse_email1'}
                                        placeholder={'Addresse email *'}
                                        required={true}
                                        onChange={(event) => handeleMail1(event)}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <FormInput
                                        tag={'input'}
                                        type={'text'}
                                        name={'num_telephone1'}
                                        placeholder={'Numéro de téléphone *'}
                                        required={true}
                                        onChange={(event) => handelePhone1(event)}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <FormInput
                                        tag={'input'}
                                        type={'text'}
                                        name={'Occupation1'}
                                        placeholder={'Occupation *'}
                                        required={true}
                                        onChange={(event) => handeleOccupation1(event)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <FormInput
                                        tag={'input'}
                                        type={'text'}
                                        name={'Établissement1'}
                                        placeholder={'Établissement *'}
                                        required={true}
                                        onChange={(event) => handeleInstitut1(event)}
                                    />

                                </div>
                                <div className="col-md-6" style={{ display: "flex" }}>
                                    <input type='file' id='cv' style={{ display: 'none' }} name='cv' onChange={(event) => handleFile(event)} accept=".pdf,.ppt,.pptx,.doc,.docx" />
                                    <label style={{ paddingLeft: '10px' }} htmlFor="cv"><Tooltip title='Attacher un CV'><span style={{ cursor: 'pointer' }} className='clipper-outline'><i className="fa fa-paperclip" /></span></Tooltip></label>
                                    <div className="col-md-6">
                                        <div style={{ display: fileType !== '' ? '' : 'none', width: "60px", textAlign: 'center', paddingBottom: '15px' }}>
                                            <div style={{ width: "60px" }}>
                                                <img src={require(`../../../assets/img/icons/pdf.png`).default} style={{ display: fileType !== 'pdf' ? 'none' : '' }} width="100%" />
                                                <img src={require(`../../../assets/img/icons/doc.jpg`).default} style={{ display: !['docx', 'doc'].includes(fileType) ? 'none' : '' }} width="150%" />
                                                <img src={require(`../../../assets/img/icons/ppt.png`).default} style={{ display: !['pptx', 'ppt'].includes(fileType) ? 'none' : '' }} width="150%" />
                                                <span onClick={() => close()} style={{ display: fileType !== 'pdf' ? 'none' : '', fontSize: '20px', position: 'absolute', top: "-11px", left: '9px', cursor: 'pointer' }}><i className='fa fa-times' /></span>
                                                <span onClick={() => close()} style={{ display: !['docx', 'doc', 'pptx', 'ppt'].includes(fileType) ? 'none' : '', fontSize: '20px', position: 'absolute', top: "-10px", left: '15px', cursor: 'pointer' }}><i className='fa fa-times' /></span>
                                            </div>
                                            <p style={{ fontSize: '10px' }}>{fileName}</p>
                                        </div>
                                    </div>
                                </div>


                            </>
                            : ""
                    }







                    <div className="col-md-12" style={{ marginLeft: '15px', paddingBottom: "20px" }}>
                        <FormControlLabel
                            control={<input onChange={(event) => handeleAccord(event)} style={{ padding: '15px' }} type='checkbox' name='accord' className="checkbox" />}
                            label={<label style={{ fontSize: "13px", marginTop: '8px', paddingLeft: '15px', color: "#8e8e8e" }}>J'accepte de partager mes informations avec les entreprises présentes au forum annuel de l'ENSI</label>}
                            icon={<span />}
                        />
                    </div>

                    <div className="col-md-12" style={{ display: 'flex', justifyContent: 'center' }}>

                        <FormInput
                            tag={'button'}
                            classes={'btn-outline'}
                            loading={loading}

                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Formulaire;