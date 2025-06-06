// ! My code is all in App, but use different components!

import "./App.css";
import Thumbnail from "./Components/Thumbnail.jsx";
// import FullScreenImage from "./Components/FullScreenImage.jsx";

export default function App() {
  // state
  // state to store API images URL
  // state to store the index value (moving between images)

  // effects
  // fetch data from an API
  // once the data is fetched, update the image data state to store the fetched data

  // function to control what index we (the index represents a specific image object) we are currently clicking on
  // !  function handleSwitchImage (index){
  // !setIndex(index);
  // !}
  return (
    <>
      <main>
        <Thumbnail />
        {/* Initially I had FullScreenImage rendered here, but this made so sense as it's being rendered within the thumbnail component with props. This created a lot of errors for me! */}
        {/* <FullScreenImage /> */}
      </main>
    </>
  );
}
