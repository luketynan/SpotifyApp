import React, { Component } from 'react';
import './App.css';
import queryString from 'query-string';

let borderCurve = '2vw';
let accentColor = '#3489aa';
let frameBackgroundColor = '#ff7034 ';
let defaultSectionStyle = {
  margin: '2vw',
  padding: '0 2vw 2vw 2vw',
  borderBottom: 'solid',
  borderColor: accentColor
}
let defaultFrameStyle = {
  backgroundColor: frameBackgroundColor,
  borderRadius: borderCurve,
  padding: '1vw'
}
let defaultDataSectionStyle = {
  ...defaultFrameStyle,
  flex: '0 0 28%'
}
let favouriteListItemStyle = {
  listStyle: 'none',
  lineHeight: '100px'
}

class LoginPage extends Component {
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
          <h2 style={{textAlign:'center', fontSize:'150%'}}><span style={{display:'block', fontSize:'inherit'}}>First,</span> please log in to Spotify</h2>

          <button onClick={() => {window.location='http://localhost:8888/login'}}
          style={{
            color: 'inherit',
            textDecoration: 'none',
            textAlign: 'center',
            lineHeight: '150%',
            backgroundColor: 'green',
            border: 'solid green',
            borderRadius: '10px',
            padding: '.5vw',
            cursor: 'pointer',
            marginTop: '10%',
            fontWeight: 'bold'
          }}>
            Log in to Spotify
          </button>
        </div>
      </div>
    )
  }
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
          justifyContent: 'center'
        }}>
          <div style={{
              textAlign: 'center',
              width: '20%'
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
              }}>Album name</figcaption>
            </figure>
          </div>
          
          <div style={{
            textAlign: 'center',
            width: '50%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}>
            <p style={{fontWeight: 'bold'}}>Current track name</p>
            <p>Current track artists</p>
          </div>
        </div>
        <div style={{textAlign: 'center'}}>
          <p>0 / 0</p> 
            <div style={{
              backgroundColor: accentColor,
              color: 'black',
              borderRadius: '2vw',
              width: '80%',
              height: '.4em',
              margin: '.5em auto auto auto',
              padding: '.2em',
            }}>
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

class App extends Component {
  constructor() {
    super();
    this.state = {
      serverData: {}
    }
  }

  componentDidMount() {
    let accessToken = queryString.parse(window.location.search).access_token;

    fetch('https://api.spotify.com/v1/me', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then((response) => response.json())
    .then((data) => {
      this.setState({serverData: {user: {name: data.display_name}}});
      console.log(data);
      console.log(this.state.serverData);
    })
  }

  render() {
    return (
      console.log(queryString.parse(window.location.search).access_token),
      
      queryString.parse(window.location.search).access_token === undefined ?
      <LoginPage/>
      :
      <div className="App">
        <div style={{...defaultSectionStyle
        }}>
          <figure style={{
            display: 'flex',
            flexDirection: 'row',
            borderBottom: 'solid 2px',
            borderColor: accentColor,
            paddingBottom: '5px',
            marginBottom: '10px'
          }}>
            <img style= {{
            borderRadius: '.2em',
            width: '2em',
            margin: '0 .5em'
            }}
              src=''/>
            <figcaption className="outside">{this.state.serverData.user ? this.state.serverData.user.name : '---'}</figcaption>
          </figure>
          <CurrentlyPlaying/>
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
    )
  }
}

export default App;
