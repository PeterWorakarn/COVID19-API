import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Loading from './components/Loading';
import Main from './components/Main';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import OnBoard from './components/OnBoard';

function App() {
  const [global, setGlobal] = useState({});
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCOVID19 = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://api.covid19api.com/summary');
            const data = await response.json();
            setGlobal(data.Global);
            setCountries(data.Countries);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
  };

    useEffect(() => {
        fetchCOVID19();
    },[]);

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="container px-2 sm:px-8 max-w-2xl mx-auto">
       {loading ? <Loading /> : 
        <>
          <OnBoard />
          <Banner global = {global}/>
          <Main countries = {countries}/>
        </>
      }
      </main>
      <ScrollTop />
      <Footer />
    </div>
  );
}

export default App;
