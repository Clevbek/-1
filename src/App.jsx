import './app.css'
import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';


const App = () => {
    return (
        <div className='container'>
            <Header />
            <Banner />
            <Contact />
        </div>
    );
}

export default App;
