import React, { Component } from 'react';
import './App.css';
import queryString from 'query-string';
import { recomposeColor } from '@material-ui/core';

let accessToken = queryString.parse(window.location.search).access_token

let accentColor = '#818181';
let frameBackgroundColor = '#C4C4C4';
let borderCurve = '2vw';
let itemSeparatorWidth = '.2vw';
let itemSeparator = ['solid', itemSeparatorWidth, accentColor].join(' ');
let sectionSeparatorWidth = '.35vw';
let sectionSeparator = ['solid', sectionSeparatorWidth, accentColor].join(' ');
let outerSpacing = '3vw';
let innerSpacing = '2vw';

let StyleSection = {
  margin: '0',
  padding: outerSpacing.concat(' 0'),
  borderBottom: sectionSeparator,
  borderColor: accentColor
}
let StyleHeading = {
  margin: '0 auto 1vw auto',
  textAlign: 'center'
}
let StyleFrame = {
  backgroundColor: frameBackgroundColor,
  borderRadius: borderCurve,
  padding: innerSpacing
}
let StyleList = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'space-between',
  marginTop: '.5vw',
  paddingBottom: '.5vw'
}
let StyleButton = {
  backgroundColor: frameBackgroundColor,
  border: 'none',
  width: '2vw',
  height: '2vw',
  fill: accentColor,
  stroke: accentColor,
  cursor: 'pointer'
}
let StyleMediaButton = {...StyleButton,
  width: '2vw',
  height: '2vw',
  fill: accentColor,
  stroke: accentColor,
  padding: '.5vw'
}
let StyleDropDownButton = {...StyleButton,
  width: '1.5vw',
  height: '1.5vw'
}

let populateList = (data) => {
  let items = []
  for (let i=0 ; i < data.length ; i++) {
    items.push(
    <DataItem 
      key={i}
      index={i+1}
      title={data[i].name}
    />
    )
  }
  return items
}

let toggleRepeat = (parent) => {    
  let newMode = ''
  switch(parent.state.repeat) {
    case 'off':
      newMode = 'context'
      break;
    case 'context':
      newMode = 'track'
      break;
    case 'track':
      newMode = 'off'
      break;
  }
  if (newMode !== '') {
    parent.setState({repeat: newMode})
    fetch("https://api.spotify.com/v1/me/player/repeat?state=" + newMode, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ` + accessToken
      }
    })
  }
  else {
    alert('Something went wrong')
  }
}

let toggleShuffle = (parent) => {
  fetch("https://api.spotify.com/v1/me/player/shuffle?state=" + !parent.state.shuffle, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ` + accessToken
    }
  })
  parent.setState({shuffle: !parent.state.shuffle})
}

let startPlayback = (parent) => {
  fetch("https://api.spotify.com/v1/me/player/play", {
    method: 'PUT',
    headers: {
     'Content-Type': 'application/json',
     'Authorization': `Bearer ` + accessToken
    }
  })
  .then((response) => {
    if (response.status == '204') {
      console.log('Playback resumed successfully')
      parent !== undefined && parent.setState({playing: true})
    }
    else if (response.status == '404') {
      console.log('Device not found')
      alert('There\'s no available devices for playback')
    }
    else if (response.status == '403') {
      console.log('No premium access')
      alert('This user doesn\'t have premium access or there is already something playing')
    }
    else {
      console.log('Unexpected error occured')
      alert('There was an unexpected error :(')
    }
  })
}

let stopPlayback = (parent) => {
  fetch("https://api.spotify.com/v1/me/player/pause", {
    method: 'PUT',
    headers: {
     'Content-Type': 'application/json',
     'Authorization': `Bearer ` + accessToken
  }})
    .then((response) => {
      if (response.status == '204') {
        console.log('Playback paused successfully')
        parent !== undefined && parent.setState({playing: false})
      }
      else if (response.status == '404') {
        console.log('Device not found')
        alert('There\'s currently no active playback')
      }
      else if (response.status == '403') {
        console.log('No premium access')
        alert('This accountdoesn\'t have premium access or there isn\'t anything playing')
      }
      else {
        console.log('Unexpected error occured')
      }
    })
}

