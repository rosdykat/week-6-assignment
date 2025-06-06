import "./FullScreenImage.css";

export default function FullScreenImage({ image, onClose }) {
  // ! I dont know if there is another way to do this part that we learnt in our module
  if (!image) return null;
  return (
    // When the user clicks the image, it triggers the onclose function from the thumbnail.jsx, removing the old full screen image?
    <div className="fullscreenImage" onClick={onClose}>
      <img src={image.url} alt={image.alt} title={image.title} id={image.id} />
    </div>
  );
}

// export default function FullScreenImage(props) {
//   const [showContent, setShowContent] = useState(false);

//   function handleClick() {
//     setShowContent(!showContent);
//   }

//   return (
//     <>
//       <div className="fullscreenImage" onClick={() => handleClick()}>
//         <img src={props.src} alt={props.alt} />
//       </div>

//       {showContent ? (
//         <div className="overlay" onClick={handleClick}>
//           <img className="fullImage" src={props.src} alt={props.alt} />{" "}
//         </div>
//       ) : null}
//     </>
//   );
// }
