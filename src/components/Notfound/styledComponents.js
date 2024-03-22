import styled from 'styled-components'

export const MainContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
`
export const NotFoundContainer = styled.div`
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  min-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const NotFoundImg = styled.img`
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`
export const NotFoundHeading = styled.h1`
  font-family: 'roboto';
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  color: ${props => (props.darkMode ? '#ffffff' : '#1e293b')};
`
export const NotFoundText = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: ${props => (props.darkMode ? ' #f9f9f9' : ' #616e7c')};
`
