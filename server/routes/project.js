'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads' });

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/project-details/:id?', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);
router.put('/project-details/:id', ProjectController.updateProject);
router.delete('/project-details/:id', ProjectController.deleteProject);

module.exports = router;