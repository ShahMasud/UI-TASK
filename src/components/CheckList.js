import React, { useState } from "react";
import img from "../assets/images/checklist.jpeg";
import img2 from "../assets/images/img2.jpg";

const CheckList = () => {
  const [isChecked, setIsChecked] = useState("");
const [selectedImages, setSelectedImages] = useState([]);
const [appearance, setAppearance]= useState("none")
 
  const imageStyle = {
    filter: 'none',
    transition: 'filter 0.3s',
  };

  const selectedImageStyle = {
    filter: 'blur(2px)',
    transition: 'filter 0.3s',
  };

  const handleImageClick = (imageId) => {
    if (selectedImages.includes(imageId)) {
      setSelectedImages(selectedImages.filter((id) => id !== imageId));
    } else {
      setSelectedImages([...selectedImages, imageId]);
    }
  };


  const isImageSelected = (id) => {
    return selectedImages.includes(id);
  };
 

  const checkboxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform:"translate(-50%, -50%)",
    backgroundColor:"transparent !important",
    margin:"0px !important",
    appearance: `${appearance}`,
  };

  const images = [
    { id: 1, src: img }, 
    { id: 2, src: img2 },
    { id: 3, src: img },
    { id: 4, src: img2 }, 
    { id: 5, src: img },
    { id: 6, src: img2 },
    { id: 7, src: img },
    { id: 8, src: img2 }, 
    { id: 9, src: img },
    { id: 10, src: img2 },
  ];
  return (
    <>
      <h3>Direct it to whome ?</h3>
      <div className="checklist_img_main_div">

      {images.map((image) => (
        <img
         className="checklist_img"
          key={image.id}
          src={image.src}
          alt={`Image ${image.id}`}
          style={isImageSelected(image.id) ? selectedImageStyle : imageStyle}
          onClick={() => handleImageClick(image.id)}
        />
      ))}
      
      </div>
      {/* ---------- */}





      
    </>
  );
};

export default CheckList;
