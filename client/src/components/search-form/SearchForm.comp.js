import React from "react";
import PropTypes from "prop-types";
import {Form, Row, Col} from "react-bootstrap";


export const SearchForm = ({handleOnchange, str}) => {
    
    
    return (
        <div>
            <Form>
                <Form.Group as = {Row}>
                    <Form.Label column sm="3">
                         Szukaj:{" "}
                    </Form.Label>
                    <Col sm="9">
                        <Form.Control name="searchStr"
                            placeholder = "Wyszukaj.."
                            onChange={handleOnchange}
                            value={str}
                            />

                    </Col>         
                </Form.Group>
            </Form>
        </div>
    )
}

SearchForm.propTypes = {
    handleOnchange: PropTypes.func.isRequired,
    str: PropTypes.string.isRequired,  
}