import { useRef } from "react";
import {handleInputValue} from '../functions.js';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from 'react-router-dom';


const InputPage = () => {
    const input = useRef(null);
    const dispatch = useDispatch();
    const store = useSelector(state => state);

    
    const eventChange = (e, d) => {
      let arrCharCode = [];
      let str = input.current.value;
  
      for(let i = 0; i< str.length; i++){ 
        arrCharCode.push(str.charCodeAt(i));
      }
  
      handleInputValue(arrCharCode, dispatch);
    }


    return <>
    <StyledInputPage>
        <StyledForm 
            onSubmit={(e)=> e.preventDefault()} 
            autoComplete="off">
        <TextField
            onChange={eventChange}
            id="standard-basic" 
            label={
                store.stringType && input ? store.stringType : "Введите текст"
            } 
            variant="standard"  
            inputRef={input}
            fullWidth={true}
            autoFocus={true}
        />
        <Button 
            size="large" 
            variant="contained" 
            color="primary" 
            component={RouterLink} to="/mockup">
          Поиск
        </Button>
        </StyledForm>
    </StyledInputPage>
    </>
} 



const StyledInputPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledForm = styled.form`
  width: 40%;
  display: flex;
  gap: 20px;
  @media (min-width: 500px){
    min-width: 500px;
  }
  @media (max-width: 500px){
    width: 100%;
    flex-direction: column;
    align-items: center;
    a{
      width: 100px;
    }

  }
`

export default InputPage;