let nextTrack = () => {
  fetch("https://api.spotify.com/v1/me/player/next", {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
     'Authorization': `Bearer ` + accessToken
  }})
}

let previousTrack = () => {
  fetch("https://api.spotify.com/v1/me/player/previous", {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
     'Authorization': `Bearer ` + accessToken
  }})
}

function fetchPlayerState(onSuccess, onFail) {
  return fetch('https://api.spotify.com/v1/me/player', {
    headers: {'Authorization': 'Bearer ' + accessToken}
  })
  .then((response) => {
    if (response.status == '200') {
      return response.json()
    }
    else {
      return null
    }
  })
}

function fetchUserProfile(onSuccess, onFail) {
  return fetch('https://api.spotify.com/v1/me', {
    headers: {'Authorization': 'Bearer ' + accessToken}
  })
  .then((response) => {
    if (response.status == '200') {
      return response.json()
    }
    else {
      return null
    }
  })
}

function fetchCurrentlyPlaying(onSuccess, onFail) {
  return fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {'Authorization': 'Bearer ' + accessToken}
  })
  .then((response) => {
    if (response.status == '200') {
      return response.json()
    }
    else {
      return null
    }
  })
}

function fetchRecentlyPlayed(onSuccess, onFail) {
  return fetch('https://api.spotify.com/v1/me/player/recently-played', {
    headers: {'Authorization': 'Bearer ' + accessToken}
  })
  .then((response) => {
    if (response.status == '200') {
      return response.json()
    }
    else {
      return null
    }
  })
}

function fetchTopArtists(onSuccess, onFail) {
  return fetch('https://api.spotify.com/v1/me/top/artists', {
    headers: {'Authorization': 'Bearer ' + accessToken}
  })
  .then((response) => {
    if (response.status == '200') {
      return response.json()
    }
    else {
      return null
    }
  })
}

function fetchTopTracks(onSuccess, onFail) {
  return fetch('https://api.spotify.com/v1/me/top/tracks', {
    headers: {'Authorization': 'Bearer ' + accessToken}
  })
  .then((response) => {
    if (response.status == '200') {
      return response.json()
    }
    else {
      return null
    }
  })
}

class LoadingCircle extends Component {
  render() {
    return (
      <svg className='Spinning'
      style={{
        width: '3vw',
        height: '3vw',
        animation: 'Spin 1.25s infinite linear'
      }}
      version="1.1" viewBox="0 0 5.2917 5.2917" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(1.3891e-5)" fill={accentColor}>
        <path d="m1.3229 2.6458a0.66146 0.66146 0 0 1-0.66032 0.66146 0.66146 0.66146 0 0 1-0.66259-0.65919 0.66146 0.66146 0 0 1 0.65805-0.66372 0.66146 0.66146 0 0 1 0.66485 0.65691l-0.66144 0.00454z" opacity=".6"/>
        <path d="m3.3073 0.66146a0.66146 0.66146 0 0 1-0.66032 0.66146 0.66146 0.66146 0 0 1-0.66259-0.65919 0.66146 0.66146 0 0 1 0.65805-0.66372 0.66146 0.66146 0 0 1 0.66485 0.65691l-0.66144 0.004537z" opacity=".8"/>
        <path d="m1.9182 1.2568a0.66146 0.66146 0 0 1-0.66032 0.66146 0.66146 0.66146 0 0 1-0.66259-0.65919 0.66146 0.66146 0 0 1 0.65805-0.66372 0.66146 0.66146 0 0 1 0.66485 0.65691l-0.66144 0.00454z" opacity=".7"/>
        <g>
          <path d="m1.9844 3.9688a0.66146 0.66146 0 0 1-0.66032 0.66146 0.66146 0.66146 0 0 1-0.66259-0.65919 0.66146 0.66146 0 0 1 0.65805-0.66372 0.66146 0.66146 0 0 1 0.66485 0.65691l-0.66144 0.00454z" opacity=".5"/>
          <path d="m3.3073 4.6302a0.66146 0.66146 0 0 1-0.66032 0.66146 0.66146 0.66146 0 0 1-0.66259-0.65919 0.66146 0.66146 0 0 1 0.65805-0.66372 0.66146 0.66146 0 0 1 0.66485 0.65691l-0.66144 0.00454z" opacity=".4"/>
          <path d="m4.6302 3.9159a0.66146 0.66146 0 0 1-0.66032 0.66146 0.66146 0.66146 0 0 1-0.66259-0.65919 0.66146 0.66146 0 0 1 0.65805-0.66372 0.66146 0.66146 0 0 1 0.66485 0.65691l-0.66144 0.00454z" opacity=".2"/>
          <path d="m5.2917 2.6458a0.66146 0.66146 0 0 1-0.66032 0.66146 0.66146 0.66146 0 0 1-0.66259-0.65919 0.66146 0.66146 0 0 1 0.65805-0.66372 0.66146 0.66146 0 0 1 0.66485 0.65691l-0.66144 0.00454z" opacity=".1"/>
          <path d="m4.6302 1.2568a0.66146 0.66146 0 0 1-0.66032 0.66146 0.66146 0.66146 0 0 1-0.66259-0.65919 0.66146 0.66146 0 0 1 0.65805-0.66372 0.66146 0.66146 0 0 1 0.66485 0.65691l-0.66144 0.00454z" opacity=".7"/>
        </g>
      </g>
      </svg>
    )
  }
}

