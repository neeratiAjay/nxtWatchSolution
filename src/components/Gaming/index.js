import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'

import {
  MainGamingContainer,
  GamingContainer,
  GamingTitleContainer,
  GamingLogoBg,
  GamingHeading,
  UlContainerGaming,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  RetryButton,
  LoaderDiv,
} from './styledComponents'

import NavigationBar from '../NavigationBar'
import Header from '../Header'
import GamingVideoItem from '../GamingVideoItemDetails'

import DarkModeContext from '../../context/DarkModeContext'

const initialStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingContent extends Component {
  state = {gamingData: [], apiStatus: initialStatus.initial}

  componentDidMount() {
    this.getTrendingData()
  }

  formattedData = data => ({
    id: data.id,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
  })

  getTrendingData = async () => {
    this.setState({apiStatus: initialStatus.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Berear ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(eachItem =>
        this.formattedData(eachItem),
      )

      this.setState({
        apiStatus: initialStatus.success,
        gamingData: updatedData,
      })
    } else {
      this.setState({apiStatus: initialStatus.failure})
    }
  }

  refreshPage = () => {
    this.getTrendingData()
  }

  renderLoadingView = () => (
    <LoaderDiv>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
      </div>
    </LoaderDiv>
  )

  renderFailureView = () => (
    <DarkModeContext.Consumer>
      {value => {
        const {darkMode, showNavItems} = value
        const imageUrl = darkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        const showContent = showNavItems ? 'none' : 'flex'

        return (
          <FailureContainer showContent={showContent}>
            <FailureImage src={imageUrl} alt="no videos" />
            <FailureHeading>Oops! Something Went Wrong</FailureHeading>
            <FailureText>
              We are having some trouble to complete your request. Please try
              again.
            </FailureText>
            <RetryButton type="button" onClick={this.refreshPage}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </DarkModeContext.Consumer>
  )

  renderSuccessView = () => {
    const {gamingData} = this.state
    return (
      <DarkModeContext.Consumer>
        {value => {
          const {darkMode, showNavItems} = value
          const showContent = showNavItems ? 'none' : 'flex'
          return (
            <GamingContainer
              darkMode={darkMode}
              data-testid="gaming"
              showContent={showContent}
            >
              <GamingTitleContainer darkMode={darkMode}>
                <GamingLogoBg darkMode={darkMode}>
                  <SiYoutubegaming color="#ff0b37" size="24" />
                </GamingLogoBg>
                <GamingHeading darkMode={darkMode}>Gaming</GamingHeading>
              </GamingTitleContainer>
              <UlContainerGaming>
                {gamingData.map(eachItem => (
                  <GamingVideoItem
                    itemDetails={eachItem}
                    key={eachItem.id}
                    darkMode={darkMode}
                  />
                ))}
              </UlContainerGaming>
            </GamingContainer>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }

  showContent = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case initialStatus.success:
        return this.renderSuccessView()
      case initialStatus.failure:
        return this.renderFailureView()
      case initialStatus.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <MainGamingContainer>
          <NavigationBar />
          {this.showContent()}
        </MainGamingContainer>
      </>
    )
  }
}
export default GamingContent
