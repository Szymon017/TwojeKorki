import Report from "../models/Report.js";

const getAllReports = async(req, res) => {
    try {
        const result = await Report.find({}).populate("reportingPerson annoucementId");
        res.status(200).json({
            status: "Pomyślnie pobrano wszystkie zgłoszenia",
            result: result
        })
    } catch (error) {
        res.status(500).json({
            status: "Błąd podczas pobierania wiadomości",
            message: error
        })
    }
}

const createNewReport = async(req, res) => {
    const {reportingPerson, annoucementId, reportMessage } = req.body;
    if(!reportingPerson || !annoucementId || !reportMessage){
        res.status(500).json({
            message: 'Brak wymaganych danych',
          });
    }
    try {
        const result = await Report.create({
            reportingPerson,
            annoucementId,
            reportMessage
        })
        res.status(200).json({
            status: "Pomyślnie dodano post do zgłoszonych",
            result: result
        })
    } catch (error) {
        res.status(500).json({
            status: "Błąd podczas tworzenia zgłoszenia",
            message: error.message
        })
    }
}

const deleteReport = async(req, res) => {
    try {
        const result = await Report.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({
            status: "Pomyślnie usunięto zgłoszenie"
        })
    } catch (error) {
        res.status(500).json({
            status: "Nie udało się usunąć zgłoszenia",
            message: error.message
        })
    }
}

const getReport = async(req, res) => {

}

export {
    getAllReports,
    createNewReport,
    getReport, 
    deleteReport
}