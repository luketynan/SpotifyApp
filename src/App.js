import React, { Component } from 'react';
import './App.css';

let borderCurve = '1vw';

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
};

class CurrentlyPlaying extends Component {
  render() {
    return (
      <div>

        <h2>Currently Playing</h2>

        <div>
          <img style={{
            width: '10%',
            'border-radius': borderCurve
          }} 
          src='https://cdn2.thelineofbestfit.com/images/made/images/remote/https_cdn2.thelineofbestfit.com/media/2014/bmimgupl_36616_5db6a7fa6ece2Krept-K_26_600_600.jpg'/>
          <p>{fakeUserData.currentTrack.album}</p>
        </div>
          
        <p><span>{fakeUserData.currentTrack.name}</span> - <span>{fakeUserData.currentTrack.artists}</span></p>
        
        <div>
          <p>{fakeUserData.currentProgress} / {fakeUserData.currentTrack.totalSeconds}</p>  
          <p style={{
              backgroundColor: '#ffffff',
              'border-radius': '2vw',
              width: '70%',
              margin: 'auto',
              padding: '5px',
              'text-align': 'center'
            }}>

            //////////////////////////////
          </p>
        </div>
      </div>
    )
  }
}

class FavouriteArtists extends Component {
  render() {
    return (
      <div>
        <h2>Favourite Artists</h2>
      </div>
    )
  }
}

class FavouritePlaylists extends Component {
  render() {
    return (
      <div>
        <h2>Favourite Artists</h2>
      </div>
    )
  }
}

class FavouriteTracks extends Component {
  render() {
    return (
      <div>
        <h2>Favourite Tracks</h2>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <img style= {{
        width: '20%',
        'border-radius': borderCurve,
        display: 'inline'
      }}
      src={fakeUserData.profilePicture}/>

      <div>
        <h2>Profile Name</h2>
        <p>---------------------------------------------------</p>
        <CurrentlyPlaying/>
        <p>---------------------------------------------------</p>
      </div>
        <h1>Your Favourites</h1>
        <FavouriteArtists/>
        <FavouritePlaylists/>
        <FavouriteTracks/>
    </div>
  );
}

export default App;
