const express = require('express');
const { createResource, getAllResources, getResourceById, updateResource, deleteResource } = require('../Controllers/ResourcesController');
const upload = require('../Middleware/multer');
const ResourcesRouter = express.Router();


// Routes for resources
ResourcesRouter.post('/add-resources', upload.single("ResourcesPdf"), createResource);  // Create a new resource
ResourcesRouter.get('/get-resources', getAllResources);  // Get all resources
ResourcesRouter.get('/single-resources/:id', getResourceById);  // Get a resource by ID
ResourcesRouter.put('/update-resources/:id', upload.single("ResourcesPdf"), updateResource);  // Update a resource by ID
ResourcesRouter.delete('/delete-resources/:id', deleteResource);  // Delete a resource by ID

module.exports = ResourcesRouter;
