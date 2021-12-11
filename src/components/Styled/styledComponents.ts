import styled from "styled-components";
import {Box, IconButton} from "@mui/material";

interface MessageStyledProps {
  myMsg: boolean
}

interface AvatarStyledProps {
  size?: string
}

interface isAdminProps {
  isAdmin?: boolean
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

  .text {
    margin: 10px 0 10px 0;
    font-size: 1.3rem;
    word-break: break-word;
  }

  .date {
    font-size: 0.8rem;
    color: #272B33;
  }
`

export const MessagesContainerStyled = styled(Box)`
  margin: 0 auto;

  background-color: #454C5A;
  border: white 1px solid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  height: 60vh;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 15px;
    height: 15px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background-image: linear-gradient(45deg, #00aeff, #a68eff);
    border-radius: 10px;
    -webkit-box-shadow: rgba(0, 0, 0, .12) 0 3px 13px 1px;
  }
`

export const UserStyled = styled.div<isAdminProps>`
  background-color: ${props => props.isAdmin ? '#0fd9bc' : '#44D62C'};
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  word-break: break-word;
`

export const ChatStyled = styled.div`

`

export const AvatarStyled = styled.img<AvatarStyledProps>`
  width: ${props => props.size ? props.size : "100px"};
  height: ${props => props.size ? props.size : "100px"};
  object-fit: cover;
  border-radius: 50%;
  border: #2196f3 solid 2px;
`


export const AvatarFullStyled = styled.img<AvatarStyledProps>`
  max-width: ${props => props.size ? props.size : "100px"};
  max-height: ${props => props.size ? props.size : "100px"};
  object-fit: cover;
  border: #2196f3 solid 2px;
`

export const NavBarStyled = styled.div`
  font-weight: 400;
  font-size: 20px;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PasswordIconButtonStyled = styled(IconButton)`
  margin-left: 16px;
`
