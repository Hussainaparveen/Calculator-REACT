import React, { useState } from 'react'

function Twoway() {
    const[input,setInput]=useState('');
    const[selectValue,setSelectValue]=useState('');
    const[radioValue,setRadioValue]=useState('');
    const[checkValue,setCheckValue]=useState(false);

    function handleCheck(){
        setCheckValue(!checkValue);
    }
  return (
    <div>
        <input placeholder='name'type='text' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
        <select value={selectValue} onChange={(e)=>{setSelectValue(e.target.value)}} >
            <option value="" disabled selected>Select a degree</option>
            <option>CSE</option>
            <option>IT</option>
            <option>ECE</option>
            <option>EEE</option>
            <option>Mech</option>
            <option>civil</option>
        </select>
        <legend>gender</legend>
        <input type='radio' value='male' checked={radioValue==='male'} id='gender-male' onChange={(e)=>{setRadioValue(e.target.value)}} />
        <label htmlFor='gender-male'>Male</label>
        <input type='radio' value='female' checked={radioValue==='female'} id='gender-female' onChange={(e)=>{setRadioValue(e.target.value)}}/>
        <label htmlFor='gender-female'>Female<br/></label>
        <label htmlFor='check'>agree to terms and conditions</label>
        <input id='check' checked={checkValue} type='checkbox' onChange={handleCheck}/>
        
        
    <div>
        <p>text input value: {input}</p>
        <p>select input value: {selectValue}</p>
        <p>radio input value: {radioValue}</p>
        <p>agreed to terms and conditions?:  {checkValue ? 'agreed':'not agreed'}</p>
        {/* <p>check input value:{checkValue}</p> */}
    </div>
    </div>
    
    )
}
export default Twoway
