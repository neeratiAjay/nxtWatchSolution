import {AiFillHome} from 'react-icons/ai'
import {IoCloseSharp} from 'react-icons/io5'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  NavigationContainer,
  NavContainer,
  NavListItem,
  Content,
  LinkItem,
  DivItem,
  ContactVontainer,
  ContactHeading,
  IconsContainer,
  IconList,
  LogoImg,
  TextContent,
  SmallNavContainer,
  SmallNavCloseBtn,
} from './styledComponents'

import DarkModeContext from '../../context/DarkModeContext'

const NavigationBar = () => (
  <DarkModeContext.Consumer>
    {value => {
      const {
        darkMode,
        changeHome,
        changeGame,
        changeTrending,
        changeSaved,
        activeOptionId,
        showNavItems,
        changeToShowNavItems,
      } = value

      const activeTabBg = darkMode ? '#383838' : '#cbd5e1'
      const activeTextColor = darkMode ? '#f4f4f4' : '#000000'
      const nonActive = darkMode ? '#cccccc' : '#383838'
      const closeIconColor = darkMode ? '#ffffff' : '#000000'

      const closeMenuOptions = () => {
        changeToShowNavItems()
      }
      const changeHomeOption = () => {
        changeHome()
      }

      const changeTrendingOption = () => {
        changeTrending()
      }

      const changeGamingOption = () => {
        changeGame()
      }

      const changeSavedOption = () => {
        changeSaved()
      }

      return (
        <>
          <NavigationContainer darkMode={darkMode}>
            <DivItem>
              <NavContainer darkMode={darkMode}>
                <LinkItem
                  to="/"
                  color={
                    activeOptionId === 'home' ? activeTextColor : nonActive
                  }
                >
                  <NavListItem
                    onClick={changeHomeOption}
                    key="home"
                    bgColor={activeOptionId === 'home' ? activeTabBg : 'none'}
                  >
                    <AiFillHome
                      size="16"
                      color={activeOptionId === 'home' ? '#ff0000' : '#606060'}
                    />
                    <Content>Home</Content>
                  </NavListItem>
                </LinkItem>
                <LinkItem
                  to="/trending"
                  color={
                    activeOptionId === 'trending' ? activeTextColor : nonActive
                  }
                >
                  <NavListItem
                    onClick={changeTrendingOption}
                    key="trending"
                    darkMode={darkMode}
                    bgColor={
                      activeOptionId === 'trending' ? activeTabBg : 'none'
                    }
                  >
                    <FaFire
                      size="16"
                      color={
                        activeOptionId === 'trending' ? '#ff0000' : '#606060'
                      }
                    />

                    <Content isActive={activeOptionId === 'trending'}>
                      Trending
                    </Content>
                  </NavListItem>
                </LinkItem>
                <LinkItem
                  to="/gaming"
                  color={
                    activeOptionId === 'gaming' ? activeTextColor : nonActive
                  }
                >
                  <NavListItem
                    onClick={changeGamingOption}
                    key="gaming"
                    darkMode={darkMode}
                    bgColor={activeOptionId === 'gaming' ? activeTabBg : 'none'}
                  >
                    <SiYoutubegaming
                      size="16"
                      color={
                        activeOptionId === 'gaming' ? '#ff0000' : ' #606060'
                      }
                    />
                    <Content isActive={activeOptionId === 'gaming'}>
                      Gaming
                    </Content>
                  </NavListItem>
                </LinkItem>
                <LinkItem
                  to="/saved-videos"
                  color={
                    activeOptionId === 'savedVideos'
                      ? activeTextColor
                      : nonActive
                  }
                >
                  <NavListItem
                    onClick={changeSavedOption}
                    key="saved videos"
                    darkMode={darkMode}
                    bgColor={
                      activeOptionId === 'savedVideos' ? activeTabBg : 'none'
                    }
                  >
                    <MdPlaylistAdd
                      size="18"
                      color={
                        activeOptionId === 'savedVideos'
                          ? '#ff0000'
                          : ' #606060'
                      }
                    />
                    <Content isActive={activeOptionId === 'savedVideos'}>
                      Saved videos
                    </Content>
                  </NavListItem>
                </LinkItem>
              </NavContainer>

              <ContactVontainer>
                <ContactHeading darkMode={darkMode}>CONTACT US</ContactHeading>
                <IconsContainer>
                  <IconList>
                    <LogoImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                      alt="facebook logo"
                    />
                  </IconList>
                  <IconList>
                    <LogoImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                      alt="twitter logo"
                    />
                  </IconList>
                  <IconList>
                    <LogoImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                      alt="linked in logo"
                    />
                  </IconList>
                </IconsContainer>
                <TextContent darkMode={darkMode}>
                  Enjoy! Now to see your channels and recommendations!
                </TextContent>
              </ContactVontainer>
            </DivItem>
          </NavigationContainer>
          {showNavItems && (
            <SmallNavContainer darkMode={darkMode}>
              <SmallNavCloseBtn
                type="button"
                darkMode={darkMode}
                onClick={closeMenuOptions}
              >
                <IoCloseSharp size="20" color={closeIconColor} />
              </SmallNavCloseBtn>
              <NavContainer darkMode={darkMode}>
                <LinkItem
                  to="/"
                  color={
                    activeOptionId === 'home' ? activeTextColor : nonActive
                  }
                >
                  <NavListItem
                    onClick={changeHomeOption}
                    key="home"
                    bgColor={activeOptionId === 'home' ? activeTabBg : 'none'}
                  >
                    <AiFillHome
                      size="16"
                      color={activeOptionId === 'home' ? '#ff0000' : '#606060'}
                    />
                    <Content>Home</Content>
                  </NavListItem>
                </LinkItem>
                <LinkItem
                  to="/trending"
                  color={
                    activeOptionId === 'trending' ? activeTextColor : nonActive
                  }
                >
                  <NavListItem
                    onClick={changeTrendingOption}
                    key="trending"
                    darkMode={darkMode}
                    bgColor={
                      activeOptionId === 'trending' ? activeTabBg : 'none'
                    }
                  >
                    <FaFire
                      size="16"
                      color={
                        activeOptionId === 'trending' ? '#ff0000' : '#606060'
                      }
                    />

                    <Content isActive={activeOptionId === 'trending'}>
                      Trending
                    </Content>
                  </NavListItem>
                </LinkItem>
                <LinkItem
                  to="/gaming"
                  color={
                    activeOptionId === 'gaming' ? activeTextColor : nonActive
                  }
                >
                  <NavListItem
                    onClick={changeGamingOption}
                    key="gaming"
                    darkMode={darkMode}
                    bgColor={activeOptionId === 'gaming' ? activeTabBg : 'none'}
                  >
                    <SiYoutubegaming
                      size="16"
                      color={
                        activeOptionId === 'gaming' ? '#ff0000' : ' #606060'
                      }
                    />
                    <Content isActive={activeOptionId === 'gaming'}>
                      Gaming
                    </Content>
                  </NavListItem>
                </LinkItem>
                <LinkItem
                  to="/saved-videos"
                  color={
                    activeOptionId === 'savedVideos'
                      ? activeTextColor
                      : nonActive
                  }
                >
                  <NavListItem
                    onClick={changeSavedOption}
                    key="saved videos"
                    darkMode={darkMode}
                    bgColor={
                      activeOptionId === 'savedVideos' ? activeTabBg : 'none'
                    }
                  >
                    <MdPlaylistAdd
                      size="18"
                      color={
                        activeOptionId === 'savedVideos'
                          ? '#ff0000'
                          : ' #606060'
                      }
                    />
                    <Content isActive={activeOptionId === 'savedVideos'}>
                      Saved videos
                    </Content>
                  </NavListItem>
                </LinkItem>
              </NavContainer>
            </SmallNavContainer>
          )}
        </>
      )
    }}
  </DarkModeContext.Consumer>
)
export default NavigationBar
