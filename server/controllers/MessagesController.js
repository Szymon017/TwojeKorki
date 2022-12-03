import Message from "../models/Message.js";

const getAllMessages = async (req, res) => {
    try {
        const result = await Message.find({});
        res.status(200).json({
            status: "Pomyślnie pobrano wiadomości",
            results: result
        })
    }catch(error) {
        res.status(500).json({
            status: "Błąd podczas pobierania wiadomości",
            message: error
        })
    }
}

const getUserMessages = async (req, res) => {
    try {
        const result = await Message.find({userA: req.params.id});
        res.status(200).json({
            status: "Pomyślnie pobrano wiadomość",
            results: result
        })
    }catch(error) {
        res.status(500).json({
            status: "Błąd podczas pobierania wiadomości",
            message: error.message
        })
    }
}

const createMessage = async (req, res) => {
    const {
        userA,
        userB,
        messages,
    } = req.body;

    console.log(messages);
    try {
        if (!userA || !userB || !messages) {
            res.status(500).json({
                status: "Nie udało się wysłać wiadomości",
                message: "Wymagane są wszystkie dane!"
            })
        }

        const result = await Message.create({userA, userB, messages});
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

const updateMessage = async (req, res) => {
    try{
        const newMessage = await Message.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(200).json({
            status: "Pomyślnie wysłano wiadomość",
            data: newMessage
        })
    }catch(error) {
        res.status(500).json({
            status: "Nie można wysłać wiadomości",
            message: error.message
        })
    }
}


export {
    createMessage,
    getAllMessages,
    getUserMessages,
    updateMessage
}