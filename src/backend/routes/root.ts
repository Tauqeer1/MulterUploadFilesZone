'use strict';
/**
*Module Dependencies
*/
var express = require('express')
const fs = require('fs');
const cors = require('cors');

import * as multer from 'multer';
var path = require('path');

const app = express();
app.use(cors());

const upload = multer({
  dest: 'uploads/',
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
      let ext = path.extname(file.originalname);
      console.log('Multer in filename ', ext)
      console.log('file', file)
      cb(null, `${Math.random().toString(36).substring(7)}${ext}`);
    }
  })
});

var router = express.Router();

router.post('/upload', upload.any(), (req, res) => {
  res.json(req.files.map(file => {
    let ext = path.extname(file.originalname);
    return {
      originalName: file.originalname,
      filename: file.filename
    }
  }));
});


//============================= Export Module ==================================
    module.exports = router;
//==============================================================================
