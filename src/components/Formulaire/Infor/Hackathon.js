import { FormControlLabel, Tooltip } from '@material-ui/core';
import React, { useState } from 'react';
import FormInput from "../../Utilities/Input";
import { useHistory } from 'react-router';
import axios from 'axios';

import { Modal } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'


function Formulaire({ long }) {
    const path = "https://back.hackprise.com/hackathonInfor/register"
    const [file, setFile] = useState()
    const [file1, setFile1] = useState()

    const [fileName, setFileName] = useState('')
    const [fileName1, setFileName1] = useState('')

    const [fileType, setFileType] = useState('')
    const [fileType1, setFileType1] = useState('')

    const [fileValue, setFileValue] = useState('')

    const [fileValue1, setFileValue1] = useState('')

    const [nameValue, setNameValue] = useState('')
    const [mailValue, setMailValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')
    const [institutValue, setInstitutValue] = useState('')
    const [occupation, setOccupation] = useState('')
    const [equipe, setEquipe] = useState('')
    const [niveau, setNiveau] = useState('0')
    const [discord, setDiscord] = useState('')
    const [forgot, setForgot] = useState(false)


    const [nameValue1, setNameValue1] = useState('')
    const [mailValue1, setMailValue1] = useState('')
    const [phoneValue1, setPhoneValue1] = useState('')
    const [institutValue1, setInstitutValue1] = useState('')
    const [occupation1, setOccupation1] = useState('')
    const [niveau1, setNiveau1] = useState('')
    const [discord1, setDiscord1] = useState('')


    const history = useHistory();
    const [test, setTest] = useState(false)



    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [sent, setSent] = useState(false)
    const [msg, setMsg] = useState(false)
    const handleFile = (event) => {
        setFileName(event.target.value.replace('C:\\fakepath\\', ''));
        setFileType(event.target.value.slice(event.target.value.lastIndexOf('.') + 1 - event.target.value.length));
        setFileValue(event.target.value);
        setFile(event.target.files[0]);

    }
    const close = () => {
        setFileName('');
        setFileType('');
        setFileValue('');
    }

    const close1 = () => {
        setFileName1('');
        setFileType1('');
        setFileValue1('');
    }

    const handleFile1 = (event) => {
        setFileName1(event.target.value.replace('C:\\fakepath\\', ''));
        setFileType1(event.target.value.slice(event.target.value.lastIndexOf('.') + 1 - event.target.value.length));
        setFileValue1(event.target.value);
        setFile1(event.target.files[0]);

    }



    const handeleName = (event) => setNameValue(event.target.value)
    const handeleMail = (event) => setMailValue(event.target.value)
    const handelePhone = (event) => setPhoneValue(event.target.value)
    const handeleInstitut = (event) => setInstitutValue(event.target.value)
    const handeleOccupation = (event) => setOccupation(event.target.value)
    const handeleNiveau = (event) => setNiveau(event.target.value)
    const handeleDiscord = (event) => {
        setDiscord(event.target.value)

    }


    const handeleName1 = (event) => setNameValue1(event.target.value)
    const handeleMail1 = (event) => setMailValue1(event.target.value)
    const handelePhone1 = (event) => setPhoneValue1(event.target.value)
    const handeleInstitut1 = (event) => setInstitutValue1(event.target.value)
    const handeleOccupation1 = (event) => setOccupation1(event.target.value)
    const handeleNiveau1 = (event) => setNiveau1(event.target.value)
    const handeleDiscord1 = (event) => setDiscord1(event.target.value)



    // const handeleAccord = (event) => setAccordValue(event.target.checked)
    const handeleEquipe = (event) => setEquipe(event.target.value)

    const handeleNombre = (event) => {
        if (event.target.value === "2") {
            setTest(true)
            setNiveau1("0")
        }
        else {
            setTest(false)
            setNameValue1("")
            setMailValue1("")
            setPhoneValue1("")
            setInstitutValue1("")
            setOccupation1("")
            setFile1()
            setFileName1('');
            setFileType1('');
            setFileValue1('');
            setNiveau1('')
            setDiscord1('')
            setNiveau1("")
        }


    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        const fd = new FormData()
        fd.append('file', file);
        fd.append('file1', file1);


        fd.append('nom', nameValue);
        fd.append('email', mailValue);
        fd.append('tel', phoneValue);
        // fd.append('accord', accordValue);
        fd.append('Etablissement', institutValue);
        fd.append('profession', occupation);
        fd.append('NomEquipe', equipe);

        fd.append('niveau', niveau);
        fd.append('discord', discord);


        fd.append('nom1', nameValue1);
        fd.append('email1', mailValue1);
        fd.append('tel1', phoneValue1);
        fd.append('Etablissement1', institutValue1);
        fd.append('profession1', occupation1);
        fd.append('niveau1', niveau1);
        fd.append('discord1', discord1);





        fd.append('fileValue', fileValue);
        fd.append('fileValue1', fileValue1);
        if (niveau === "0" || niveau1 === "0") {
            setForgot(true)
            setLoading(false)
        }
        else {
            setForgot(false)
            axios.post(path, fd)
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

    }
    return (
        <div className="contact-form-wrap">
            <Alert show={error} variant={'danger'}>
                {msg ? "Vous êtes déjà inscrit" : "Une erreur s'est produite lors de votre inscription veuillez vous inscrire une nouvelle fois"}
            </Alert>
            <Alert show={forgot} variant={'danger'}>
                {"Veuillez choisir votre niveau scolaire"}
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
                    <h5 style={{ color: "#1f212d" }}>Chef d'équipe</h5>
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
                    <div className="col-md-6"><div className="single-input-item">

                        <select className="my-1 mr-sm-2" onChange={(event) => handeleNiveau(event)}  >
                            <option selected value="0">Niveau Scolaire</option>
                            <option value="1ére année">1ére année</option>
                            <option value="2ème année">2ème année</option>
                            <option value="3ème année">3ème année</option>
                            <option value="Master">Master</option>
                            <option value="autre">autre</option>
                        </select>
                    </div></div>




                    <div className="col-md-6" style={{ display: "flex" }}>
                        <input type='file' id='cv' style={{ display: 'none' }} name='cv' onChange={(event) => handleFile(event)} accept=".pdf,.ppt,.pptx,.doc,.docx" />
                        <label style={{ paddingLeft: '10px' }} htmlFor="cv"><strong>Curriculum Vitae : </strong><Tooltip title='Attacher un CV'><span style={{ cursor: 'pointer' }} className='clipper-outline'><i className="fa fa-paperclip" /></span></Tooltip></label>
                        <div className="col-md-6">

                            <div style={{ display: fileType !== '' ? '' : 'none', width: "60px", textAlign: 'center', paddingBottom: '15px' }}>
                                <div style={{ width: "60px" }}>
                                    <img src={require(`../../../assets/img/icons/pdf.png`).default} style={{ display: fileType !== 'pdf' ? 'none' : '' }} width="100%" alt='' />
                                    <img src={require(`../../../assets/img/icons/doc.jpg`).default} style={{ display: !['docx', 'doc'].includes(fileType) ? 'none' : '' }} width="150%" alt='' />
                                    <img src={require(`../../../assets/img/icons/ppt.png`).default} style={{ display: !['pptx', 'ppt'].includes(fileType) ? 'none' : '' }} width="150%" alt='' />
                                    <span onClick={() => close()} style={{ display: fileType !== 'pdf' ? 'none' : '', fontSize: '20px', position: 'absolute', top: "-11px", left: '9px', cursor: 'pointer' }}><i className='fa fa-times' /></span>
                                    <span onClick={() => close()} style={{ display: !['docx', 'doc', 'pptx', 'ppt'].includes(fileType) ? 'none' : '', fontSize: '20px', position: 'absolute', top: "-10px", left: '15px', cursor: 'pointer' }}><i className='fa fa-times' /></span>
                                </div>
                                <p style={{ fontSize: '10px' }}>{fileName}</p>
                            </div>
                        </div>
                    </div>



                    {/* <div className="col-md-6" >
                        <label style={{ marginLeft: '20px', marginBottom: "5px" }}><strong>Choix:</strong></label>

                        <div className="form-check" style={{ marginLeft: '20px' }}>
                            <input class="form-check-input" type="radio" name="choix" value="En ligne" required onChange={(event) => handeleChoix(event)} />
                            <label class="form-check-label" for="flexRadioDefault1">
                                En ligne
                            </label>
                        </div>
                        <div className="form-check" style={{ marginLeft: '20px' }}>
                            <input class="form-check-input" type="radio" name="choix" value="En Présentiel" onChange={(event) => handeleChoix(event)} />
                            <label class="form-check-label" for="flexRadioDefault2">
                                En Présentiel
                            </label>
                        </div>
                    </div> */}








                    <br />

                    {
                        test ?
                            <>
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
                                <div className="col-md-6"><div className="single-input-item">

                                    <select className="my-1 mr-sm-2" onChange={(event) => handeleNiveau1(event)}  >
                                        <option selected value="0">Niveau Scolaire</option>
                                        <option value="1ére année">1ére année</option>
                                        <option value="2ème année">2ème année</option>
                                        <option value="3ème année">3ème année</option>
                                        <option value="Master">Master</option>
                                        <option value="autre">autre</option>
                                    </select>
                                </div></div>
                                <div className="col-md-6" style={{ display: "flex" }}>
                                    <input type='file' id='cv1' style={{ display: 'none' }} name='cv1' onChange={(event) => handleFile1(event)} accept=".pdf,.ppt,.pptx,.doc,.docx" />
                                    <label style={{ paddingLeft: '10px' }} htmlFor="cv1"><strong>Curriculum Vitae : </strong><Tooltip title='Attacher un CV'><span style={{ cursor: 'pointer' }} className='clipper-outline'><i className="fa fa-paperclip" /></span></Tooltip></label>
                                    <div className="col-md-6">
                                        <div style={{ display: fileType1 !== '' ? '' : 'none', width: "60px", textAlign: 'center', paddingBottom: '15px' }}>
                                            <div style={{ width: "60px" }}>
                                                <img src={require(`../../../assets/img/icons/pdf.png`).default} style={{ display: fileType1 !== 'pdf' ? 'none' : '' }} width="100%" alt="" />
                                                <img src={require(`../../../assets/img/icons/doc.jpg`).default} style={{ display: !['docx', 'doc'].includes(fileType1) ? 'none' : '' }} width="150%" alt="" />
                                                <img src={require(`../../../assets/img/icons/ppt.png`).default} style={{ display: !['pptx', 'ppt'].includes(fileType1) ? 'none' : '' }} width="150%" alt="" />
                                                <span onClick={() => close1()} style={{ display: fileType1 !== 'pdf' ? 'none' : '', fontSize: '20px', position: 'absolute', top: "-11px", left: '9px', cursor: 'pointer' }}><i className='fa fa-times' /></span>
                                                <span onClick={() => close1()} style={{ display: !['docx', 'doc', 'pptx', 'ppt'].includes(fileType1) ? 'none' : '', fontSize: '20px', position: 'absolute', top: "-10px", left: '15px', cursor: 'pointer' }}><i className='fa fa-times' /></span>
                                            </div>
                                            <p style={{ fontSize: '10px' }}>{fileName1}</p>
                                        </div>
                                    </div>
                                </div>

                                <br /><br /><br /><br />

                            </>
                            : ""
                    }






                    {/* 
                    <div className="col-md-12" style={{ marginLeft: '15px', paddingBottom: "20px" }}>
                        <FormControlLabel
                            control={<input onChange={(event) => handeleAccord(event)} style={{ padding: '15px' }} type='checkbox' name='accord' className="checkbox" />}
                            label={<label style={{ fontSize: "13px", marginTop: '8px', paddingLeft: '15px', color: "#8e8e8e" }}>J'accepte de partager mes informations avec INFOR</label>}
                            icon={<span />}
                        />
                    </div> */}
                    <div className="nbr">
                        <div className="col-md-4 " ><div className="single-input-item">
                            <label className="my-1 mr-2" >Nombre de participants</label>
                            <select className=" " onChange={(event) => handeleNombre(event)}  >
                                <option selected value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div></div>
                    </div>

                    <div className="col-md-12" style={{ display: 'flex', justifyContent: 'center', marginTop: "10px" }}>

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