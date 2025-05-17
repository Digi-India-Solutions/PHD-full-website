const Disciplines = require('../Models/DisciplinesModel');
const { deleteImage } = require('../Utils/HelperfunctionDeleteImage');

const createDiscipline = async (req, res) => {
    try {
        const { DisciplinesName, DisciplinesStatus } = req.body;
        const DisciplinesLogo = req.file
        if (!DisciplinesLogo) {
            return res.status(400).json({
                success: false,
                message: "DisciplinesLogo Id required"
            });
        }
        if (!DisciplinesName) {
            deleteImage(DisciplinesLogo.path)
            return res.status(400).json({
                success: false,
                message: "DisciplinesName Is required"
            });
        }

        const newDiscipline = new Disciplines({
            DisciplinesName,
            DisciplinesLogo: DisciplinesLogo.path,
            DisciplinesStatus: DisciplinesStatus || false,
        });

        await newDiscipline.save();

        return res.status(201).json({
            success: true,
            message: "Discipline created successfully",
            data: newDiscipline,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

const getAllDisciplines = async (req, res) => {
    try {
        const disciplines = await Disciplines.find();
        if (!disciplines) {
            return res.status(404).json({
                success: false,
                message: "Disciplines Not Found",
            });
        }
        return res.status(200).json({
            success: true,
            data: disciplines,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

const getDisciplineById = async (req, res) => {
    try {
        const discipline = await Disciplines.findById(req.params.id);
        if (!discipline) {
            return res.status(404).json({
                success: false,
                message: "Discipline not found",
            });
        }
        return res.status(200).json({
            success: true,
            data: discipline,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

const updateDiscipline = async (req, res) => {
    try {
        const { DisciplinesName, DisciplinesStatus } = req.body;
        let DisciplinesLogo = req.file;
        const discipline = await Disciplines.findById(req.params.id);
        if (!discipline) {
            return res.status(404).json({
                success: false,
                message: "Discipline not found",
            });
        }
        if (DisciplinesLogo) {
            if (discipline.DisciplinesLogo) {
                deleteImage(discipline.DisciplinesLogo);
            }
            discipline.DisciplinesLogo = DisciplinesLogo.path;
        }
        discipline.DisciplinesName = DisciplinesName || discipline.DisciplinesName;
        discipline.DisciplinesStatus = DisciplinesStatus !== undefined ? DisciplinesStatus : discipline.DisciplinesStatus;
        await discipline.save();
        return res.status(200).json({
            success: true,
            message: "Discipline updated successfully",
            data: discipline,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

const deleteDiscipline = async (req, res) => {
    try {
        const discipline = await Disciplines.findByIdAndDelete(req.params.id);
        if (!discipline) {
            return res.status(404).json({
                success: false,
                message: "Discipline not found",
            });
        }
        deleteImage(discipline.DisciplinesLogo)
        return res.status(200).json({
            success: true,
            message: "Discipline deleted successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

module.exports = {
    createDiscipline,
    getAllDisciplines,
    getDisciplineById,
    updateDiscipline,
    deleteDiscipline,
};
