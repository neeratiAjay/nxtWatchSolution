import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoIosClose} from 'react-icons/io'
import Loader from 'react-loader-spinner'

import {IoSearchOutline} from 'react-icons/io5'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import VideoItem from '../VideoItem'
import DarkModeContext from '../../context/DarkModeContext'

import {
  MainHomeContainer,
  HomeContainer,
  SearchInput,
  Label,
  SearchBtn,
  DisplayFlexContainer,
  Ul,
  BannerContainer,
  BannerFlexContainer,
  BannerLogo,
  BannerCloseBtn,
  BannerText,
  BannerBtn,
  NoSearchViewContainer,
  NoSearchViewImage,
  NoSearchHeading,
  NoSearchText,
  RetryButton,
} from './styledComponents'

const initialStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    searchInput: '',
    apiStatus: initialStatus.initial,
    videosData: [],
    showBanner: true,
  }

  componentDidMount() {
    this.getVideoData()
  }

  refreshData = () => {
    this.getVideoData()
    this.setState({searchInput: ''})
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

  getVideoData = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: initialStatus.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Berear ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)

    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.videos.map(eachItem =>
        this.formattedData(eachItem),
      )
      this.setState({apiStatus: initialStatus.success, videosData: updatedData})
    } else {
      this.setState({apiStatus: initialStatus.failure})
    }
  }

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    this.getVideoData()
  }

  renderSuccessView = () => {
    const {videosData} = this.state
    const noSearchIsShow = videosData.length === 0
    return (
      <DarkModeContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <>
              {noSearchIsShow && this.noSearchView()}
              <Ul>
                {videosData.map(eachItem => (
                  <VideoItem
                    key={eachItem.id}
                    itemDetails={eachItem}
                    darkMode={darkMode}
                  />
                ))}
              </Ul>
            </>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }

  renderFailureView = () => (
    <DarkModeContext.Consumer>
      {value => {
        const {darkMode, showNavItems} = value
        const imgUrl = darkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        const showContent = showNavItems ? 'none' : 'flex'
        return (
          <NoSearchViewContainer showContent={showContent}>
            <NoSearchViewImage src={imgUrl} alt="no videos" />
            <NoSearchHeading darkMode={darkMode}>
              Oops! Something Went Wrong
            </NoSearchHeading>
            <NoSearchText>
              We are having some trouble to compete your request.Please try
              again.
            </NoSearchText>
            <RetryButton type="button" onClick={this.refreshData}>
              Retry
            </RetryButton>
          </NoSearchViewContainer>
        )
      }}
    </DarkModeContext.Consumer>
  )

  noSearchView = () => (
    <DarkModeContext.Consumer>
      {value => {
        const {darkMode, showNavItems} = value
        const showContent = showNavItems ? 'none' : 'flex'
        return (
          <NoSearchViewContainer showContent={showContent}>
            <NoSearchViewImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoSearchHeading darkMode={darkMode}>
              No Search results found
            </NoSearchHeading>
            <NoSearchText>
              Try different key words or remove search filter
            </NoSearchText>
            <RetryButton type="button" onClick={this.refreshData}>
              Retry
            </RetryButton>
          </NoSearchViewContainer>
        )
      }}
    </DarkModeContext.Consumer>
  )

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
    </div>
  )

  showContent = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case initialStatus.success:
        return this.renderSuccessView()
      case initialStatus.inProgress:
        return this.renderLoadingView()
      case initialStatus.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {searchInput, showBanner} = this.state

    return (
      <DarkModeContext.Consumer>
        {value => {
          const {darkMode, showNavItems} = value
          const logo = darkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const showContent = showNavItems ? 'none' : 'flex'
          return (
            <>
              <Header />
              <MainHomeContainer>
                <NavigationBar />
                <HomeContainer
                  darkMode={darkMode}
                  data-testid="home"
                  showContent={showContent}
                >
                  {showBanner && (
                    <BannerContainer data-testid="banner">
                      <BannerFlexContainer>
                        <BannerLogo src={logo} alt="nxt watch logo" />
                        <BannerCloseBtn
                          data-testid="close"
                          type="button"
                          onClick={this.closeBanner}
                        >
                          <IoIosClose size="30" />
                        </BannerCloseBtn>
                      </BannerFlexContainer>
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerText>
                      <BannerBtn>GET IT NOW</BannerBtn>
                    </BannerContainer>
                  )}
                  <DisplayFlexContainer>
                    <SearchInput
                      darkMode={darkMode}
                      type="search"
                      placeholder="Search"
                      id="homeSearch"
                      onChange={this.changeSearchInput}
                      value={searchInput}
                    />
                    <Label htmlFor="homeSearch">
                      <SearchBtn
                        type="button"
                        data-testid="searchButton"
                        onClick={this.onClickSearch}
                        darkMode={darkMode}
                      >
                        {' '}
                        <IoSearchOutline size="18" />{' '}
                      </SearchBtn>
                    </Label>
                  </DisplayFlexContainer>

                  {this.showContent()}
                </HomeContainer>
              </MainHomeContainer>
            </>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }
}
export default Home
