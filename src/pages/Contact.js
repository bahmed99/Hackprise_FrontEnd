import React,{Fragment , useState} from 'react';
import ContactPage from "../components/Contact";
import Footer from "../components/Footer";



const PageContact = () => {
    

    let [screen, setScreen]=useState()
    let [scale, setScale]=useState()
    let [btn, setBtn]=useState()
    window.onresize = function(){
        if(window.innerWidth>1200)
        {
            setScreen(true)
        }
        else
        {
            setScreen(false)
        }
        if(window.innerWidth<450)
        {
            setScale(100)

        }
        else
        {
            setScale(40)
        }
        if(window.innerWidth<393)
        {
            setBtn(true)

        }

        if(window.innerWidth>=393)
        {
            setBtn(false)

        }
     }
   
    React.useEffect(() => {

    
        if(window.innerWidth>1200)
        {
            setScreen(true)

        }
        else
        {
            setScreen(false)
        }
        if(window.innerWidth<450)
        {
            setScale(100)

        }
        else
        {
            setScale(40)
        }
        if(window.innerWidth<393)
        {
            setBtn(true)

        }
        
    })
    
    return (
        <Fragment>
            <ContactPage long={screen?480:250} btn={btn} />
            <br /><br /><br /><br />
            <Footer/>
        </Fragment>
    );
};

export default PageContact;