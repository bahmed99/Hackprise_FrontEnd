import { FormControlLabel, Tooltip } from '@material-ui/core';
import React, { useState, useCallback } from 'react';
import FormInput from "../../Utilities/Input";
import { useHistory } from 'react-router';
import axios from 'axios';

import { Modal } from 'react-bootstrap';
import { Reveal } from 'react-reveal';

import Alert from 'react-bootstrap/Alert'

function Formulaire({ long }) {
    const path = "https://back.hackprise.com/hackathonStb/register"

    const [nameValue, setNameValue] = useState('')
    const [mailValue, setMailValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')
    const [institutValue, setInstitutValue] = useState('')
    const [occupation, setOccupation] = useState('')
    const [equipe, setEquipe] = useState('')
    const [discord, setDiscord] = useState('')

    const [nameValue1, setNameValue1] = useState('')
    const [mailValue1, setMailValue1] = useState('')
    const [phoneValue1, setPhoneValue1] = useState('')
    const [institutValue1, setInstitutValue1] = useState('')
    const [occupation1, setOccupation1] = useState('')
    const [discord1, setDiscord1] = useState('')

    const [nameValue2, setNameValue2] = useState('')
    const [mailValue2, setMailValue2] = useState('')
    const [phoneValue2, setPhoneValue2] = useState('')
    const [institutValue2, setInstitutValue2] = useState('')
    const [occupation2, setOccupation2] = useState('')
    const [discord2, setDiscord2] = useState('')



    const [nameValue3, setNameValue3] = useState('')
    const [mailValue3, setMailValue3] = useState('')
    const [phoneValue3, setPhoneValue3] = useState('')
    const [institutValue3, setInstitutValue3] = useState('')
    const [occupation3, setOccupation3] = useState('')
    const [discord3, setDiscord3] = useState('')




    const history = useHistory();

    const [test, setTest] = useState(2)


    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [sent, setSent] = useState(false)
    const [msg, setMsg] = useState(false)



    const handeleName = (event) => setNameValue(event.target.value)
    const handeleMail = (event) => setMailValue(event.target.value)
    const handelePhone = (event) => setPhoneValue(event.target.value)
    const handeleInstitut = (event) => setInstitutValue(event.target.value)
    const handeleOccupation = (event) => setOccupation(event.target.value)
    const handeleEquipe = (event) => setEquipe(event.target.value)
    const handeleDiscord = (event) => setDiscord(event.target.value)

    const handeleName1 = (event) => setNameValue1(event.target.value)
    const handeleMail1 = (event) => setMailValue1(event.target.value)
    const handelePhone1 = (event) => setPhoneValue1(event.target.value)
    const handeleInstitut1 = (event) => setInstitutValue1(event.target.value)
    const handeleOccupation1 = (event) => setOccupation1(event.target.value)
    const handeleDiscord1 = (event) => setDiscord1(event.target.value)

    const handeleName2 = (event) => setNameValue2(event.target.value)
    const handeleMail2 = (event) => setMailValue2(event.target.value)
    const handelePhone2 = (event) => setPhoneValue2(event.target.value)
    const handeleInstitut2 = (event) => setInstitutValue2(event.target.value)
    const handeleOccupation2 = (event) => setOccupation2(event.target.value)
    const handeleDiscord2 = (event) => setDiscord2(event.target.value)

    const handeleName3 = (event) => setNameValue3(event.target.value)
    const handeleMail3 = (event) => setMailValue3(event.target.value)
    const handelePhone3 = (event) => setPhoneValue3(event.target.value)
    const handeleInstitut3 = (event) => setInstitutValue3(event.target.value)
    const handeleOccupation3 = (event) => setOccupation3(event.target.value)
    const handeleDiscord3 = (event) => setDiscord3(event.target.value)





    const handeleNombre = (event) => {
        if (event.target.value === "2") {
            setTest(2)
            setNameValue2("")
            setMailValue2("")
            setPhoneValue2("")
            setInstitutValue2("")
            setOccupation2("")
            setNameValue3("")
            setMailValue3("")
            setPhoneValue3("")
            setInstitutValue3("")
            setOccupation3("")
            setDiscord2("")
            setDiscord3("")
        }

        else if (event.target.value === "3") {
            setTest(3)
            setNameValue3("")
            setMailValue3("")
            setPhoneValue3("")
            setInstitutValue3("")
            setOccupation3("")
            setDiscord3("")
        }
        else {
            setTest(4)
        }

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);


        const values = {
            nom: nameValue,
            email: mailValue,
            tel: phoneValue,
            Etablissement: institutValue,
            profession: occupation,
            NomEquipe: equipe,
            nom1: nameValue1,
            email1: mailValue1,
            tel1: phoneValue1,
            Etablissement1: institutValue1,
            profession1: occupation1,
            nom2: nameValue2,
            email2: mailValue2,
            tel2: phoneValue2,
            Etablissement2: institutValue2,
            profession2: occupation2,
            nom3: nameValue3,
            email3: mailValue3,
            tel3: phoneValue3,
            Etablissement3: institutValue3,
            profession3: occupation3,
            discord: discord,
            discord1: discord1,
            discord2: discord2,
            discord3: discord3,
        }






        axios.post(path, values)
            .then(res => {
                setLoading(false);
                setSent(res.data.sent)
                setError(res.data.error)
                setMsg(res.data.msg)
                setTimeout(() => setError(false), 3000)
                setTimeout(() => history.push('/'), 1300)

            })
            .catch(() => {
                setError(true);
                setLoading(false);
                setMsg(true)
                setTimeout(() => setError(false), 3000)
            });

    }


    return (
        <div className="contact-form-wrap">
            <Alert show={error} variant={'danger'}>
                {msg ? "Vous êtes déjà inscrit" : "Une erreur s'est produite lors de votre inscription veuillez vous inscrire une nouvelle fois"}
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
                    <h5>Vous venez de finaliser votre inscription à la 1ère édition du Hack'Prise</h5>
                </Modal.Body>
            </Modal>
            <form id="contact-form" onSubmit={(event) => handleSubmit(event)} encType="multipart/form-data">
                <div className="row">
                    <h5 style={{ color: "#1f212d" }}>Chef D'équipe</h5>
                    <br /><br />
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
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'discord'}
                            placeholder={`Identifiant Discord *`}
                            required={true}
                            onChange={(event) => handeleDiscord(event)}
                        />
                    </div>







                    <br />
                    <br />
                    <br /><br /><br /><br />
                    <h5 style={{ color: "#1f212d" }}>Participant 2</h5>
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
                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'discord1'}
                            placeholder={`Identifiant Discord *`}
                            required={true}
                            onChange={(event) => handeleDiscord1(event)}
                        />
                    </div>

                    {
                        test === 3 ?
                            <>
                                <br />
                                <br /><br /><br /><br />
                                <h5 style={{ color: "#1f212d" }}>Participant 3</h5>
                                <br /><br />
                                <div className="col-md-6">
                                    <FormInput
                                        tag={'input'}
                                        type={'text'}
                                        name={'nom2'}
                                        placeholder={'Nom et Prénom *'}
                                        required={true}
                                        onChange={(event) => handeleName2(event)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <FormInput
                                        tag={'input'}
                                        type={'email'}
                                        name={'addresse_email2'}
                                        placeholder={'Addresse email *'}
                                        required={true}
                                        onChange={(event) => handeleMail2(event)}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <FormInput
                                        tag={'input'}
                                        type={'text'}
                                        name={'num_telephone2'}
                                        placeholder={'Numéro de téléphone *'}
                                        required={true}
                                        onChange={(event) => handelePhone2(event)}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <FormInput
                                        tag={'input'}
                                        type={'text'}
                                        name={'Occupation2'}
                                        placeholder={'Occupation *'}
                                        required={true}
                                        onChange={(event) => handeleOccupation2(event)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <FormInput
                                        tag={'input'}
                                        type={'text'}
                                        name={'Établissement2'}
                                        placeholder={'Établissement *'}
                                        required={true}
                                        onChange={(event) => handeleInstitut2(event)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <FormInput
                                        tag={'input'}
                                        type={'text'}
                                        name={'discord2'}
                                        placeholder={`Identifiant Discord *`}
                                        required={true}
                                        onChange={(event) => handeleDiscord2(event)}
                                    />
                                </div>
                            </>
                            : test === 4 ?
                                <>
                                    <br />
                                    <br /><br /><br /><br />
                                    <h5 style={{ color: "#1f212d" }}>Participant 3</h5>
                                    <br /><br />
                                    <div className="col-md-6">
                                        <FormInput
                                            tag={'input'}
                                            type={'text'}
                                            name={'nom2'}
                                            placeholder={'Nom et Prénom *'}
                                            required={true}
                                            onChange={(event) => handeleName2(event)}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <FormInput
                                            tag={'input'}
                                            type={'email'}
                                            name={'addresse_email2'}
                                            placeholder={'Addresse email *'}
                                            required={true}
                                            onChange={(event) => handeleMail2(event)}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <FormInput
                                            tag={'input'}
                                            type={'text'}
                                            name={'num_telephone2'}
                                            placeholder={'Numéro de téléphone *'}
                                            required={true}
                                            onChange={(event) => handelePhone2(event)}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <FormInput
                                            tag={'input'}
                                            type={'text'}
                                            name={'Occupation2'}
                                            placeholder={'Occupation *'}
                                            required={true}
                                            onChange={(event) => handeleOccupation2(event)}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <FormInput
                                            tag={'input'}
                                            type={'text'}
                                            name={'Établissement2'}
                                            placeholder={'Établissement *'}
                                            required={true}
                                            onChange={(event) => handeleInstitut2(event)}
                                        />

                                    </div>
                                    <div className="col-md-6">
                                        <FormInput
                                            tag={'input'}
                                            type={'text'}
                                            name={'discord2'}
                                            placeholder={`Identifiant Discord *`}
                                            required={true}
                                            onChange={(event) => handeleDiscord2(event)}
                                        />
                                    </div>

                                    <>
                                        <br />
                                        <br /><br /><br /><br />
                                        <h5 style={{ color: "#1f212d" }}>Participant 4</h5>
                                        <br /><br />
                                        <div className="col-md-6">
                                            <FormInput
                                                tag={'input'}
                                                type={'text'}
                                                name={'nom3'}
                                                placeholder={'Nom et Prénom *'}
                                                required={true}
                                                onChange={(event) => handeleName3(event)}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <FormInput
                                                tag={'input'}
                                                type={'email'}
                                                name={'addresse_email3'}
                                                placeholder={'Addresse email *'}
                                                required={true}
                                                onChange={(event) => handeleMail3(event)}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <FormInput
                                                tag={'input'}
                                                type={'text'}
                                                name={'num_telephone3'}
                                                placeholder={'Numéro de téléphone *'}
                                                required={true}
                                                onChange={(event) => handelePhone3(event)}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <FormInput
                                                tag={'input'}
                                                type={'text'}
                                                name={'Occupation3'}
                                                placeholder={'Occupation *'}
                                                required={true}
                                                onChange={(event) => handeleOccupation3(event)}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <FormInput
                                                tag={'input'}
                                                type={'text'}
                                                name={'Établissement3'}
                                                placeholder={'Établissement *'}
                                                required={true}
                                                onChange={(event) => handeleInstitut3(event)}
                                            />

                                        </div>
                                        <div className="col-md-6">
                                            <FormInput
                                                tag={'input'}
                                                type={'text'}
                                                name={'discord3'}
                                                placeholder={`Identifiant Discord *`}
                                                required={true}
                                                onChange={(event) => handeleDiscord3(event)}
                                            />
                                        </div>
                                    </>
                                </>
                                : ""
                    }

                    <div className="nbr">
                    <div className="col-md-4 " ><div className="single-input-item">
                        <label className="my-1 mr-2" >Nombre de participants</label>
                        <select className="" onChange={(event) => handeleNombre(event)}  >
                            <option selected value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div></div>
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