// Put fake data into App() function instead of outside

import React, { Component } from 'react';
import './App.css';

let borderCurve = '2vw';
let accentColor = '#AAAAAA';
let frameBackgroundColor = '#C4C4C4';
let defaultSectionStyle = {
  padding: '2vw'
}
let defaultFrameStyle = {
  'background-color': frameBackgroundColor,
  'border-radius': borderCurve,
  padding: '2vw'
}
let defaultDataSectionStyle = {
  ...defaultFrameStyle,
  flex: '1 3 25%'
}

let fakeSongs =  [
  {
    name: 'I Spy',
    totalSeconds: '272',
    currentSeconds: '0',
    artists: 'Krept & Konan, Headie One, K-Trap',
    album: 'Revenge is Sweet'
  },
  {
    name: 'Can You Hear Me?',
    totalSeconds: '233',
    artists: 'Wiley, Jme, Ms D, Skepta',
    album: 'The Ascent'
  },
  {
    name: 'Funky Friday',
    totalSeconds: '183',
    artists: 'Dave, Fredo',
    album: 'Funky Friday'
  }
]
let fakeUserData = {
  profilePicture: 'https://breathingspacedc.com/wp-content/uploads/Bubbles-Lumppini-Fotolia-1080x675.jpg',
  userName: 'Joe Blogs',
  currentTrack: fakeSongs[2],
  currentProgress: '50',
  topArtists: [],
  topPlaylists: [],
  topTracks: [fakeSongs]
}

class CurrentlyPlaying extends Component {
  render() {
    return (
      <div style={{...defaultFrameStyle}}>
        <h2 style={{
          'text-align': 'center',
          width: 'fit-content',
          margin: 'auto',
          display: 'block'
        }}>
          Currently Playing
        </h2>

        <div style={{
          display: 'flex',
          'flex-direction': 'row',
          'justify-content': 'space-around'
        }}>
          <div style={{
              'text-align': 'center',
              width: '20%',
              margin: '2vw'
            }}>
            <figure>
              <img style={{
                width: '70%',
                'border-radius': borderCurve
              }} 
              src='https://cdn2.thelineofbestfit.com/images/made/images/remote/https_cdn2.thelineofbestfit.com/media/2014/bmimgupl_36616_5db6a7fa6ece2Krept-K_26_600_600.jpg'
              />
              <figcaption style={{
                'font-weight': 'bold'
              }}>{fakeUserData.currentTrack.album}</figcaption>
            </figure>
          </div>
          
          <div style={{
            'text-align': 'center',
            width: '70%',
            display: 'flex',
            'flex-direction': 'row',
            'align-items': 'center',
            'justify-content': 'space-around'
          }}>
            <p style={{'font-size': '2vw', 'font-weight': 'bold'}}>{fakeUserData.currentTrack.name}</p>
            <p style={{'font-size': '2vw'}}>{fakeUserData.currentTrack.artists}</p>
          </div>
        </div>
        <div style={{'text-align': 'center'}}>
          <p>{fakeUserData.currentProgress} / {fakeUserData.currentTrack.totalSeconds}</p> 
            <div style={{
              backgroundColor: accentColor,
              color: 'white',
              'border-radius': '2vw',
              width: '80%',
              margin: ' 1.5vw auto auto auto',
              padding: '5px',
            }}>

              \\\\\\ Progress Bar //////
            </div>
        </div>
      </div>
    )
  }
}

class FavouriteArtists extends Component {
  render() {
    return (
      <div style={{...defaultDataSectionStyle}}>
        <h2>Artists</h2>
      </div>
    )
  }
}

class FavouritePlaylists extends Component {
  render() {
    return (
      <div style={{...defaultDataSectionStyle}}>
        <h2>Playlists</h2>
      </div>
    )
  }
}

class FavouriteTracks extends Component {
  render() {
    return (
      <div style={{...defaultDataSectionStyle}}>
        <h2>Tracks</h2>
      </div>
    )
  }
}

class FavouritesSection extends Component {
  render() {
    return (
      <div style={{
        'text-align': 'center',
        height: '150px'
      }}>
        <h1>Your Favourites</h1>
        <div style={{
          display: 'flex',
          'flex-direction': 'row',
          'flex-wrap': 'wrap',
          'justify-content': 'space-around'
        }}>
          <FavouriteArtists/>
          <FavouritePlaylists/>
          <FavouriteTracks/>
        </div>
      </div>
    )
  }
}

function App() {
  return (
    fakeUserData.userName ?
      <div>
        <div>
          <figure style={{
            display: 'none'
          }}>
            <img style= {{
              'border-radius': borderCurve,
              width: '100%'
            }}
            src={fakeUserData.profilePicture}/>
          </figure>
          
          <div style={{...defaultSectionStyle
          }}>
            <h2 style={{
              'border-bottom': 'solid 2px',
              'border-color': accentColor,
              'padding-bottom': '5px',
              'margin-bottom': '10px'
            }}>
              {fakeUserData.userName}
            </h2>
            <CurrentlyPlaying/>
          </div>
        </div>

        <div style={{...defaultSectionStyle}}>
          <FavouritesSection/>
        </div>
      </div> 
      
      : 
      
      <div style={{
        background: 'white',
        'text-align': 'center',
        'align-items': 'center'
      }}>
        Loading your data...
      </div>
  );
}

export default App;
