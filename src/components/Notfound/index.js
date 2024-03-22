import Header from '../Header'
import NavigationBar from '../NavigationBar'
import DarkModeContext from '../../context/DarkModeContext'

import {
  MainContainer,
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundText,
} from './styledComponents'

const NotFound = () => (
  <DarkModeContext.Consumer>
    {value => {
      const {darkMode} = value
      const imageUrl = darkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <MainContainer>
            <NavigationBar />
            <NotFoundContainer darkMode={darkMode}>
              <NotFoundImg src={imageUrl} alt="not found" />
              <NotFoundHeading darkMode={darkMode}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundText darkMode={darkMode}>
                We are sorry, the page you requested could not be found.
              </NotFoundText>
            </NotFoundContainer>
          </MainContainer>
        </>
      )
    }}
  </DarkModeContext.Consumer>
)
export default NotFound
