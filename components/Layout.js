
import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from '../components/Header'
import Meta from '../components/Meta'

const Layout = ({ children}) => {
  return (
    <>
        <Meta />    
        <Nav />
        <div className={styles.container}>
      
          <main className={styles.main}>
              <Header />
              { children }
          </main>
        </div>
    </>

  )
}

Layout.propTypes = {}

export default Layout