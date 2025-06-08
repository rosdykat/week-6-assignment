import "./FullScreenImage.css";

export default function FullScreenImage({ image, onClose }) {
  // ! I dont know if there is another way to do this part that we learnt in our module
  if (!image) return null;
  return (
    // When the user clicks the image, it triggers the onclose function from the thumbnail.jsx, removing the old full screen image?
    <div className="fullscreenImage" onClick={onClose}>
      {/* Max added a ? ( optional chaining) to image.urls as this was not working - not sure why */}
      <img src={image.urls?.full} alt={image.description} id={image.id} />
    </div>
  );
}
