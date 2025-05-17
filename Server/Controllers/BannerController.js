const Banner = require("../Models/BannerModel")
const { deleteImage } = require("../Utils/HelperfunctionDeleteImage")


const createBanner = async (req, res) => {
    try {
        const { bannerName, activeStatus } = req.body
        const bannerImage = req.file.path
        if (!bannerImage) {
            return res.status(400).json({
                success: false,
                message: "Banner Image is must Required"
            })
        }
        const data = new Banner({ bannerName, bannerImage, activeStatus: activeStatus || false })
        await data.save()
        return res.status(200).json({
            success: true,
            message: "Banner Image Save Successfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const getBanner = async (req, res) => {
    try {
        const data = await Banner.find()
        if (!data) {
            return res.status(404).json({
                success: false,
                message: "No Banner Found Successfully"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Banner Found Successfully",
            data: data
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const getSingleBanner = async (req, res) => {
    try {
        const data = await Banner.findById(req.params.id)
        if (!data) {
            return res.status(404).json({
                success: false,
                message: "No Banner Found Successfully"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Banner Found Successfully",
            data: data
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const deleteBanner = async (req, res) => {
    try {
        const data = await Banner.findById(req.params.id)
        if (!data) {
            return res.status(404).json({
                success: false,
                message: "No Banner Found Successfully"
            })
        }
        deleteImage(data.bannerImage);
        await data.deleteOne()
        return res.status(200).json({
            success: true,
            message: "Banner Delete Successfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const updateBanner = async (req, res) => {
    try {
        const { bannerName, activeStatus } = req.body;
        const bannerId = req.params.id;
        const banner = await Banner.findById(bannerId);
        if (!banner) {
            return res.status(404).json({
                success: false,
                message: "No Banner Found"
            });
        }
        let bannerImage = banner.bannerImage;
        if (req.file) {
            deleteImage(bannerImage)
            bannerImage = req.file.path;
        }
        banner.bannerName = bannerName || banner.bannerName;
        banner.activeStatus = activeStatus || false;
        banner.bannerImage = bannerImage;
        await banner.save();
        return res.status(200).json({
            success: true,
            message: "Banner updated successfully",
            data: banner
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = {
    createBanner, getBanner, getSingleBanner, deleteBanner, updateBanner
}