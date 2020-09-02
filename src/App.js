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
let StyleList = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'space-between',
  marginTop: '10px',
  paddingBottom: '10px'
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

class AlbumFrame extends Component {
  render() {
    return (
      <figure style={{
        textAlign: 'center',
        width: '20%'
      }}>
        <img style={{
          width: '100%',
          borderRadius: '.5vw'
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

class MediaControls extends Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-evenly'
      }}>
        <button>o</button>
        <button>&lt;&lt;</button>
        <button>&gt;</button>
        <button>&gt;&gt;</button>
        <button>x</button>
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
  render() {
    return (
      <div style={{
        width: '100%',
        height: '100%'
      }}>
        <h2 style={{
          margin: '0 auto 2vw auto',
          textAlign: 'center'
        }}>
          Currently Playing
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <AlbumFrame/>
          <div style={{width:'70%'}}>
            <div style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '3vw'
            }}>
              <p style={{marginRight:'4vw'}}>Song Name</p>
              <p>Artist Name</p>
            </div>
            <MediaControls/>
            </div>
        </div>
        <div style={{textAlign: 'center'}}>
          <p>0 / 0</p>
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
      toggled: false
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
              width: '3vw',
              height: '3vw',
              marginRight: '1em'
            }}></div>
            <h3>Item</h3>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <p style={{marginRight:'1em'}}>i</p>
            <button onClick={() => {
              if(!this.state.toggled) {
                this.setState({toggled: true})
              }
              else {
                this.setState({toggled: false})
              }
            }}
            >&gt;</button>
          </div>
        </div>
        {
          this.state.toggled ? 
            <div className="toggle"style={{display:'block'}}>
              Hidden Section
            </div>
          :
          null
        }
      </div>
    )
  }
}

class RecentlyPlayed extends Component {
  render() {
    return (
      <div style={{
        height:'100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start'
      }}>
        <h2>Recently Played</h2>
        <div style={{...StyleList, overflow: 'auto'}}>
          <DataItem/>
          <DataItem/>
          <DataItem/>
          <DataItem/>
          <DataItem/>
          <DataItem/>
          <DataItem/>
        </div>
      </div>
    )
  }
}

class FavouritesOptions extends Component {
  render() {
    return (
      <div>
        <i>Options Bar</i>
      </div>
    )
  }
}

class FavouriteSection extends Component {
  render() {
    return (
      <div style={{flex: '0 1 48.5%'}}>
        <h2>{this.props.heading}</h2>
        <div style={{...StyleFrame}}>
          <FavouritesOptions/>
          <div style={{...StyleList}}>
            <DataItem/>
            <DataItem/>
            <DataItem/>
            <DataItem/>
            <DataItem/>
            <DataItem/>
            <DataItem/>
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
            target='blank'
            href={this.state.serverData.user ? this.state.serverData.user.profileLink : ''}>
              {this.state.serverData.user ? this.state.serverData.user.name : '---'}
            </a>
            </figcaption>
        </figure>
        
        <div style={{...StyleSection}}>
          <div style={{...StyleFrame,
            display: 'grid',
            gridTemplateColumns: '50% 50%',
            gridTemplateRows: '20vw',
            gridTemplateAreas: 'CurrentlyPlaying RecentlyPlayed'
          }}>
            <div style={{
              paddingRight: innerSpacing,
              borderRight: sectionSeparator
            }}>
              <CurrentlyPlaying/>
            </div>
            <div style={{
              paddingLeft: innerSpacing
            }}>
              <RecentlyPlayed/>
            </div>
          </div>
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