class LoadingPlaceholder extends Component {
  render() {
    return (
      <div style={{
        textAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <p style={{marginRight: '1vw'}}>Loading</p>
        <LoadingCircle/>
      </div>
    )
  }
}

class LoginScreen extends Component {
  render() {
    return (
      <div style={{
        height: '100vh',
        width: '100%',
        backgroundColor: 'grey',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
      }}>
        <div style={{
          border: 'solid white',
          borderRadius: '50%',
          width: '50vh',
          height: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1 style={{textAlign:'center', fontSize:'150%'}}>First,</h1>
          <h2>please log in</h2>

          <button onClick={() => {window.location='http://localhost:8888/login'}}
          style={{
            color: 'inherit',
            textDecoration: 'none',
            textAlign: 'center',
            backgroundColor: '#1db954',
            border: 'none',
            borderRadius: '1vw',
            padding: '1vw',
            marginTop: '5%',
            fontWeight: 'bold',
          }}
          >
            Log in to Spotify
          </button>
        </div>
      </div>
    )
  }
}

class AlbumFrame extends Component {
  render() {
    return (
      <figure style={{
        textAlign: 'center',
        width: '20%'
      }}>
        {this.props.pic ?
          <img style={{
            width: '100%',
            borderRadius: '.5vw'
          }} 
          src={this.props.pic}
          />
        :
          <div style={{
            width: '10vw',
            height: '10vw',
            backgroundColor: accentColor,
            borderRadius: borderCurve
          }}></div>
        }
        
        <figcaption style={{
          fontWeight: 'bold'
        }}>{this.props.name}</figcaption>
      </figure>
    )
  }
}

class RepeatButton extends Component {
  render() {
    return (
      <svg 
        onClick={() => {
          toggleRepeat(this.props.parent)
        }}
        style={{...StyleMediaButton}}
        version="1.1" viewBox="0 0 342.24 247.83" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(-35.585 -19.636)">
          <path d="m53.446 161.92c0-102.98-17.846-92.604 248.18-92.604" fill="none" strokeWidth="35"/>
          <path d="m359.92 72.496-61.247 35.361v-70.722z" fill="#818181" strokeLinecap="round" strokeLinejoin="round" strokeWidth="35"/>
          <path d="m359.96 125.18c0 102.98 17.846 92.604-248.18 92.604" fill="none" strokeWidth="35"/>
          <path transform="scale(-1)" d="m-53.486-214.61-61.247 35.361v-70.722z" fill="#818181" strokeLinecap="round" strokeLinejoin="round" strokeWidth="35"/>
        </g>
      </svg>
    )
  }
}

class BackButton extends Component {
  render() {
    return (
      <svg 
        onClick={() => {
          previousTrack()
        }}
        style={{...StyleMediaButton}}
        version="1.1" viewBox="0 0 391.01 277.27" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(-1.3032 -9.2179)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="60">
          <path d="m217.66 147.85 144.65-108.64v217.28z"/>
          <path d="m31.301 147.85 144.65-108.64v217.28z"/>
        </g>
      </svg>
    )
  }
}

class PlayButton extends Component {
  render() {
    return ( 
      <svg 
        onClick={() => {
          startPlayback(this.props.parent)
        }}
        style={{...StyleMediaButton}}
        version="1.1" viewBox="0 0 197.26 285.7" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(-5 -5)">
          <path transform="matrix(.56563 0 0 .73579 17.163 20.82)" d="m280.74 172.65-255.74 147.65v-295.3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="93.005"/>
        </g>
      </svg>
    )
  }
}

class PauseButton extends Component {
  render() {
    return (
      <svg 
        onClick={() => {
          stopPlayback(this.props.parent)
        }}
        style={{...StyleMediaButton}}
        version="1.1" viewBox="0 0 197.57 285.75" xmlns="http://www.w3.org/2000/svg">
          <rect x="17.5" y="17.5" width="52.77" height="250.75" ry="22.492" strokeLinecap="round" strokeLinejoin="round" strokeWidth="35"/>
          <rect x="127.3" y="17.5" width="52.77" height="250.75" ry="22.492" strokeLinecap="round" strokeLinejoin="round" strokeWidth="35"/>
      </svg>
    )
  }
}

class SkipForwardButton extends Component {
  render() {
    return (
      <svg 
        onClick={() => {
          nextTrack()
        }}
        style={{...StyleMediaButton}} 
        version="1.1" viewBox="0 0 383.61 285.7" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(-5 -5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="93.005">
            <path transform="matrix(.56563 0 0 .73579 17.163 20.82)" d="m280.74 172.65-255.74 147.65v-295.3z"/>
            <path transform="matrix(.56563 0 0 .73579 203.52 20.82)" d="m280.74 172.65-255.74 147.65v-295.3z"/>
          </g>
      </svg>
    )
  }
}

class ShuffleButton extends Component {
  render() {
    return (
      <svg 
        onClick={() => {
          toggleShuffle(this.props.parent)
        }}
        style={{...StyleMediaButton}} 
        version="1.1" viewBox="0 0 418.72 289.09" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(-.72501 -2.8133)">
          <path d="m330.89 236.77c-214.43-0.80945-148.03-184.26-329.33-175.53" fill="none" strokeWidth="35"/>
          <path transform="matrix(1.8522 0 0 -2.1858 .81152 -.033965)" d="m217.32-108.15-30.966 17.878v-35.757z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="17.395"/>
          <path d="m330.89 60.491c-214.43 0.80945-148.03 184.26-329.33 175.53" fill="none" strokeWidth="35"/>
          <path transform="matrix(1.8522 0 0 2.1858 .81152 -.033965)" d="m217.32 27.878-30.966 17.878v-35.757z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="17.395"/>
        </g>
      </svg>
    )
  }
}

class MediaControls extends Component {
  constructor() {
    super();
    this.state = {
    } 
  }

  componentDidMount() {   
    fetchPlayerState()
    .then((data) => {
      if (data !== null && data !== undefined) {
        this.setState({
          playing: data.is_playing,
          shuffle: data.shuffle_state,
          repeat: data.repeat_state
        })
      }
    })
  }
  
  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <ShuffleButton parent={this}/>
        <BackButton/>
        {this.state.playing ? <PauseButton parent={this}/> : <PlayButton parent={this}/>}
        <SkipForwardButton/>
        <RepeatButton parent={this}/>
      </div>
    )
  }
}

class ProgressBar extends Component {
  render() {
    return (
      <div style={{
        backgroundColor: accentColor,
        borderRadius: '2vw',
        height: '.4em',
        margin: '.2em auto auto auto',
        padding: '.2em',
      }}>
      </div>
    )
  }
}

class CurrentlyPlaying extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
      }}>
        <h2 style={{...StyleHeading}}>
          Currently Playing
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <AlbumFrame
            name={this.props.albumName}
            pic={this.props.albumPic}
          />
          <div style={{
            width:'75%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around'
          }}>
            <div style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'row'
            }}>
              {this.props.trackName ?
                <p style={{
                  flex: '1 0 50%'
                }}>{this.props.trackName}</p>
                :
                <b style={{
                  flex: '0 0 100%'
                }}>There doesn't seem to be anything playing<br/>(You may be in a private session)</b>
              }
              <p style={{
                  flex: '1 0 50%'
                }}>{this.props.artistName}</p>
            </div>
            <div style={{
              width: '80%',
              margin: 'auto'
            }}>
              <MediaControls/> 
            </div>
          </div>
        </div>
        <div style={{textAlign: 'center'}}>
          <p>{this.props.currentProgress===undefined ? '--' : Math.floor(this.props.currentProgress/1000)} / {this.props.totalDuration===undefined ? '--' : Math.floor(this.props.totalDuration/1000)}</p>
          <ProgressBar/>
        </div>
      </div>
    )
  }
}

