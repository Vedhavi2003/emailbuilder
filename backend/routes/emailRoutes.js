const express = require('express');
const path = require('path');
const EmailTemplate = require('../models/EmailTemplate');
const router = express.Router();

// Get HTML Template
router.get('/getEmailLayout', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/layout.html'));
});

// Store Email Config
router.post('/uploadEmailConfig', async (req, res) => {
  try {
    const emailTemplate = new EmailTemplate(req.body);
    await emailTemplate.save();
    res.status(200).send('Template saved successfully');
  } catch (error) {
    res.status(500).send('Error saving template');
  }
});

// Render and Download Template
router.post('/renderAndDownload', async (req, res) => {
  const { title, content, footer, imageUris } = req.body;

  let html = `<html><body>
    <h1>${title}</h1>
    <p>${content}</p>
    <footer>${footer}</footer>
    ${imageUris.map((url) => `<img src="${url}" alt="Image" />`).join('')}
    </body></html>`;

  res.setHeader('Content-Disposition', 'attachment; filename=email.html');
  res.send(html);
});

module.exports = router;

