import React, { Component } from 'react';
import './App.css';
import queryString from 'query-string';

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
let StyleFrame = {
  backgroundColor: frameBackgroundColor,
  borderRadius: borderCurve,
  padding: innerSpacing
}
let StyleItemList = {
  listStyle: 'none',
  lineHeight: '4em'
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
            lineHeight: '150%',
            backgroundColor: '#1db954',
            border: 'none',
            borderRadius: '1vw',
            padding: '1vw',
            cursor: 'pointer',
            marginTop: '5%',
            fontWeight: 'bold',
            boxShadow: '1px 1px black'
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

class AlbumFrame extends Component {
  render() {
    return (
      <figure style={{
        textAlign: 'center',
        width: '20%'
      }}>
        <img style={{
          width: '100%',
          borderRadius: borderCurve
        }} 
        src='https://cdn2.thelineofbestfit.com/images/made/images/remote/https_cdn2.thelineofbestfit.com/media/2014/bmimgupl_36616_5db6a7fa6ece2Krept-K_26_600_600.jpg'
        />
        <figcaption style={{
          fontWeight: 'bold'
        }}>Album name</figcaption>
      </figure>
    )
  }
}

class CurrentlyPlaying extends Component {
  render() {
    return (
      <div style={{
        width: '50%',
        height: '100%'
      }}>
        <h2 style={{
          width: 'fit-content',
          margin: 'auto'
        }}>
          Currently Playing
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '80%'
        }}>
          <AlbumFrame/>
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
              borderRadius: '2vw',
              height: '.4em',
              margin: '.2em auto auto auto',
              padding: '.2em',
            }}>
            </div>
        </div>
      </div>
    )
  }
}

class RecentlyPlayed extends Component {
  render() {
    return (
      <div style={{...StyleItemList,
        width: '50%'
      }}>
        <h2>Recently Played</h2>
        <FavouriteItem/>
        <FavouriteItem/>
        <FavouriteItem/>
      </div>
    )
  }
}

class FavouriteItem extends Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: itemSeparator
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{
            backgroundColor: accentColor,
            border: 'solid '.concat(accentColor),
            borderRadius: '50%',
            width: '3vw',
            height: '3vw',
            marginRight: '20px'
          }}></div>
          <h3>Item</h3>
        </div>
        <p>i</p>
        <p>&gt;</p>
      </div>
    )
  }
}

class FavouriteSection extends Component {
  render() {
    return (
      <div style={{flex: '0 1 46%'}}>
        <h2>{this.props.heading}</h2>
        <div style={{...StyleFrame}}>
          <div>Options Bar</div>
          <ul style={{...StyleItemList}}>
            <li><FavouriteItem/></li>
            <li><FavouriteItem/></li>
            <li><FavouriteItem/></li>
            <li><FavouriteItem/></li>
            <li><FavouriteItem/></li>
          </ul>
        </div>
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
    
    if (accessToken != undefined) {
      fetch('https://api.spotify.com/v1/me', {
        headers: {'Authorization': 'Bearer ' + accessToken}
      }).then((response) => response.json())
      .then((data) => {
        this.setState({
          serverData: {
            user: {
              name: data.display_name,
              profileLink: data.external_urls.spotify
            }
          }
        });
        console.log(data);
        console.log(this.state.serverData);
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
            paddingBottom: '5px',
            alignItems: 'center'
        }}>
          <img style= {{
          borderRadius: '.2em',
          width: '2em',
          marginRight: '1em'
          }}
            src='favicon.ico'/>
          <figcaption>
            <a style={{
              color: 'inherit',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
            href={this.state.serverData.user ? this.state.serverData.user.profileLink : ''}>
              {this.state.serverData.user ? this.state.serverData.user.name : '---'}
            </a>
            </figcaption>
        </figure>
        <div style={{...StyleSection,
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <CurrentlyPlaying/>
          <RecentlyPlayed/>
        </div>
  
        <div style={{...StyleSection,
          textAlign: 'center'
        }}>
          <h1>Your Favourites</h1>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}>
            <FavouriteSection heading='Artists'/>
            <FavouriteSection heading='Tracks'/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
