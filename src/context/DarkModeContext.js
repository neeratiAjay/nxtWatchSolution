import React from 'react'

const DarkModeContext = React.createContext({
  darkMode: false,
  changeMode: () => {},
  activeOptionId: 'home',
  changeHome: () => {},
  changeTrending: () => {},
  changeGame: () => {},
  changeSaved: () => {},
  saveItem: () => {},
  likedData: [],
  dislikedData: [],
  savedData: [],
  likeContent: () => {},
  dislikeContent: () => {},
  showNavItems: false,
  changeToShowNavItems: () => {},
})
export default DarkModeContext
