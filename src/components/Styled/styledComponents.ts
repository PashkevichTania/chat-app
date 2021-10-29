import styled from "styled-components";

interface MessageStyledProps {
  myMsg: boolean
}

export const ErrorFormMessage = styled.div`
  margin: 5px;
  color: #de3b3b;
`

export const MessageStyled = styled.div<MessageStyledProps>`
  padding: 15px;
  margin: ${props => props.myMsg ? "5px 5px 5px auto" : "5px auto 5px 5px"};
  background-color: ${props => props.myMsg ? "#2196f3" : "#626C80"};
  border: white 1px solid;
  border-radius: 10px;
  display: inline-flex;
  flex-direction: column;
  color: white;
  max-width: 75%;

  .userName {
    color: ${props => props.myMsg ? "#E9F20A" : "#fff487"};
    font-weight: bold;
  }
  .text{
    margin: 10px 0 10px 0;
    font-size: 1.3rem;
  }
  .date{
    font-size: 0.8rem;
    color: #272B33;
  }
`

export const MessagesContainerStyled = styled.div`
  margin: 0 auto;

  background-color: #454C5A;
  border: white 1px solid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  
  height: 60vh;
  overflow: auto;
`

export const UserStyled = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: #44D62C;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`

export const ChatStyled = styled.div`

`
