import React from 'react';
import ReactLoading from 'react-loading';

const FormInput = ({tag,type,name,placeholder,classes,list_id,list,required,onChange,loading}) => {
    return (
        <div className="single-input-item">
            <label>
                {(()=>{
                    if((tag === 'input')&&(list!==undefined)){
                         return <><input onChange={(event)=>onChange(event)} type={type} name={name} placeholder={placeholder} className={classes} list={list_id} required={required}/> <datalist id={list_id}>{list.map((el,ind) =><option key={ind} value={el}>{el}</option>)}</datalist></>
                    }if((tag === 'input')){
                        return   <input onChange={(event)=>onChange(event)} type={type} name={name} placeholder={placeholder} className={classes} required={required}/> 
                    }else if(tag === 'textarea'){
                        return  <textarea onChange={(event)=>onChange(event)} name={name} cols="30" rows="7" placeholder={placeholder} className={classes} required={required}/>
                    }else if(tag === 'button'){
                        return <button style={{backgroundColor:loading? "#1F212D" :''}} disabled={loading} className={`btn-outline ${classes}`}>{loading? <ReactLoading height={'20px'} width={'24px'} type="spin"/>:"S'inscrire"}</button>
                    }
                })()}
            </label>
        </div>
    );
};

export default FormInput;