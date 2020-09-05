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
  width: '3vw',
  height: '3vw'
}
let StyleDropDownButton = {...StyleButton,
  width: '1.5vw',
  height: '1.5vw'
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
            fontWeight: 'bold'
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
  constructor() {
    super();
    this.state = {
      playing: false,
      repeat: false,
      shuffle: false
    }
  }
  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-evenly'
      }}>
        <svg 
        onClick={() => {
          this.setState({repeat: !this.state.repeat})
          console.log('Repeat: ' + this.state.repeat);
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
        <svg 
        onClick={() => {
          console.log('Back');
        }}
        style={{...StyleMediaButton, transform:'rotate(180deg)'}} 
        version="1.1" viewBox="0 0 383.61 285.7" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(-5 -5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="93.005">
            <path transform="matrix(.56563 0 0 .73579 17.163 20.82)" d="m280.74 172.65-255.74 147.65v-295.3z"/>
            <path transform="matrix(.56563 0 0 .73579 203.52 20.82)" d="m280.74 172.65-255.74 147.65v-295.3z"/>
          </g>
        </svg>
        <svg 
        onClick={() => {
          this.setState({playing: !this.state.playing})
          console.log('Playing: ' + this.state.playing);
        }}
        style={{...StyleMediaButton}}
        version="1.1" viewBox="0 0 197.26 285.7" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(-5 -5)">
          <path transform="matrix(.56563 0 0 .73579 17.163 20.82)" d="m280.74 172.65-255.74 147.65v-295.3z" fill="#818181" stroke="#818181" strokeLinecap="round" strokeLinejoin="round" strokeWidth="93.005"/>
        </g>
        </svg>
        <svg 
        onClick={() => {
          console.log('Skip');
        }}
        style={{...StyleMediaButton}} 
        version="1.1" viewBox="0 0 383.61 285.7" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(-5 -5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="93.005">
            <path transform="matrix(.56563 0 0 .73579 17.163 20.82)" d="m280.74 172.65-255.74 147.65v-295.3z"/>
            <path transform="matrix(.56563 0 0 .73579 203.52 20.82)" d="m280.74 172.65-255.74 147.65v-295.3z"/>
          </g>
        </svg>
        <svg 
        onClick={() => {
          this.setState({shuffle: !this.state.shuffle})
          console.log('Shuffle: ' + this.state.shuffle);
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
      <div>
        <h2 style={{
          margin: '0 auto 3% auto',
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
          display: this.state.shown ? 'initial' : 'none',
          height: this.state.shown ? 'fit-content' : '0',
          transition: 'all 1s ease-in-out'
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
              profileLink: data.external_urls.spotify,
              images: data.images
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
            src={this.state.serverData.user ?
              'favicon.ico'
              :
              'favicon.ico'
            }
          />
          <figcaption>
            <a style={{
              color: 'inherit',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
            target='blank'
            href={this.state.serverData.user ? this.state.serverData.user.profileLink : '#'}>
              {this.state.serverData.user ? this.state.serverData.user.name : 'User name not found'}
            </a>
            </figcaption>
        </figure>
        
        <div style={{...StyleSection}}>
          <div style={{...StyleFrame,
            display: 'flex',
            flexDirection: 'row',
            minHeight: '120px',
            height: '20vw'
          }}>
            <div style={{
              paddingRight: '2vw',
              borderRight: sectionSeparator,
              width: '48%'
            }}>
              <CurrentlyPlaying/>
            </div>
            <div style={{
              paddingLeft: '2vw',
              width: '48%',
              position: 'relative'
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
