import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const NavigationContainer = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    min-height: 100vh;
    background-color: ${props => (props.darkMode ? '#231f20' : '#f9f9f9')};
    display: flex;
    width: 23vw;
  }
`
export const NavContainer = styled.ul`
  align-self: center;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 30px;
  padding-left: 30px;
  @media screen and (min-width: 768px) {
    background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
    margin: 0;
    padding-left: 10px;
  }
`
export const NavListItem = styled.li`
  display: flex;
  width: 100%;
  margin: 0px;
  padding-left: 10px;
  align-items: center;
  background-color: ${props => props.bgColor};
`
export const LinkItem = styled(Link)`
  text-decoration: none;
  font-family: 'roboto';
  color: ${props => props.color};
`
export const Content = styled.p`
  font-family: 'roboto';
  font-weight: bold;
  font-size: 15px;
  padding-left: 15px;
`
export const DivItem = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
  width: 23%;
  @media screen and (min-width: 768px) {
    position: fixed;
  }
`
export const ContactVontainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
export const ContactHeading = styled.p`
  font-family: 'roboto';
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px;
  padding-left: 10px;
  color: ${props => (props.darkMode ? '#ffffff' : ' #1e293b')};
`
export const IconsContainer = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    list-style: none;
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 100%;
    padding: 0;
    margin-top: 0;
    margin-left: 20px;
  }
`
export const IconList = styled.li``

export const LogoImg = styled.img`
  height: 35px;
  width: 35px;
  margin-left: 10px;
`
export const TextContent = styled.p`
  font-family: 'roboto';
  font-weight: 500;
  font-size: 16px;
  width: 75%;
  padding-left: 20px;
  color: ${props => (props.darkMode ? '#ffffff' : ' #1e293b')};
`
/** ********  small NAv Container ****** */
export const SmallNavContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkMode ? '#231f20' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const SmallNavCloseBtn = styled.button`
  background-color: transparent;
  border: none;
  text-align: center;
  cursor: pointer;
  outline: none;
  align-self: flex-end;
  margin: 20px;
`
