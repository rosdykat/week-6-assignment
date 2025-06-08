import "./Thumbnail.css";
import { useEffect, useState } from "react";
import FullScreenImage from "./FullScreenImage";



export default function Thumbnail() {
  // Declaring thumbnailItem and fullImage to be able to hold data
  const [thumbnailItems, setThumbnailItems] = useState([]);
  const [fullImage, setFullImage] = useState([]);

  useEffect(() => {
    // ! I don't fully understand what useEffect means, and am just using it from prevous modules - it lets me synchronize a component with an external system, so i'm assuming that means it allows me to add the api data to my component
    // Fetching data and assigning it to thumbnailitems
    async function fetchData() {
      const response = await fetch("https://api.unsplash.com/photos/random?count=7&client_id=HxWdomxR_u3b3glHl8MCWziR28CuG9WjRuvtfxaaXfo");
      const data = await response.json();
      // console.log(data);
      setThumbnailItems(data);
    }
    fetchData();
    // Empty dependency array will only run once, if it is a variable it will update whenever it changes
  }, []);

  useEffect(() => {
    if (!thumbnailItems) {
      return;
    }
    setFullImage(thumbnailItems[0]);
  }, [thumbnailItems]);

  // Function that assigns full image the item data when it is clicked
  function handleThumbnailClick(image) {
    setFullImage(image);
  }
  // Function that remove the full screen image data when it is clicked
  function closeFullScreen() {
    setFullImage(null);
  }


  return (
    <>
      <div className="thumbnailContainer">
        <ul>
          {thumbnailItems.map((item) => (
            // ! I initially had these in a list, possibly from following the template manny made. I didn't need this, it created unnecessary bullet points!
            // <li key={item.id}>
            <img
              className="thumbnailImages"
              key={item.id}
              id={item.id}
              src={item.urls.thumb}
              alt={item.description}
              // on click -> passes to handlethumbnailClick with item data
              onClick={() => handleThumbnailClick(item)}
            />
            // </li>
          ))}
        </ul>
      </div>
      {}
      {/* Using a ternary operator to say if fullImage has a value, render fullscreen image component and pass the fullImage data prop, as well as the onClose function. If not, render nothing.
      This means that FullScreenImage is rendered whenever a thumbnail image is clicked.  */}
      {fullImage ? (
        // Removed onclose parameter, but could be used in the future.
        <FullScreenImage image={fullImage} />
      ) : null}
    </>
  );
}
