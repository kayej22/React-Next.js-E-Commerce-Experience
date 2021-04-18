import React, {useRef, useEffect} from 'react'

import {TweenMax, TimelineLite, Power3} from 'gsap'
// import '../styles/App.scss';

// Greensock Animation

// App variable
function App() {
  let app = useRef(null);
// variable for images
  let images = useRef(null); 
  // variable for content
  let content = useRef(null);

// create Greensock animation timeline and give it a delay on page load
  let tl = new TimelineLite({delay: .8})

  useEffect(() => {
    // Content variables
    const girlImage = images.firstElementChild;
    const boyImage = images.lastElementChild;

    // Content variables
    // references the first line of the headline to animate
    const headlineFirst = content.children[0].children[0]
    // references the 2nd line of the headline to animate
    const headlineSecond = headlineFirst.nextSibling;
    // references the 3rd line of the headline to animate
    const headlineThird = headlineSecond.nextSibling;
    // refences tagline to animate
    const contentP = content.children[1]
    // references button to animate
    const contentButton = content.children[2]



    // Setting the initial state of the hero page to become visible. This removes animation flash 
    TweenMax.to(app, 0, {css:{visibility: 'visible'}})


    // Images animation timeline
    // adding 'start' to both timelines syncs them both to begin at the same time. doesn't have to be start, just needs to match
    tl.from(girlImage, 1.2, {y: 1280, ease: Power3.easeOut}, 'Start')
      .from(girlImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
      .from(boyImage, 1.2, {y: 1280, ease: Power3.easeOut}, .2)
      .from(boyImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    
    // Content animation
    // Must access the child element first because the animation divs are layered 
    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children], 1, {
      y: 44,
      ease: Power3.easeOut,
      // adding this delay trigger the animation to start slighting after the images timeline
      delay: .8
      // this .15 delay makes the headline stagger effect  work properly
    }, .15, 'Start')
    .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
    .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)
  }, [tl])

  return (
    // reference section
    <div className="hero" ref={el => app = el}>
      <div className="container">
        <div className="hero-inner">
          <div className= "hero-content">
            {/* referencing content */}
            <div className="hero-content-inner" ref={el => content = el}>
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

export default App