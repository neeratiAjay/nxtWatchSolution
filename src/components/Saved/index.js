import {FaFire} from 'react-icons/fa'
import {
  MainContainer,
  SavedContainer,
  TitleContainer,
  LogoBg,
  SavedHeading,
  UlContainerSaved,
  NoDataContainer,
  NoSavedImage,
  NoDataHeading,
  NoDataText,
} from './styledComponents'

import NavigationBar from '../NavigationBar'
import Header from '../Header'
import TrendingVideoItem from '../TrendingVideoItems'

import DarkModeContext from '../../context/DarkModeContext'

const SavedVideos = () => {
  const successView = () => (
    <DarkModeContext.Consumer>
      {value => {
        const {darkMode, savedData, showNavItems} = value
        const showContent = showNavItems ? 'none' : 'flex'
        return (
          <SavedContainer
            darkMode={darkMode}
            data-testid="savedVideos"
            showContent={showContent}
          >
            <TitleContainer darkMode={darkMode}>
              <LogoBg darkMode={darkMode}>
                <FaFire color="#ff0b37" size="24" />
              </LogoBg>
              <SavedHeading darkMode={darkMode}>Saved Videos</SavedHeading>
            </TitleContainer>
            <UlContainerSaved>
              {savedData.map(eachItem => (
                <TrendingVideoItem
                  itemDetails={eachItem}
                  key={eachItem.id}
                  darkMode={darkMode}
                />
              ))}
            </UlContainerSaved>
          </SavedContainer>
        )
      }}
    </DarkModeContext.Consumer>
  )

  const noVideosView = () => (
    <DarkModeContext.Consumer>
      {value => {
        const {darkMode, showNavItems} = value
        const showContent = showNavItems ? 'none' : 'flex'
        return (
          <NoDataContainer darkMode={darkMode} showContent={showContent}>
            <NoSavedImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoDataHeading darkMode={darkMode}>
              No Saved Videos Found
            </NoDataHeading>
            <NoDataText darkMode={darkMode}>
              You can save your videos while watching them
            </NoDataText>
          </NoDataContainer>
        )
      }}
    </DarkModeContext.Consumer>
  )

  return (
    <DarkModeContext.Consumer>
      {value => {
        const {savedData} = value
        const noDataShow = savedData.length === 0

        return (
          <>
            <Header />
            <MainContainer>
              <NavigationBar />
              {noDataShow ? noVideosView() : successView()}
            </MainContainer>
          </>
        )
      }}
    </DarkModeContext.Consumer>
  )
}

export default SavedVideos
