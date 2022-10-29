import React from "react";
import PropTypes from "prop-types";
import {Form, Row, Col} from "react-bootstrap";


export const SearchForm = ({handleOnchange, str}) => {
    
    
    return (
        <div>
            <Form>
                <Form.Group as = {Row}>
                    <Form.Label column sm="3">
                        Search:{" "}
                    </Form.Label>
                    <Col sm="9">
                        <Form.Control name="searchStr"
                            placeholder = "Search.."
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