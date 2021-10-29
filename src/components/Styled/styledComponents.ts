import styled from "styled-components";

export const ErrorFormMessage = styled.div`
  margin: 5px;
  color: #de3b3b;
`

export const MessageStyled = styled.div`
  padding: 15px;
  margin: 5px;
  margin-right: auto;
  background-color: #626C80;
  border: white 1px solid;
  display: inline-flex;
  flex-direction: column;
  color: white;

  .userName {
    color: #fff487;
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