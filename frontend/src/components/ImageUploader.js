import React from 'react';
import axios from 'axios';

const ImageUploader = ({ onUpload }) => {
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    const response = await axios.post('http://localhost:5000/api/uploads', formData);
    onUpload(response.data.imageUrl);
  };

  return <input type="file" onChange={handleImageUpload} />;
};

export default ImageUploader;

