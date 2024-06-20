import './App.scss';
import Header from './components/Header';
import Tabs from './components/Tabs';
import { useState } from 'react';
import Recipelist from './components/Recipelist';
import About from './components/About';
import Footer from './components/Footer';

function App() {
const [loader,setLoader] = useState(true)
return (
<div className="main">
<Header />
<About/>
<Tabs setLoader={setLoader}/>
<Recipelist setLoader={setLoader}/>
{loader && <div className='loader'>
<div className='spinner'></div>
</div>}

<Footer/>
  </div>
);
}

export default App;