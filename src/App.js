import React, { Component } from 'react';
import './App.css';

let borderCurve = '2vw';
let accentColor = '#AAAAAA';
let frameBackgroundColor = '#C4C4C4';
let defaultSectionStyle = {
  margin: '2vw',
  padding: '0 2vw 2vw 2vw',
  borderBottom: 'solid',
  borderColor: accentColor
}
let defaultFrameStyle = {
  backgroundColor: frameBackgroundColor,
  borderRadius: borderCurve,
  padding: '2vw'
}
let defaultDataSectionStyle = {
  ...defaultFrameStyle,
  flex: '0 0 28%'
}
let favouriteListItemStyle = {
  listStyle: 'none',
  lineHeight: '100px'
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
  currentTrack: fakeSongs[0],
  currentProgress: '50',
  topArtists: [],
  topPlaylists: [],
  topTracks: [fakeSongs]
}

class LoadingPlaceHolder extends Component {
  render() {
    return (
      <div style={{
        textAlign: 'center',
        alignItems: 'center'
      }}>
        Loading...
      </div>
    )
  }
}

class CurrentlyPlaying extends Component {
  render() {
    return (
      fakeUserData.currentTrack ?
      <div style={{...defaultFrameStyle}}>
        <h2 style={{
          textAlign: 'center',
          width: 'fit-content',
          margin: 'auto',
          display: 'block'
        }}>
          Currently Playing
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
          <div style={{
              textAlign: 'center',
              width: '20%',
              margin: '2vw'
            }}>
            <figure>
              <img style={{
                width: '70%',
                borderRadius: borderCurve
              }} 
              src='https://cdn2.thelineofbestfit.com/images/made/images/remote/https_cdn2.thelineofbestfit.com/media/2014/bmimgupl_36616_5db6a7fa6ece2Krept-K_26_600_600.jpg'
              />
              <figcaption style={{
                fontWeight: 'bold'
              }}>{fakeUserData.currentTrack.album}</figcaption>
            </figure>
          </div>
          
          <div style={{
            textAlign: 'center',
            width: '70%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}>
            <p style={{fontSize: '2vw', fontWeight: 'bold'}}>{fakeUserData.currentTrack.name}</p>
            <p style={{fontSize: '2vw'}}>{fakeUserData.currentTrack.artists}</p>
          </div>
        </div>
        <div style={{textAlign: 'center'}}>
          <p>{fakeUserData.currentProgress} / {fakeUserData.currentTrack.totalSeconds}</p> 
            <div style={{
              backgroundColor: accentColor,
              color: 'white',
              borderRadius: '2vw',
              width: '80%',
              margin: ' 1.5vw auto auto auto',
              padding: '5px',
            }}>

              \\\\\\ Progress Bar //////
            </div>
        </div>
      </div>
      
      :

      <LoadingPlaceHolder/>
    )
  }
}

class FavouriteArtists extends Component {
  render() {
    return (
      <div style={{...defaultDataSectionStyle}}>
        <h2>Artists</h2>
        <ul style={{...favouriteListItemStyle}}>
          <li>Favourite Item</li>
          <li>Favourite Item</li>
          <li>Favourite Item</li>
        </ul>
      </div>
    )
  }
}

class FavouritePlaylists extends Component {
  render() {
    return (
      <div style={{...defaultDataSectionStyle}}>
        <h2>Playlists</h2>
        <ul style={{...favouriteListItemStyle}}>
          <li>Favourite Item</li>
          <li>Favourite Item</li>
          <li>Favourite Item</li>
        </ul>
      </div>
    )
  }
}

class FavouriteTracks extends Component {
  render() {
    return (
      <div style={{...defaultDataSectionStyle}}>
        <h2>Tracks</h2>
        <ul style={{...favouriteListItemStyle}}>
          <li>Favourite Item</li>
          <li>Favourite Item</li>
          <li>Favourite Item</li>
        </ul>
      </div>
    )
  }
}

function App() {
  return (
    fakeUserData.userName ?
      <div>
        <div style={{...defaultSectionStyle}}>
          <figure style={{
            display: 'none'
          }}>
            <img style= {{
              borderRadius: borderCurve,
              width: '100%'
            }}
            src={fakeUserData.profilePicture}/>
          </figure>
          
          <div>
            <h2 style={{
              borderBottom: 'solid 2px',
              borderColor: accentColor,
              paddingBottom: '5px',
              marginBottom: '10px'
            }}>
              {fakeUserData.userName}
            </h2>
            <CurrentlyPlaying/>
          </div>
        </div>


        <div style={{...defaultSectionStyle,
          textAlign: 'center'
        }}>
          <h1>Your Favourites</h1>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}>
            <FavouriteArtists/>
            <FavouritePlaylists/>
            <FavouriteTracks/>
          </div>
        </div>
      </div>
      : 
      
      <LoadingPlaceHolder/>
  );
}

export default App;
