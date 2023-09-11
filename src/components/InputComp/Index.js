import React, { useState } from 'react';
import styled from 'styled-components';

const ChipsInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3px;
  border:1px solid black;
  padding:8px;
  width:40%
`;

const Chip = styled.div`
  display: flex;
  align-items: center;
  background-color: #e0e0e0;
  padding: 4px 8px;
  border-radius: 16px;
`;
const UnChip = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 16px;
`;

const ChipText = styled.span`
  // margin-right: 4px;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const CustomChipsInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState([]);
  const dummyData =["azeem","fahad","umair","bhatti","ali","asad","ayan","rafay","maheen","arslan","talha"];
  const [filterData,setFilterData]=useState([]);
const [show,setShow]= useState(false);
  const handleInputChange = (event) => {
    const val = event.target.value;
    if(val.length > 0){
      setShow(true)
      setFilterData(dummyData.filter(name => name.toLowerCase().includes(val.toLowerCase())))
    }else{
      setShow(false)
    }
    setInputValue(event.target.value);
  };
  console.log("chips",chips)
  console.log("ipt",inputValue)

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      setChips([...chips, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleChipDelete = (chipIndex) => {
    
    const updatedChips = chips.filter((_, index) => index !== chipIndex);
    setChips(updatedChips);
  };
const clickHandler=(data)=>{
  setShow(false)

  setChips([...chips, data]);
  setInputValue('');
};
const operandHandler =()=>{
  setChips([])
};
  return (
    <>
    <ChipsInputContainer>
      {chips?.map((chip, index) => (<>
        {/^[\.\,\+\-\*\=]*$/.test(chip) ? 
          <UnChip key={index}>
            <ChipText onClick={()=>{operandHandler()}}>{chip}</ChipText>
            {/* <DeleteButton onClick={() => handleChipDelete(index)}>x</DeleteButton> */}
          </UnChip>
      :
        <Chip key={index}>
          <ChipText>{chip}</ChipText>
          <DeleteButton onClick={() => handleChipDelete(index)}>x</DeleteButton>
        </Chip>}
        </>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter value"
        style={{border:"none",outline:'none'}}
      />
      
    </ChipsInputContainer>
    {show ?
      filterData?.map((item)=>{
        return <div style={{border:"1px solid black",width:"40%"}}>
          <p style={{cursor:"pointer"}} onClick={()=>clickHandler(item)} > {item}</p>
        </div>
      })
         : ""
    }
    </>
  );
};

export default CustomChipsInput;




