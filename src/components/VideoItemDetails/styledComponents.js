import styled from 'styled-components'

export const MainContainerVideo = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const VideoItemContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    width: 76%;
    padding-left: 20px;
  }
`
export const VideoContainer = styled.div`
  background-color: transparent;
  height: 40vh;
  width: 100%;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    height: 60vh;
  }
`
export const Title = styled.p`
  color: ${props => (props.darkMode ? '#ffffff' : '#1e293b')};
  font-family: 'roboto';
  font-weight: 500;
  font-size: 16px;
  padding: 10px;
  padding-bottom: 0;
  @media screen and (min-width: 768px) {
    padding-left: 20px;
  }
`
export const FlexDiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and(min-width:768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const LikeButton = styled.button`
  background-color: transparent;
  border: none;
  text-align: center;
`

export const LikeText = styled.p`
  font-family: 'roboto';
  font-weight: bold;
  font-size: 14px;
  color: ${props => props.color};
  padding-right: 10px;
`
export const DislikeText = styled(LikeText)`
  color: ${props => props.color};
`
export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`
export const SmallText = styled.p`
  font-family: 'roboto';
  font-weight: bold;
  font-size: 12px;
  color: #94a3b8;
  padding-left: 10px;
  padding-right: 10px;
  list-style: ${props => (props.desc ? 'desc' : 'none')};
`
export const Line = styled.hr`
  color: #64748b;
  font-weight: bold;
  width: 100%;
`
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`
export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
`
export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const ChannelName = styled.p`
  font-family: 'roboto';
  font-weight: 500;
  font-size: 14px;
  padding-bottom: 4px;
  margin-bottom: 0;
  color: ${props => (props.darkMode ? '#ffffff' : '#1e293b')};
`
export const Subscribers = styled(SmallText)`
  font-weight: 500;
  padding: 0;
  margin: 0;
`
export const Description = styled.p`
  font-family: 'roboto';
  font-weight: 500;
  font-size: 13px;
  color: ${props => (props.darkMode ? ' #ffffff' : '#94a3b8')};
  padding-left: 10px;
  padding-right: 10px;
`

export const FailureContainer = styled.div`
  min-height: 80vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FailureImage = styled.img`
  height: 200px;
  width: 200px;
  @media screen and (min-width: 768px) {
    height: 300px;
    width: 350px;
  }
`
export const FailureHeading = styled.h1`
font-family:"roboto";
font-weight:bold;
font-size:20px;
text-align-center;
color :${props => (props.darkMode ? '#ffffff' : '#1e293b')} ;
`
export const FailureText = styled.p`
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
export const LoaderDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
`
