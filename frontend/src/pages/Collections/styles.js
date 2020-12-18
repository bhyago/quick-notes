import styled from 'vue-styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
    flex-direction: column;
    
    height: 100vh;

    align-items: center;
    justify-content: center;
`

export const Card = styled.div`
display: flex;
flex-direction: column;

height: 493px;
width:478px;
border-radius: 20px;

background-color:#EEE; 
box-shadow: 5px 10px 10px rgba(6, 89, 136, 0.23);

  ul {
    display: flex;
    flex-direction: column;
    list-style:none;
    margin: 20px;
    
    li {
      padding: 20px;
      border-radius: 20px;
      color:#EEE;
      background-color:#87C7E1;
      margin-bottom: 20px;
      height:117px;

      & + li {
        margin-bottom: 20px;
      }
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 20px 20px;

  button {
    border: 0;
    background: none;

    font-weight: 700;
    color:#87C7E1;

    &:hover {
      color: ${shade(0.2, '#87C7E1')}
      }
  }

`;