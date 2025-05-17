const { createBanner, getBanner, getSingleBanner, deleteBanner, updateBanner } = require("../Controllers/BannerController")
const upload = require("../Middleware/multer")

const BannerRouter = require("express").Router()

BannerRouter.post("/add-banner", upload.single("bannerImage"), createBanner)
BannerRouter.get("/all-banner", getBanner)
BannerRouter.get("/single-banner/:id", getSingleBanner)
BannerRouter.put("/update-banner/:id", upload.single("bannerImage"), updateBanner)
BannerRouter.delete("/delete-banner/:id", deleteBanner)

module.exports = BannerRouter