const mongoose = require("mongoose")

const BannerSchema = new mongoose.Schema({
    bannerName: {
        type: String
    },
    bannerImage: {
        type: String,
        required: true
    },
    activeStatus: {
        type: Boolean,
        default: false
    }
})

const Banner = mongoose.model("Banner", BannerSchema)

module.exports = Banner