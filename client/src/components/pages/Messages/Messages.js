import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './styles.css';
import { getUserMessages } from '../../../service/messageService';
import { getCurrentUser } from '../../../service/userDataService';
import { sendMessage } from '../../../service/messageService';

export default function Messages(props) {
    const { newMessage } = props;
    const [user, setUser] = useState();
    const [messages, setMessages] = useState();
    const [currentMessages, setCurrentMessages] = useState();
    const [messageToSend, setMessageToSend] = useState();

    //sending messages functions 
    const handleChange = async (e) => {
        const { value } = e.target;
        setMessageToSend({
            ...messageToSend,
             value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        const messageExist = await getAllMessages()
        let fullMessage = {"sender": user._id, "message": messageToSend.value}
        try{
            const result = await sendMessage(currentMessages._id, fullMessage)
            setMessageToSend();
            getAllMessages(user._id);
            

        }catch(err) {
            console.log(err);
        }
    }

    //getting all messages functions

    const getAllMessages = async (id) => {
        const result = await getUserMessages(id);
        setMessages(result.data.results)

    }

    //other functions

    const handleClickMessage = (id) => {
        setCurrentMessages(id);
    }

    useEffect(() => {
        const user = getCurrentUser();
        setUser(user);
        if (user) {
            getAllMessages(user._id)
        }
    }, [])

    useEffect(() =>{
        currentMessages && messages?.map((mess)=>{
            if(mess._id === currentMessages._id){
                setCurrentMessages(mess);
            }
        })
    }, [messages])

    return <>
        <Container>
            <Row className='messagesContainer'>
                <Col sm={3} className='messagesLeftPanel'>

                    {messages ? messages.map((message) => (
                        <Row><Col  className='messageSinglePerson' onClick={() => { handleClickMessage(message) }}><h4>{user._id !== message.userB._id ? message.userB.firstName + " " + message.userB.lastName : message.userA.firstName + " " + message.userA.lastName} </h4><p>{message.messages[message.messages.length - 1].message}</p></Col></Row>
                    )) : ""}
                </Col>
                
                <Col className='messagesRightPanel'>
                    {currentMessages && currentMessages.messages.map((mess) => (
                        mess.sender._id === user._id ? (
                            <Col className='messageOwner' key={mess.message}>
                                {mess.message}
                                <p>{(new Date(mess.date).toISOString().replace('T', ' ').split('.')[0])}</p>
                            </Col>
                        ) : (
                            <Col className='messageStranger' key={mess.message}>
                                {mess.message}
                                <p>{(new Date(mess.date).toISOString().replace('T', ' ').split('.')[0])}</p>
                            </Col>
                        )
                    ))}

                </Col>
            </Row>
            <Row >
                <Form>
                    <Col className='messageSend'>
                        <input type='text'
                            value={messageToSend ? messageToSend.value : ""}
                            name="message"
                            onChange={handleChange}
                            className="form-control"></input>
                            {currentMessages ? (<Button variant='success' onClick={handleSubmit}>Wyślij</Button>) : (<Button variant='dark'>Wyślij</Button>)}
                        
                    </Col>
                </Form>

            </Row>
        </Container>
    </>

}
