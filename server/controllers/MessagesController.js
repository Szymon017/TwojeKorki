import Message from "../models/Message.js";

const getAllMessages = async (req, res) => {

}

const getUserMessages = async (req, res) => {

}

const createAMessage = async (req, res) => {
    const {
        sender,
        receiver,
        message,
    } = req.body;

    try {
        if (!sender || !receiver || !message) {
            res.status(500).json({
                message: "Wymagane są wszystkie dane!"
            })
        }

        const result = await Message.create({sender,receiver,message});
        res.status(200).json({
            status: "Pomyślnie wysłano wiadomość",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            status: "Nie udało się dodać ogłoszenia",
            message: error.message
        })
    }

}

export {
    createAMessage
}