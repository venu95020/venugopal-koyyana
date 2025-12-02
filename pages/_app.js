import Backgroundanimation from '../components/animation';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
  <div className = "relative">
    <Backgroundanimation/>
     <Navbar />
    <Component {...pageProps} />


      <Navbar />
    
      </div>
    </>
  );
}

export default MyApp;
