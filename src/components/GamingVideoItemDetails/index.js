import {
  LinkItem,
  GameMainContainer,
  ThumbnailImg,
  GamingTitle,
  GamingViewCount,
} from './styledComponents'

const GamingVideoItem = props => {
  const {itemDetails, darkMode} = props
  const {thumbnailUrl, title, viewCount, id} = itemDetails

  return (
    <LinkItem to={`/videos/${id}`}>
      <GameMainContainer darkMode={darkMode}>
        <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
        <GamingTitle darkMode={darkMode}>{title}</GamingTitle>
        <GamingViewCount
          darkMode={darkMode}
        >{`${viewCount} Watching Worldwide`}</GamingViewCount>
      </GameMainContainer>
    </LinkItem>
  )
}
export default GamingVideoItem
