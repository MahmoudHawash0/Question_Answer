import React from 'react';
import { useState } from 'react';
import { Row, Form, Col } from 'react-bootstrap'
import { question } from '../data';


export const FormInput = ({ onAdd, notify }) => {

    const [qu, setQu] = useState('');
    const [an, setAn] = useState('');

    // to push new question to array and empty input text
    const addNewQuestion = () => {
        if (qu === "" || an === "") {
            notify("من فضلك ادخل بيانات صحيحة!", "Error")
        } else {
            question.push({ id: Math.random(), q: qu, a: an });
            setQu('');
            setAn('');
            onAdd();
        }
    }

    return (
        <Row className='my-3'>

            <Col sm='5'>
                <Form.Control value={qu} onChange={(e) => setQu(e.target.value)} type="text" placeholder="أدخل السؤال" />
            </Col>

            <Col sm='5'>
                <Form.Control value={an} onChange={(e) => setAn(e.target.value)} type="text" placeholder="أدخل الاجابة" />
            </Col>

            <Col sm='2'>
                <button onClick={addNewQuestion} className="btn-color w-100" type="submit">
                    اضافة
                </button>
            </Col>

        </Row>
    )
}
