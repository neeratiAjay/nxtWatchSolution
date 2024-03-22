import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaFire} from 'react-icons/fa'
import Loader from 'react-loader-spinner'

import {
  MainContainer,
  TrendingContainer,
  TitleContainer,
  LogoBg,
  TrendingHeading,
  UlContainerTrending,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  RetryButton,
  LoaderDiv,
} from './styledComponents'

import NavigationBar from '../NavigationBar'
import Header from '../Header'
import TrendingVideoItem from '../TrendingVideoItems'

import DarkModeContext from '../../context/DarkModeContext'

const initialStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingContent extends Component {
  state = {trendingData: [], apiStatus: initialStatus.initial}

  componentDidMount() {
    this.getTrendingData()
  }

  formattedData = data => ({
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
    },
    id: data.id,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
  })

  getTrendingData = async () => {
    this.setState({apiStatus: initialStatus.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        trendingData: updatedData,
      })
    } else {
      this.setState({apiStatus: initialStatus.failure})
    }
  }

  refreshPage = () => {
    this.getTrendingData()
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
    const {trendingData} = this.state
    return (
      <DarkModeContext.Consumer>
        {value => {
          const {darkMode, showNavItems} = value
          const showContent = showNavItems ? 'none' : 'flex'
          return (
            <TrendingContainer
              darkMode={darkMode}
              data-testid="trending"
              showContent={showContent}
            >
              <TitleContainer darkMode={darkMode}>
                <LogoBg darkMode={darkMode}>
                  <FaFire color="#ff0b37" size="24" />
                </LogoBg>
                <TrendingHeading darkMode={darkMode}>Trending</TrendingHeading>
              </TitleContainer>
              <UlContainerTrending>
                {trendingData.map(eachItem => (
                  <TrendingVideoItem
                    itemDetails={eachItem}
                    key={eachItem.id}
                    darkMode={darkMode}
                  />
                ))}
              </UlContainerTrending>
            </TrendingContainer>
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
        <MainContainer>
          <NavigationBar />
          {this.showContent()}
        </MainContainer>
      </>
    )
  }
}
export default TrendingContent
