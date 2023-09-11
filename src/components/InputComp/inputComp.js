import React, { useState } from 'react';
import './style.css';

const InputComp = () => {
    const data =[
        {name:'rupinder'},
        {name:"vicky"},
    ];
    const [filterData,setFilterData]=useState([]);
    const [show,setShow]= useState(false);
    const [iptValue,setIptValue]= useState([]);
    const filterHandler =(e)=>{
        
        const val = e.target.value;
        if(val.length > 0 ){
            setShow(true)
        }else{
            setShow(false)
        }
     setFilterData(
        data.filter(name => name.name.toLowerCase().includes(val.toLowerCase()))
        )
    };
    const valHandler=(data)=>{
        setIptValue([...iptValue,data])
    };
    const clickHandler =(data)=>{
        console.log(data)
      setIptValue( iptValue.filter(item => item.toLowerCase() !== data))
    };
  return (
    <div className='main'>
    <div className="wrapper">
        <div>{iptValue && iptValue.map((val)=>{
            return<div style={{display:"flex"}}>
              <p>{val}<span style={{cursor:"pointer"}} onClick={()=>clickHandler(val)} >X</span></p>
            </div>
        })}</div>
        <input style={{height:"inherit"}} onChange={filterHandler} />
        {show &&
        <div>{  filterData.length !== 0 ?filterData.map((val)=>{
            return <div >
            <p  onClick={()=>valHandler(val.name)} >{val.name}</p>
             
            </div>
        }) :''}</div>}
    </div>
    </div>
  )
}

export default InputComp;