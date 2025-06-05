import "./Thumbnail.css";
import { useEffect, useState } from "react";

export default function Thumbnail() {
  const [thumbnailItems, setThumbnailItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://week-6-api.vercel.app/api/images");
      const data = await response.json();
      console.log(data);
      setThumbnailItems(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="thumbnailContainer">
        <ul>
          {thumbnailItems.map((item) => (
            <img
              className="thumbnailImages"
              key={item.id}
              src={item.url}
              alt={item.alt}
            />
          ))}
          {/* <li>Tools</li>
          <li>A method to render all images</li>
          <li>
            An event to click on the images. The event handler is how we handle
            switching between images
          </li> */}
        </ul>
      </div>
    </>
  );
}
