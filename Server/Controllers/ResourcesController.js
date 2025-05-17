const Resources = require("../Models/ResourcesModel");
const { deleteImage } = require("../Utils/HelperfunctionDeleteImage");

const createResource = async (req, res) => {
    try {
        const { ResourcesName } = req.body;
        const ResourcesPdf = req.file;

        if (!ResourcesName) {
            deleteImage(ResourcesPdf?.path);
            return res.status(400).json({
                success: false,
                message: "Resource Name is required"
            });
        }

        if (!ResourcesPdf) {
            return res.status(400).json({
                success: false,
                message: "ResourcesPdf is required"
            });
        }

        const newResource = new Resources({
            ResourcesName,
            ResourcesPdf: ResourcesPdf.path
        });

        await newResource.save();

        res.status(201).json({
            success: true,
            message: "Resource created successfully",
            data: newResource
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to create resource",
            error: error.message
        });
    }
};

// Get all resources
const getAllResources = async (req, res) => {
    try {
        const resources = await Resources.find();
        res.status(200).json({
            success: true,
            data: resources
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve resources",
            error: error.message
        });
    }
};

// Get a single resource by ID
const getResourceById = async (req, res) => {
    const { id } = req.params;

    try {
        const resource = await Resources.findById(id);
        if (!resource) {
            return res.status(404).json({
                success: false,
                message: "Resource not found"
            });
        }

        res.status(200).json({
            success: true,
            data: resource
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve resource",
            error: error.message
        });
    }
};

// Update a resource by ID
const updateResource = async (req, res) => {
    const { id } = req.params;
    const { ResourcesName } = req.body;
    const ResourcesPdf = req.file;

    try {
        const resource = await Resources.findById(id);

        if (!resource) {
            return res.status(404).json({
                success: false,
                message: "Resource not found"
            });
        }

        // If a new PDF is provided, delete the old one
        if (ResourcesPdf) {
            deleteImage(resource.ResourcesPdf); // Delete the old PDF from storage
        }

        // Update the resource with new data
        const updatedResource = await Resources.findByIdAndUpdate(
            id,
            {
                ResourcesName,
                ResourcesPdf: ResourcesPdf ? ResourcesPdf.path : resource.ResourcesPdf // Only update if new PDF is uploaded
            },
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Resource updated successfully",
            data: updatedResource
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to update resource",
            error: error.message
        });
    }
};

// Delete a resource by ID
const deleteResource = async (req, res) => {
    const { id } = req.params;

    try {
        const resource = await Resources.findById(id);

        if (!resource) {
            return res.status(404).json({
                success: false,
                message: "Resource not found"
            });
        }

        // Delete the associated PDF
        deleteImage(resource.ResourcesPdf);

        // Delete the resource record
        await resource.deleteOne();

        res.status(200).json({
            success: true,
            message: "Resource deleted successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to delete resource",
            error: error.message
        });
    }
};

module.exports = {
    createResource,
    getAllResources,
    getResourceById,
    updateResource,
    deleteResource
};
