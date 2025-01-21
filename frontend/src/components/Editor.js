import React, { useState } from 'react';
import axios from 'axios';
import ImageUploader from './components/ImageUploader';
import './Editor.css';

const Editor = () => {
  const [fields, setFields] = useState({ title: '', content: '', footer: '', images: [] });

  const handleChange = (field, value) => {
    setFields({ ...fields, [field]: value });
  };

  const handleSave = async () => {
    await axios.post('http://localhost:5000/api/emails/uploadEmailConfig', fields);
    alert('Template saved!');
  };

  return (
    <div className="editor">
      <input type="text" placeholder="Title" onChange={(e) => handleChange('title', e.target.value)} />
      <textarea placeholder="Content" onChange={(e) => handleChange('content', e.target.value)}></textarea>
      <input type="text" placeholder="Footer" onChange={(e) => handleChange('footer', e.target.value)} />
      <ImageUploader onUpload={(url) => setFields({ ...fields, images: [...fields.images, url] })} />
      <button onClick={handleSave}>Save Template</button>
    </div>
  );
};

export default Editor;

