const mongoose = require("mongoose")

const ResourcesSchema = new mongoose.Schema({
    ResourcesName: {
        type: String,
        required: true
    },
    ResourcesPdf: {
        type: String,
        required: true
    }
})

const Resources = mongoose.model("Resources", ResourcesSchema)

module.exports = Resources