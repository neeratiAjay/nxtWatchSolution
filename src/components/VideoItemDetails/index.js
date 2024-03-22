import {Component} from 'react'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import Loader from 'react-loader-spinner'

import {formatDistanceToNow} from 'date-fns'

import Cookies from 'js-cookie'

import DarkModeContext from '../../context/DarkModeContext'
import NavigationBar from '../NavigationBar'

import {
  MainContainerVideo,
  VideoItemContainer,
  VideoContainer,
  Title,
  FlexDiveContainer,
  FlexDiv,
  SmallText,
  LikeButton,
  LikeText,
  DislikeText,
  Line,
  ProfileContainer,
  ProfileImage,
  ChannelContainer,
  ChannelName,
  Subscribers,
  Description,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  RetryButton,
  LoaderDiv,
} from './styledComponents'

import Header from '../Header'

const initialStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {apiStatus: initialStatus.initial, videoDetails: []}

  componentDidMount() {
    this.getData()
  }

  formattedData = data => ({
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
    },
    description: data.description,
    id: data.id,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
    videoUrl: data.video_url,
  })

  getData = async () => {
    this.setState({apiStatus: initialStatus.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Berear ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()

      const updatedData = this.formattedData(data.video_details)

      this.setState({
        apiStatus: initialStatus.success,
        videoDetails: updatedData,
      })
    } else {
      this.setState({apiStatus: initialStatus.failure})
    }
  }

  refreshPage = () => {
    this.getData()
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
        const {darkMode} = value
        const imageUrl = darkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureContainer>
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
    const {videoDetails} = this.state

    const {description, publishedAt, title, videoUrl, viewCount} = videoDetails

    const dateDistance = formatDistanceToNow(new Date(publishedAt))

    const lettersArray = dateDistance.split('')

    let tempYear = null
    lettersArray.forEach(eachItem => {
      const num = parseInt(eachItem)

      if (isNaN(num) === false) {
        tempYear = num
      }
    })

    const name = videoDetails.channel?.name
    const profileImageUrl = videoDetails.channel?.profileImageUrl
    return (
      <DarkModeContext.Consumer>
        {value => {
          const {
            darkMode,
            saveItem,
            likeContent,
            dislikeContent,
            likedData,
            dislikedData,
            savedData,
          } = value

          const isLikedVideo = likedData.find(eachItem => {
            if (eachItem.id === videoDetails.id) {
              return true
            }
            return false
          })

          const savedVideoInData = savedData.find(eachItem => {
            if (eachItem.id === videoDetails.id) {
              return true
            }
            return false
          })

          const isDislikedVideo = dislikedData.find(eachItem => {
            if (eachItem.id === videoDetails.id) {
              return true
            }
            return false
          })

          const savedTextColor =
            savedVideoInData !== undefined ? '#2563eb' : ' #64748b'
          const likeTextColor =
            isLikedVideo !== undefined ? '#2563eb' : ' #64748b'

          const dislikeColor =
            isDislikedVideo !== undefined ? '#2563eb' : ' #64748b'

          const onSaveItem = () => {
            saveItem(videoDetails)
          }

          const onClickLike = () => {
            likeContent(videoDetails)
          }
          const onClickDislike = () => {
            dislikeContent(videoDetails)
          }

          return (
            <>
              <Header />
              <MainContainerVideo>
                <NavigationBar />
                <VideoItemContainer
                  darkMode={darkMode}
                  data-testid="videoItemDetails"
                >
                  <VideoContainer>
                    <ReactPlayer
                      url={videoUrl}
                      height="100%"
                      width="98%"
                      controls
                    />
                  </VideoContainer>
                  <Title darkMode={darkMode}>{title}</Title>
                  <FlexDiveContainer>
                    <FlexDiv>
                      <SmallText>{`${viewCount} views`}</SmallText>
                      <SmallText desc>{`${tempYear} years ago`}</SmallText>
                    </FlexDiv>
                    <FlexDiv>
                      <LikeButton type="button" onClick={onClickLike}>
                        <AiOutlineLike size="18" color={likeTextColor} />
                      </LikeButton>
                      <LikeText color={likeTextColor}>Like</LikeText>
                      <LikeButton type="button" onClick={onClickDislike}>
                        <AiOutlineDislike size="18" color={dislikeColor} />
                      </LikeButton>
                      <DislikeText color={dislikeColor}>Dislike</DislikeText>

                      <LikeButton type="button" onClick={onSaveItem}>
                        <MdPlaylistAdd size="18" color={savedTextColor} />
                      </LikeButton>
                      <LikeText color={savedTextColor}>Save</LikeText>
                    </FlexDiv>
                  </FlexDiveContainer>
                  <Line />
                  <ProfileContainer>
                    <ProfileImage src={profileImageUrl} alt="channel logo" />
                    <ChannelContainer>
                      <ChannelName darkMode={darkMode}>{name}</ChannelName>
                      <Subscribers>{`${viewCount} subscribers`}</Subscribers>
                    </ChannelContainer>
                  </ProfileContainer>
                  <Description darkMode={darkMode}>{description}</Description>
                </VideoItemContainer>
              </MainContainerVideo>
            </>
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
    return <>{this.showContent()}</>
  }
}

export default VideoItemDetails
