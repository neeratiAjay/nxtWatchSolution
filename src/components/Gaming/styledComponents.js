import styled from 'styled-components'

export const MainGamingContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const GamingContainer = styled.div`
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  display: ${props => props.showContent};
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 75vw;
  }
`
export const GamingTitleContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.darkMode ? '#181818' : '#ebebeb')};
  border: none;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  margin-top: 10px;
  width: 98%;
  height: 80px;
  padding-bottom: 10px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right-height: 0px;
  border-right-style: solid;
  border-right-color: #7e858e;
`
export const GamingLogoBg = styled.div`
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#cbd5e1')};
  height: 45px;
  width: 45px;
  border: none;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const GamingHeading = styled.h1`
font-family"roboto";
font-weight:bold;
font-size:24px;
padding-left:20px;
color:${props => (props.darkMode ? '#ffffff' : '#1e293b')};
`
export const GamingDivUl = styled.div`
background-color:background-color:${props =>
  props.darkMode ? '#0f0f0f' : '#f9f9f9'};
`
export const UlContainerGaming = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0;
  margin-left: 20px;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    margin-left: 45px;
  }
`
export const FailureContainer = styled.div`
  min-height: 80vh;
  background-color: transparent;
  display: ${props => props.showContent};
  flex-direction: column;
  align-items: center;
`

export const FailureImage = styled.img`
  height: 200px;
  width: 200px;
  @media screen and (min-width: 768px) {
    height: 300px;
    width: 350px;
  }
`
export const FailureHeading = styled.h1`
font-family:"roboto";
font-weight:bold;
font-size:20px;
text-align-center;
color :${props => (props.darkMode ? '#ffffff' : '#1e293b')} ;
`
export const FailureText = styled.p`
font-family:"roboto";
font-weight:bold;
font-size:18px;
text-align-center;
color :#64748b ;
padding-right:10px;
padding-left:10px;
`
export const RetryButton = styled.button`
  height: 30px;
  width: 90px;
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'roboto';
  font-weight: 500;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
  border-radius: 8px;
`
export const LoaderDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
`