class DataItem extends Component {
  constructor() {
    super();
    this.state = {
      shown: false
    }
  }
  render() {
    return (
      <div style={{
        marginTop: '1.5vw',
        paddingBottom: '1.5vw',
        borderBottom: itemSeparator
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{
              backgroundColor: accentColor,
              border: ['solid', accentColor].join(' '),
              borderRadius: '50%',
              width: '1.5vw',
              height: '1.5vw',
              marginRight: '1em'
            }}></div>
            <h3>{this.props.title}</h3>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <i style={{marginRight:'1em'}}>{this.props.index || 'i'}</i>
            <svg 
              onClick={() => {
                this.state.shown ? this.setState({rotation: '0deg', shown: false}) : this.setState({rotation: '90deg', shown: true})
              }}
              style={{...StyleDropDownButton,
                transition: 'all .1s ease-in-out',
                transform: 'rotate(' + this.state.rotation + ')'
              }}
              version="1.1" viewBox="0 0 197.26 285.7" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(-5 -5)">
                <path transform="matrix(.56563 0 0 .73579 17.163 20.82)" d="m280.74 172.65-255.74 147.65v-295.3z" fill="#818181" stroke="#818181" strokeLinecap="round" strokeLinejoin="round" strokeWidth="93.005"/>
              </g>
            </svg>
          </div>
        </div>
        <div className="toggle"
        style={{
          height: 'auto',
          maxHeight: this.state.shown ? '2vw' : '0',
          overflow: 'hidden',
          transition: 'max-height .5s ease-in'
        }}>
          Hidden Section
        </div>
      </div>
    )
  }
}

class RecentlyPlayed extends Component {
  render() {
    return (
      <div style={{
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        textAlign: 'center'
      }}>
        <h2 style={{...StyleHeading}}>Recently Played</h2>
        <div style={{...StyleList, 
          overflowY: 'auto',
          overflowX: 'hidden'
        }} className='customScrollBar'>
          {this.props.items !== undefined ?
            populateList(this.props.items)
            :
            <LoadingPlaceholder/>
          }
        </div>
      </div>
    )
  }
}

class FavouriteSection extends Component {
  render() {
    return (
      <div style={{flex: '0 1 48.5%'}}>
        <h2 style={{...StyleHeading}}>{this.props.heading}</h2>
        <div style={{...StyleFrame}}>
          <div style={{...StyleList}}>
          {this.props.items !== undefined ?
            populateList(this.props.items)
            :
            <LoadingPlaceholder/>
          }
          </div>
        </div>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  

  componentDidMount() {
    if (accessToken !== undefined) {
      fetchUserProfile()
      .then((data) => {
        if (data !== null) {
          this.setState({
            user: {
              name: data.display_name,
              profileLink: data.external_urls.spotify,
              images: data.images
            }
          })
        }
      })
      
      fetchCurrentlyPlaying()
      .then((data) => {
        if (data !== null) {
          this.setState({
            current: {
              is_playing: data.is_playing,
              progress_ms: data.progress_ms,
              duration_ms: data.item.duration_ms,
              name: data.item.name,
              spotifyLink: data.item.external_urls.spotify,
              album: {
                name: data.item.album.name,
                spotifyLink: data.item.album.external_urls.spotify,
                images: [
                  {
                    url: data.item.album.images[2].url
                  },
                ]
              },
              artists: [
                {
                  name: data.item.artists[0].name,
                  spotifyLink: data.item.artists[0].external_urls.spotify
                }
              ]
            }
          })
        }
      })

      fetchRecentlyPlayed()
      .then((data) => {
        if (data !== null) {
          let recentItems = []
          for (let i=0 ; i < data.items.length ; i++) {
            recentItems.push({
              name: data.items[i].track.name
            })
          }
          this.setState({
            recent: {
              items: recentItems
            }
          })
        }
      })
      
      fetchTopArtists()
      .then((data) => {
        if (data !== null) {
          let favouriteItems = []
          for (let i=0 ; i < data.items.length ; i++) {
            favouriteItems.push({
              name: data.items[i].name
            })
          }
          this.setState({
            favouriteArtists: {
              items: favouriteItems
            }
          })
        }
      })
      
      fetchTopTracks()
      .then((data) => {
        if (data !== null) {
          let favouriteItems = []
          for (let i=0 ; i < data.items.length ; i++) {
            favouriteItems.push({
              name: data.items[i].name
            })
          }
          this.setState({
            favouriteTracks: {
              items: favouriteItems
            }
          })
        }
      })
    }
  }

  render() {
    return (      
      queryString.parse(window.location.search).access_token === undefined ?
      <LoginScreen/>
      :
      <div className="App" style={{
        padding: outerSpacing
      }}>
        <figure style={{
            display: 'flex',
            flexDirection: 'row',
            borderBottom: sectionSeparator,
            paddingBottom: '.5vw',
            alignItems: 'center'
        }}>
          {
            (this.state.user && this.state.user.profileLink) ?
            <img style= {{
              borderRadius: '.2em',
              width: '3vw',
              marginRight: '1em'
              }}
                src={'favicon.ico'}
            />
            :
            <img style= {{
              borderRadius: '.2em',
              width: '3vw',
              marginRight: '1em'
              }}
                src='favicon.ico'
            />
          }
          <figcaption>
            <a style={{
              color: 'inherit',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
            target='blank'
            href={this.state.user ? this.state.user.profileLink : '#'}>
              {this.state.user ? this.state.user.name : 'User name not found'}
            </a>
            </figcaption>
        </figure>
        
        <div style={{...StyleSection}}>
          <div style={{...StyleFrame,
            display: 'flex',
            flexDirection: 'row',
            height: '20vw'
          }}>
            <div style={{
              paddingRight: '2vw',
              borderRight: sectionSeparator,
              width: '48%',
              minWidth: '250px'
            }}>
              <CurrentlyPlaying 
                trackName={
                  this.state.current 
                  && 
                  this.state.current.name
                } 
                albumName={
                  this.state.current 
                  && 
                  this.state.current.album.name
                }
                albumPic={
                  this.state.current 
                  && 
                  this.state.current.album.images[0].url
                }
                artistName={
                  this.state.current 
                  && 
                  this.state.current.artists[0].name
                }
                currentProgress={
                  this.state.current
                  && 
                  this.state.current.progress_ms
                }
                totalDuration={
                  this.state.current 
                  && 
                  this.state.current.duration_ms
                }
              />
            </div>
            <div style={{
              paddingLeft: '2vw',
              width: '48%',
              position: 'relative'
            }}>
              <RecentlyPlayed 
                items={
                  this.state.recent 
                  && 
                  this.state.recent.items
                }
              />
            </div>
          </div>
        </div>
  
        <div style={{...StyleSection,
          textAlign: 'center'
        }}>
          <h1 style={{...StyleHeading}}>Your Favourites</h1>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}>
            <FavouriteSection 
              heading='Artists' 
              items={
                this.state.favouriteArtists
                &&
                this.state.favouriteArtists.items
              }
            />
            <FavouriteSection 
              heading='Tracks' 
              items={
                this.state.favouriteTracks
                &&
                this.state.favouriteTracks.items
              }
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
