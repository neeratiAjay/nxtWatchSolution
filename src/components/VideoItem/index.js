import {formatDistanceToNow} from 'date-fns'

import {
  Li,
  ThumbnailImg,
  FlexDiv,
  ProfileImg,
  Title,
  UlContainer,
  ViewCountLi,
  LinkItem,
  DivItem,
} from './styledComponents'

const VideoItem = props => {
  const {itemDetails, darkMode} = props
  const {channel, publishedAt, thumbnailUrl, title, viewCount, id} = itemDetails
  const {name, profileImageUrl} = channel
  const dateDistance = formatDistanceToNow(new Date(publishedAt))
  const lettersArray = dateDistance.split('')

  let tempYear = null
  lettersArray.forEach(eachItem => {
    const num = parseInt(eachItem)

    if (isNaN(num) === false) {
      tempYear = num
    }
  })

  return (
    <LinkItem to={`/videos/${id}`}>
      <Li>
        <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
        <DivItem>
          <FlexDiv>
            <ProfileImg src={profileImageUrl} alt="channel logo" />
            <Title darkMode={darkMode}>{title}</Title>
          </FlexDiv>
          <UlContainer>
            <ViewCountLi>{name}</ViewCountLi>
            <ViewCountLi>{`${viewCount} views`}</ViewCountLi>
            <ViewCountLi>{`${tempYear} years ago`}</ViewCountLi>
          </UlContainer>
        </DivItem>
      </Li>
    </LinkItem>
  )
}
export default VideoItem
