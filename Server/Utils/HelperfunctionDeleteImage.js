const fs = require('fs');
const path = require('path');

const deleteImage = (imagePath) => {
    console.log(imagePath)
    const fullImagePath = path.join(__dirname, "..", imagePath); // Adjust the path according to your folder structure
    console.log(fullImagePath)
    fs.unlink(fullImagePath, (err) => {
        if (err) {
            console.error(`Error deleting image: ${err}`);
        } else {
            console.log(`Image deleted successfully: ${fullImagePath}`);
        }
    });
}

module.exports = {
    deleteImage
}