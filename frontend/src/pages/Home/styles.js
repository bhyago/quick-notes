import styled from 'vue-styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    height: 100vh;

    align-items: center;
    justify-content: center;

`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  height: 292px;
  max-width:630px;
  border-radius: 20px;

  background-color:#EEE; 
  box-shadow: 5px 10px 10px rgba(6, 89, 136, 0.23);
  
    div{
        display: flex;
        align-items: center;
        
        padding-right: 20px;
        padding-top:20px;

        justify-content: space-between;
        
        input {
        padding-left: 20px;

            border: 0;
            font-size: 25px;
            font-weight: bolder;
            background:none;
        }
    }
    

`;

export const TextEditor = styled.textarea`
  display: flex;

  width: 580px;
  height: 160px;

  margin-top: 20px;
  padding: 0 20px 0 20px;

  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  resize:none;

  font-size:20px;
  text-align:start;

  color: #0B6488;
  background-color: #EEE;

  &::placeholder {
    color: #A8A8B3;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 25px;

  button {
    width: 177px;
    height: 47px;
    background-color:#0B6488;

    border-radius: 5px;
    border: 0;
    margin-right: 20px;

    font-weight: 700;
    color:#87C7E1;

    transition: background-color 0.2s;

    &:hover {
        background: ${shade(0.2, '#0B6488')}
      }
  }
`;

export const EditButtons = styled.span`
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin: 10px;
  height: 50px;
  box-shadow: none;

  button{
      justify-content: space-between;
      padding: 7px;
      border: 0;
      text-decoration: none;

      & svg:hover {
        color: #0B6488
      }
    }

`;


export const ColorPickTop = styled.div`
  width: 25px;
  height: 25px;

  border-radius: 50%;
  background-color:#87c7e1;
`;