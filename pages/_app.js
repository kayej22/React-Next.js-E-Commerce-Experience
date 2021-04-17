import React, {useRef, useEffect} from 'react'
import '../styles/globals.css';
import '../styles/App.scss';
// importing Greensock
import {TweenMax, TimelineLite, Power3} from 'gsap'


// Greensock Animation

// App variable
function App() {
  let app = useRef(null);
// variable for images
  let images = useRef(null); 
  // variable for content
  let content = useRef(null);

// create Greensock animation timeline
  let tl = new TimelineLite

  useEffect(() => {
    // Content variables
    const girlImage = images.firstElementChild;
    const boyImage = images.lastElementChild;

    // Content variables
    const headlineFirst = content.children[0].children[0]

    // Setting the initial state of the hero page to become visible 
    TweenMax.to(app, 0, {css:{visibility: 'visible'}})
    // Images animation timeline
    tl.from(girlImage, 1.2, {y: 1280, ease: Power3.easeOut})
      .from(girlImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
      .from(boyImage, 1.2, {y: 1280, ease: Power3.easeOut}, .2)
      .from(boyImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    
  })

  return (
    // reference section
    <div className="hero" ref={el => app = el}>
      <div className="container">
        <div className="hero-inner">
          <div className= "hero-content">
            {/* referencing content */}
            <div className="hero-content-inner" ref={el => content = el}>>
              <h1>
              <div className="hero-content-line">
                  <div className="hero-content-line-inner">Relieving the world</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">of it's thirst</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">through soda!</div>
                </div>
              </h1>
              <p>Because nothing quenches thirst like a cold carbonated beverage!</p>
              <div className="btn-row">
                <button className="explore-button">
                shop
                <div className= "logo">
                  <img src={'/images/soda_logo.svg'} alt ="company logo"/>

                </div>
                </button>
              </div>
            </div>
          </div>
          <div className= "hero-images">
            {/* reference images */}
            <div className="hero-images-inner" ref= {el => images = el}>
              <div className="hero-image girl">
                <img src={'/images/drinkingsoda1.jpg'} alt="girl drinking soda"/>
              </div>
              <div className="hero-image boy">
                <img src={'/images/drinkingsoda2.jpg'} alt="girl drinking soda"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
  
}




export default App


