import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const TrendMainContainer = styled.li`
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`
export const ThumbnailImg = styled.img`
  margin: 10px;
  width: 95%;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    width: 180px;
  }
`
export const DivContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 10px;
  background-color: transparent;
`
export const ProfileImg = styled.img`
  width: 40px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ContentConatainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`
export const TrendingContent = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  padding: 5px;
  padding-bottom: 0;
  color: ${props => (props.darkMode ? '#f1f1f1' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const UlContainer = styled.ul`
  list-style: none;
  width: 100%;
  background-color: transparent;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  @media sreen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
export const SmallContent = styled.li`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  padding: 5px;
  padding-top: 0;
  margin: 0;
  color: ${props => (props.darkMode ? '#cccccc' : '#475569')};
  @media screen and (min-width: 768px) {
    display: ${props => (props.channel ? 'none' : null)};
    font-size: 13px;
    display: ${props => (props.large ? 'none' : null)};
  }
`
export const LargeSmallText = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    color: ${props => (props.darkMode ? '#cccccc' : '#475569')};
    font-family: 'Roboto';
    padding: 5px;
    padding-top: 0;
    margin: 0;
    width: 100%;
    font-size: 14px;
    font-weight: bold;
  }
`
