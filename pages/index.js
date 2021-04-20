
import products from '../products.json'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import App from './_app2'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Soda Bros</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Soda Bros
        </h1>
          {/* Greensock */}
          <App/>
          {/* Greensock */}
        
          <img className={styles.logo} src={'/images/soda_logo.svg'} />
          

        <p className={styles.description}>
          <a className="snipcart-checkout snipcart-summary" href="#" style={{textDecoration: "none"}}>
            <strong>Cart:</strong> <span className="snipcart-total-price">$0.00</span>
            </a>
        </p>

        <div className={styles.grid}>
          {products.map(product => {
            return (
              <div key={product.id} className={styles.card}>
                <img src={product.image} alt={`Preview of ${product.title}`} />
                <h3>{ product.title }</h3>
                <p>{ product.description }</p>
                <p>$ { product.price }</p>
                <p>
                  <button className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-image={product.image}
                    data-item-name={product.title}
                    data-item-url="/"
                    data-item-price={product.price}
                  >
                    Add to Cart
                  </button>
                </p>
                </div>
            );
          })}
          

       
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thist quenched by{' '}
          <img src={'/images/soda_logo.svg'} alt="Soda Bro's Logo" className={styles.logo} />
        </a>
      </footer>
      <script async src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script>
      <div hidden id="snipcart" data-api-key="ZTc4Y2M1YmUtM2YwZi00MWE5LTljYTEtN2Q0MmVjOThlODU5NjM3NTM3NDk3MzY5MjMwMzcz" />
    </div>
  )
}
