import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const GameMainContainer = styled.li`
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  width: 150px;
  margin: 10px;
  min-height: 200px;
  @media screen and (min-width: 768px) {
    margin: 20px;
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
export const GamingTitle = styled.p`
  font-family: 'roboto';
  font-weight: bold;
  font-size: 14px;
  padding-left: 10px;
  padding-top: 0;
  margin-top: 0;
  color: ${props => (props.darkMode ? '#ffffff' : '#1e293b')};
`
export const GamingViewCount = styled.p`
  font-family: 'roboto';
  font-weight: ${props => (props.darkMode ? 'bold' : '500')};
  font-size: 12px;
  padding-left: 10px;
  padding-top: 0;
  margin-top: 0;
  color: #475569;
`
