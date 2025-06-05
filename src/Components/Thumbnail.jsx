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
      <div>
        This is the section for thumbnail images. Here we render a list of my
        images and give each of them a key.
        <ul>
          {thumbnailItems.map((item) => (
            <li key={item.id}>
              <img src={item.url} alt={item.alt} />
            </li>
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
