import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Li = styled.li`
  background-color: transparent;
  width: 250px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  @media screen and (min-width: 768px) {
  }
`
export const DivItem = styled.div``
export const ThumbnailImg = styled.img`
  width: 240px;
`
export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  margin-top: 10px;
  @media screen and(min-width:768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`
export const ProfileImg = styled.img`
  height: 50px;
  width: 50px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const Title = styled.p`
  color: ${props => (props.darkMode ? '#ffffff' : '#1e293b')};
  font-family: 'roboto';
  font-weight: 400;
  font-size: 14px;
  padding-right: 5px;
  padding-left: 5px;
  text-decoration: none;
`
export const UlContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding: 0px;
  align-self: center;
  margin-top: 10px;
  list-style-type: disc;
  width: 100%;
  justify-content: space-around;
  text-decoration: none;
`
export const ViewCountLi = styled.p`
  font-family: 'roboto';
  font-weight: 400;
  font-size: 12px;
  color: #475569;
  font-weight: bold;
  padding: 0px;
  margin: 0;
  text-decoration: none;
`
export const LinkItem = styled(Link)`
  text-decoration: none;
`
