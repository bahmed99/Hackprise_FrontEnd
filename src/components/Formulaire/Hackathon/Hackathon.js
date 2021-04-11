import React, { useState, useCallback } from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';
import { Form, FormElement } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { Stepper } from '@progress/kendo-react-layout';
import { Modal } from 'react-bootstrap';
import { ChefDetails } from './Chef';
import { TeamDetails } from './Equipes';
import { RestTeamDetails } from './ResteEquipe';
import { Reveal } from 'react-reveal';


import Alert from 'react-bootstrap/Alert'
const stepPages = [
    ChefDetails,
    TeamDetails,
    RestTeamDetails
];


function Formulaire() {

    const history = useHistory();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [sent, setSent] = useState(false)
    const [msg, setMsg] = useState(false)


    const path1 = "http://www.localhost:3001/hackathonStb/register"
    const path2 = "http://www.localhost:3001/hackathonInfor/register"



    const [step, setStep] = useState(0);
    const [formState, setFormState] = useState({});
    const [steps, setSteps] = useState([
        { label: 'Chef du groupe', isValid: undefined, icon: 'k-i-user' },
        { label: 'Equipes', isValid: undefined, icon: 'k-i-myspace' },
        { label: `Reste de l'équipe`, isValid: undefined, icon: 'k-i-track-changes-accept' }
    ]);

    const lastStepIndex = steps.length - 1;
    const isLastStep = lastStepIndex === step;
    const isPreviousStepsValid = steps
        .slice(0, step)
        .findIndex(currentStep => currentStep.isValid === false) === -1;

    const onStepSubmit = useCallback(
        (event) => {
            const { isValid, values } = event;

            const currentSteps = steps.map((currentStep, index) => ({
                ...currentStep,
                isValid: index === step ? isValid : currentStep.isValid
            }));

            setSteps(currentSteps);
            setStep(() => Math.min(step + 1, lastStepIndex));
            setFormState(values);

            if (isLastStep && isPreviousStepsValid && isValid) {
                if(values.SelectHackathon=='Stb') {
                axios.post(path1, values)
                    .then(res => {
                        setLoading(false);
                        setSent(res.data.sent)
                        setError(res.data.error)
                        setMsg(res.data.msg)
                        setTimeout(() => setError(false), 3000)
                        setTimeout(() => history.push('/'), 1300)

                    })
                    .catch(err => {
                        setError(true);
                        setLoading(false);
                        setMsg(true)
                        setTimeout(() => setError(false), 3000)
                    });}
                    if(values.SelectHackathon=='Infor') {
                        axios.post(path2, values)
                            .then(res => {
                                setLoading(false);
                                setSent(res.data.sent)
                                setError(res.data.error)
                                setMsg(res.data.msg)
                                setTimeout(() => setError(false), 3000)
                                setTimeout(() => history.push('/'), 1300)
        
                            })
                            .catch(err => {
                                setError(true);
                                setLoading(false);
                                setMsg(true)
                                setTimeout(() => setError(false), 3000)
                            });}
        



            }
        },
        [step, steps, setSteps, setStep, setFormState, isLastStep, isPreviousStepsValid]
    );

    const onPrevClick = useCallback((event) => {
        event.preventDefault();
        setStep(() => Math.max(step - 1, 0));
    },
        [step, setStep]
    );


    return (
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
<Reveal top>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Stepper value={step} items={steps}  />
                <Form
                    initialValues={formState}
                    onSubmitClick={onStepSubmit}
                    render={(formRenderProps) => (
                        <div style={{ alignSelf: 'center' }}>
                            <FormElement style={{ width: 480 }}>
                                {stepPages[step]}
                                <span style={{ marginTop: '40px' }} className={'k-form-separator'} />
                                <div
                                    style={{ justifyContent: 'space-between', alignContent: 'center' }}
                                    className={'k-form-buttons k-buttons-end'}
                                >
                                    <span style={{ alignSelf: 'center' }}>Etape {step + 1} sur 3</span>
                                    <div>
                                        {
                                            step !== 0 ? (
                                                <Button style={{ marginRight: '16px' ,backgroudColor:'#2ea3dd' }} onClick={onPrevClick}>
                                                    Retour
                                                </Button>
                                            ) : undefined
                                        }
                                        <Button style={{backgroudColor:'#2ea3dd'}}
                                            primary={true}
                                            disabled={!formRenderProps.allowSubmit}
                                            onClick={formRenderProps.onSubmit}
                                        >
                                            {isLastStep ? 'Envoyer' : 'Suivant'}
                                        </Button>
                                    </div>
                                </div>
                            </FormElement>
                        </div>
                    )}
                />
            </div>
            </Reveal>
        </div>
    );
};

export default Formulaire;