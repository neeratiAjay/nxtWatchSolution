import styled from 'styled-components'

export const MainHomeContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
`
export const HomeContainer = styled.div`
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
  min-height: 100vh;
  display: ${props => props.showContent};
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 75vw;
    margin-top: 0px;
  }
`
export const DisplayFlexContainer = styled.div`
  display: flex;
  aign-items: center;
  margin-top: 20px;
  align-self: flex-start;
`
export const SearchInput = styled.input`
  outline: none;
  border: 1px solid #64748b;
  height: 25px;
  width: 260px;
  margin-left: 10px;
  background-color: transparent;
  color: ${props => (props.darkMode ? '#f1f5f9' : '#0000000')};
  font-size: 14px;
  font-weight: 400;
  font-family: 'roboto';
`
export const Label = styled.label``
export const SearchBtn = styled.button`
  background-color: transparent;
  text-align: center;
  height: 25px;
  width: 45px;
  border: 1px solid #64748b;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.darkMode ? '#ffffff' : '#0000000')};
  font-weight: bold;
`
export const Ul = styled.ul`
  width: 100%;
  display: flex;
  aling-items: center;
  background-color: transparent;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 90%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    width: 75vw;
  }
`
export const BannerFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
`
export const BannerLogo = styled.img`
  height: 30px;
  width: 130px;
  margin-top: 20px;
  align-self: flex-end;
`
export const BannerText = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
  width: 60%;
  color: #0f0f0f;
  padding-left: 10px;
`
export const BannerBtn = styled.button`
  background-color: transparent;
  border: 1.5px solid #0f0f0f;
  color: #0f0f0f;
  font-family: 'roboto';
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  height: 45px;
  width: 130px;
  margin-left: 10px;
  border-weight: bold;
  font-weight: bold;
`
export const BannerCloseBtn = styled.button`
background-color:transparent;
border:none;
outline:none;
cursorrrpointer;
margin-right:10px;
`

export const NoSearchViewContainer = styled.div`
  display: ${props => props.showContent};
  flex-direction: column;
  background-color: transparent;
  min-height: 60vh;
  justify-content: center;
  align-items: center;
`
export const NoSearchViewImage = styled.img`
  height: 150px;
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 350px;
    height: 250px;
  }
`
export const NoSearchHeading = styled.h1`
font-family:"roboto";
font-weight:bold;
font-size:20px;
text-align-center;
color :${props => (props.darkMode ? '#ffffff' : '#1e293b')} ;
`
export const NoSearchText = styled.p`
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
export const DivCotainer = styled.div``
