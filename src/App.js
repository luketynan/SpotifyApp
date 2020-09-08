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
  width: '2vw',
  height: '2vw',
  border: 'outset',
  borderRadius: '50%',
  borderColor: 'orange',
  backgroundColor: 'black',
  fill: 'orange',
  stroke: 'orange',
  padding: '1vw'
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
        }}>{this.props.name}</figcaption>
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
        justifyContent: 'space-between'
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
        style={{...StyleMediaButton}}
        version="1.1" viewBox="0 0 391.01 277.27" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(-1.3032 -9.2179)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="60">
          <path d="m217.66 147.85 144.65-108.64v217.28z"/>
          <path d="m31.301 147.85 144.65-108.64v217.28z"/>
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
          <path transform="matrix(.56563 0 0 .73579 17.163 20.82)" d="m280.74 172.65-255.74 147.65v-295.3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="93.005"/>
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
          <AlbumFrame
            name={this.props.albumName}
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
              flexDirection: 'row',
              alignContent: 'space-between',
              justifyContent: 'space-around'
            }}>
              <p>{this.props.trackName}</p>
              <p>{this.props.artistName}</p>
            </div>
            <MediaControls/>
            </div>
        </div>
        <div style={{textAlign: 'center'}}>
          <p>{this.props.currentProgress==undefined ? '--' : this.props.currentProgress} / {this.props.totalDuration || '--'}</p>
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
          maxHeight: this.state.shown ? '20px' : '0',
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
        <h2>Recently Played</h2>
        <div style={{...StyleList, overflow: 'auto'}}>
          {console.log('RP Props', this.props)}
          {this.props.items != undefined ?
            populateList(this.props.items)
            :
            <LoadingPlaceHolder/>
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
        <h2>{this.props.heading}</h2>
        <div style={{...StyleFrame}}>
          <div style={{...StyleList}}>
          {this.props.items != undefined ?
            populateList(this.props.items)
            :
            <LoadingPlaceHolder/>
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
      serverData: {
      }
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
            },
            current: {
              is_playing: false,
              progress_ms: 0,
              duration_ms: 222075,
              name: 'Mr Brightside',
              spotifyLink: 'https://open.spotify.com/track/0eGsygTp906u18L0Oimnem',
              album: {
                name: 'Hot Fuss',
                spotifyLink: "https://open.spotify.com/album/6TJmQnO44YE5BtTxH8pop1",
                images: [
                  {
                    url: 'https://i.scdn.co/image/d49268a8fc0768084f4750cf1647709e89a27172'
                  }
                ]
              },
              artists: [
                {
                  name: 'The Killers',
                  spotifyLink: "https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu"
                }
              ]
            },
            recent: {
              items: [
                {
                  name: 'Still Disappointed'
                },
                {
                  name: 'Heart of Courage'
                }
              ]
            },
            favourites: {
              artists: [
                {
                  name: 'Ed Sheeran'
                },
                {
                  name: 'Linkin Park'
                }
              ],
              tracks: [
                {
                  name: 'Take me Back to London'
                },
                {
                  name: 'What I\'ve Done'
                }
              ]
            }
          }
        });
        console.log(data);
        console.log(this.state.serverData)
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
            minHeight: '100px',
            height: '20vw'
          }}>
            <div style={{
              paddingRight: '2vw',
              borderRight: sectionSeparator,
              width: '48%'
            }}>
              <CurrentlyPlaying 
                trackName={
                  this.state.serverData.current 
                  && 
                  this.state.serverData.current.name
                } 
                albumName={
                  this.state.serverData.current 
                  && 
                  this.state.serverData.current.album.name
                }
                artistName={
                  this.state.serverData.current 
                  && 
                  this.state.serverData.current.artists[0].name
                }
                currentProgress={this.state.serverData.current
                  && 
                  this.state.serverData.current.progress_ms
                }
                totalDuration={
                  this.state.serverData.current 
                  && 
                  ~~(this.state.serverData.current.duration_ms/1000)
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
                  this.state.serverData.recent 
                  && 
                  this.state.serverData.recent.items
                }
              />
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
            <FavouriteSection 
              heading='Artists' 
              items={
                this.state.serverData.favourites
                &&
                this.state.serverData.favourites.artists
              }
            />
            <FavouriteSection 
              heading='Tracks' 
              items={
                this.state.serverData.favourites
                &&
                this.state.serverData.favourites.tracks
              }
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
