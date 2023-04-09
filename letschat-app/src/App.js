import { Img } from '@chakra-ui/react';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import PicAndText from './Components/PicAndText/PicAndText.jsx';

let props = {
  hd1: 'alkjsdf'
}
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='banner'>
        <Img src='https://scontent.whatsapp.net/v/t39.8562-34/316546300_547692113846445_7299710494491288098_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=IF7bBz_Ob6oAX-etos1&_nc_ht=scontent.whatsapp.net&oh=01_AdSfTgVoRWXVSzT1NlTEOExlyGy4IFRDyaqdu6KfvCKEQQ&oe=64370065' width="95vw" borderRadius='15px'/>
        <PicAndText/>
      </div>
    </div>
  );
}

export default App;
