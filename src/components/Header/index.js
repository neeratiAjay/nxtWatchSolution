import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {RiSunLine} from 'react-icons/ri'
import {IoMenu} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'

import DarkModeContext from '../../context/DarkModeContext'

import {
  HeaderDiv,
  HeaderContainer,
  LogoImg,
  Ul,
  Li,
  CustomButton,
  CustomButtonLarge,
  LargeUl,
  ProfileImg,
  PopupContainer1,
  LogoutText,
  ButtonsDiv,
  ConformButton,
  CancelButton,
} from './styledComponents'

const Header = props => (
  <DarkModeContext.Consumer>
    {value => {
      const {darkMode, changeMode, changeToShowNavItems, showNavItems} = value

      const showHeader = showNavItems ? 'none' : 'flex'

      const isShowNavItems = () => {
        changeToShowNavItems()
      }

      const logo = darkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const onChangeTheme = () => {
        changeMode()
      }

      const onLogOut = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      return (
        <HeaderDiv showHeader={showHeader}>
          <HeaderContainer darkMode={darkMode} data-testid="header">
            <Link to="/">
              <LogoImg src={logo} alt="website logo" />
            </Link>
            <Ul>
              <Li>
                <CustomButton
                  type="button"
                  data-testid="theme"
                  onClick={onChangeTheme}
                  darkMode={darkMode}
                >
                  {darkMode ? <RiSunLine size="24" /> : <FaMoon size="24" />}
                </CustomButton>
              </Li>

              <Li>
                <CustomButton darkMode={darkMode} onClick={isShowNavItems}>
                  <IoMenu size="28" />
                </CustomButton>
              </Li>

              <Li>
                <Popup
                  modal
                  trigger={
                    <CustomButton darkMode={darkMode}>
                      <FiLogOut size="28px" />
                    </CustomButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <>
                      <div>
                        <p>
                          React is a popular and widely used programming
                          language
                        </p>
                      </div>
                      <button
                        type="button"
                        className="trigger-button"
                        onClick={() => close()}
                      >
                        Close
                      </button>
                    </>
                  )}
                </Popup>
              </Li>
            </Ul>
            <LargeUl>
              <Li>
                <CustomButton
                  type="button"
                  onClick={onChangeTheme}
                  darkMode={darkMode}
                >
                  {darkMode ? <RiSunLine size="24" /> : <FaMoon size="24" />}
                </CustomButton>
              </Li>
              <Link to="/login">
                <Li>
                  <CustomButton darkMode={darkMode}>
                    <ProfileImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  </CustomButton>
                </Li>
              </Link>
              <Li>
                <Popup
                  modal
                  trigger={
                    <CustomButtonLarge darkMode={darkMode}>
                      Logout
                    </CustomButtonLarge>
                  }
                  className="popup-content"
                >
                  <PopupContainer1>
                    <LogoutText>Are you sure,you want to logout?</LogoutText>
                    <ButtonsDiv>
                      <CancelButton type="button">Cancel</CancelButton>
                      <ConformButton
                        conform="true"
                        onClick={onLogOut}
                        type="button"
                      >
                        Conform
                      </ConformButton>
                    </ButtonsDiv>
                  </PopupContainer1>
                </Popup>
              </Li>
            </LargeUl>
          </HeaderContainer>
        </HeaderDiv>
      )
    }}
  </DarkModeContext.Consumer>
)
export default withRouter(Header)
