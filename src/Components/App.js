import '../css/App.css';
import '../css/MediaQueries.css';
import SliderSection from './SliderSection.js';
import SecondSection from './SecondSection.js';


const App = () => {
  return (
    <>
      <div className="top"><header alt="logo">LOGO</header></div>
      <SliderSection />
      <SecondSection />

    </>
  );
}

export default App;
