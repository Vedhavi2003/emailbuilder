import React from 'react';

const TemplatePreview = ({ template }) => {
  return (
    <div className="template-preview">
      <h1>{template.title}</h1>
      <p>{template.content}</p>
      <footer>{template.footer}</footer>
      {template.images.map((url, index) => (
        <img key={index} src={url} alt="Uploaded" />
      ))}
    </div>
  );
};

export default TemplatePreview;

