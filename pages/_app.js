import '../styles/globals.css'



function App() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className= "hero-content">
            <div className="hero-content-inner">
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
                explore
                <div className= "logo">
                  <img src={'/images/soda_logo.svg'} alt ="company logo"/>

                </div>
                </button>
              </div>
            </div>
          </div>
          <div className= "hero-images">
            <div className="hero-images-inner">
              <div className="hero-image girl">
                <img src={'/images/drinkingsoda1.jpg'} alt="girl drinking soda"/>
              </div>
              <div className="hero-image group">
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




export default MyApp


