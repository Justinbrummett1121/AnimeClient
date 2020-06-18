import React, { useState, useEffect} from 'react';
import PermaNav from './home/Navbar';
import Auth from './auth/Auth';
import PastPresIndex from './Animes/PastPresIndex';
import './App.css'
import {UncontrolledCarousel} from 'reactstrap';



function App() {
  
  const items = [
    {
      src: require('./Assets/BlackCloverArt.jpg'),
      altText: 'Slide1',
      caption: 'Black Clover',
      header: 'Black Clover',
      key: '1'
    },
    {
      src: require('./Assets/hunterXHunter.jpg'),
      altText: 'Slide2',
      caption: 'Hunter X Hunter',
      header: 'Hunter X Hunter',
      key: '2'
    },
    {
      src: require('./Assets/mhaBunch.png'),
      altText: 'Slide3',
      caption: 'My Hero Academia',
      header: 'My Hero Academia',
      key: '3'
    }
  ];
  
  const Carousel = (props) => <UncontrolledCarousel items={items} />;
  
  
  // UncontrolledCarousel.propTypes = {
  //   items: PropTypes.array.isRequired,
  //   indicators: PropTypes.bool, // default: true
  //   controls: PropTypes.bool, // default: true
  //   autoPlay: PropTypes.bool, // default: true
  // };

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <PastPresIndex token={sessionToken}/>
    : <Auth updateToken={updateToken} />)
  }

  // var slideimages = new Array()
  // slideimages[0] = new Image()
  // slideimages[0].src = "BlackCloverArt.jpg"
  // slideimages[1] = new Image()
  // slideimages[1].src = "fullMetalAlchemistQuad.jpg"

  // var step=0

  // function slideit(){
  //   if (!document.images)
  //   return
  //   document.getElementById('slide').src = slideimages[step].src
  //   if (step<2)
  //   step++
  //   else
  //   step=0
  //   setTimeout("slideit()", 2500)
  // }

  // slideit()

  return (
    <div className="App">
      <div className="navBar">
        <PermaNav clickLogout={clearToken}/>
      </div>
      <h1>The Anime List</h1>
      <div className="displayImage">
        <Carousel/>
      </div>
      {/* <Auth updateToken={updateToken}/> */}
      {protectedViews()}
    </div>
  );
}

export default App;
