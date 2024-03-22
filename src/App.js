import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import DarkModeContext from './context/DarkModeContext'

import Login from './components/Login'
import Home from './components/Home'
import TrendingContent from './components/Trending'
import GamingContent from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/Saved'
import NotFound from './components/Notfound'
import ProtectedRoute from './components/Protect'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    darkMode: false,
    activeOptionId: 'home',
    likedData: [],
    dislikedData: [],
    savedData: [],
    showNavItems: false,
  }

  changeNavItems = () => {
    this.setState(prev => ({
      showNavItems: !prev.showNavItems,
    }))
  }

  saveContent = newData => {
    const {savedData} = this.state
    const findData = savedData.find(eachItem => {
      if (eachItem.id === newData.id) {
        return true
      }
      return false
    })
    if (findData === undefined) {
      this.setState(prev => ({
        savedData: [...prev.savedData, newData],
      }))
    }
  }

  likeVideo = videoDetails => {
    const {likedData, dislikedData} = this.state

    const dataInDislike = dislikedData.find(eachItem => {
      if (eachItem.id === videoDetails.id) {
        return true
      }
      return false
    })

    const findIsLiked = likedData.find(eachItem => {
      if (eachItem.id === videoDetails.id) {
        return true
      }
      return false
    })

    if (findIsLiked === undefined) {
      if (dataInDislike !== undefined) {
        const filterDislikeData = dislikedData.filter(
          eachItem => eachItem.id !== videoDetails.id,
        )
        this.setState(prev => ({
          likedData: [prev.likedData, videoDetails],
          dislikedData: filterDislikeData,
        }))
      } else {
        this.setState(prev => ({
          likedData: [...prev.likedData, videoDetails],
        }))
      }
    }
  }

  dislikeVideo = videoDetails => {
    const {dislikedData, likedData} = this.state

    const dataInLikedData = likedData.find(eachItem => {
      if (eachItem.id === videoDetails.id) {
        return true
      }
      return false
    })

    const findIsDislike = dislikedData.find(eachItem => {
      if (eachItem.id === videoDetails.id) {
        return true
      }
      return false
    })

    if (findIsDislike === undefined) {
      if (dataInLikedData !== undefined) {
        const newLikedData = likedData.filter(
          eachItem => eachItem.id !== videoDetails.id,
        )

        this.setState(prev => ({
          dislikedData: [...prev.dislikedData, videoDetails],
          likedData: newLikedData,
        }))
      } else {
        this.setState(prev => ({
          dislikedData: [...prev.dislikedData, videoDetails],
        }))
      }
    }
  }

  changeTheme = () => {
    this.setState(prev => ({darkMode: !prev.darkMode}))
  }

  changeOptionHome = () => {
    this.setState({activeOptionId: 'home'})
  }

  changeOptionTrending = () => {
    this.setState({activeOptionId: 'trending'})
  }

  changeOptionGaming = () => {
    this.setState({activeOptionId: 'gaming'})
  }

  changeOptionSaved = () => {
    this.setState({activeOptionId: 'savedVideos'})
  }

  render() {
    const {
      darkMode,
      activeOptionId,
      savedData,
      likedData,
      dislikedData,
      showNavItems,
    } = this.state

    return (
      <DarkModeContext.Provider
        value={{
          darkMode,
          changeMode: this.changeTheme,
          activeOptionId,
          changeHome: this.changeOptionHome,
          changeTrending: this.changeOptionTrending,
          changeGame: this.changeOptionGaming,
          changeSaved: this.changeOptionSaved,
          savedData,
          saveItem: this.saveContent,
          likeContent: this.likeVideo,
          dislikeContent: this.dislikeVideo,
          likedData,
          dislikedData,
          showNavItems,
          changeToShowNavItems: this.changeNavItems,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/gaming" component={GamingContent} />
          <ProtectedRoute exact path="/trending" component={TrendingContent} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </DarkModeContext.Provider>
    )
  }
}

export default App
//  <ProtectedRoute exact path="/gaming" component={GamingContent} />
// <ProtectedRoute exact path="/trending" component={TrendingContent} />
