import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderDiv = styled.div`
  height: 12vh;
  width: 100vw;
  display: ${props => props.showHeader};
`
export const HeaderContainer = styled.div`
  background-color: ${props => (props.darkMode ? '#231f20' : '#ffffff')};
  height: 12vh;
  width: 100%;
  margin-bottom: 0px;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Div = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const LinkImg = styled(Link)`
  text-decortion: none;
`
export const LogoImg = styled.img`
  height: 30px;
  width: 120px;
  margin-left: 20px;
`
export const Ul = styled.ul`
  width: 100%;
  padding: 0px;
  margin-left: 50px;
  list-style: none;
  display: flex;
  align-items: center;
  display: flex;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const Li = styled.li`
  text-decoration: none;
  margin-left: 10px;
`

export const CustomButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
`
export const LargeUl = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-left: 300px;
  }
`
export const CustomButtonLarge = styled.button`
  color: ${props => (props.darkMode ? '#ffffff' : '#3b82f6')};
  border: 1.5px solid ${props => (props.darkMode ? '#ffffff' : '#3b82f6')};
  height: 35px;
  width: 120px;
  text-align: center;
  font-family: 'Roboto';
  background-color: transparent;
  border-width: bold;
  font-weight: bold;
  font-size: 16px;
  border-radius: 4px;
`
export const ProfileImg = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 10px;
  margin-right: 10px;
`
export const PopupContainer1 = styled.div`
  width: 270px;
  background-color: #212121;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LogoutText = styled.p`
  font-family: 'roboto';
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
`
export const ButtonsDiv = styled.div`
  display: flex;
`
export const ConformButton = styled.button`
  font-family: 'roboto';
  text-align: center;
  height: 30px;
  width: 90px;
  border: 1px solid #64748b;
  background-color: #3b82f6;
  color: #ffffff;
  margin-bottom: 20px;
  margin-left: 10px;
`
export const CancelButton = styled.button`
font-family:"roboto";
text-align:center;
height:30px;
width:90px;
border:1px solid #64748b';
background-color:transparent;
color:'#1e293b';
margin-bottom:20px;
margin-left:10px;
`
