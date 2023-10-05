import React from 'react'
import { Row, Accordion, } from 'react-bootstrap';
import { question } from '../data';

export const QAList = ({ data, deleteOneQuestion }) => {

  const dataLocal = JSON.parse(localStorage.getItem("questions"))
  // to delete question form array
  const onDeleteQuestion = (ID) => {

    if (localStorage.getItem("questions") != null) {
      const index = question.findIndex((item) => item.id === ID)
      question.splice(index, 1)
      deleteOneQuestion(question);
    }
  }

  return (
    <Row>
      <Accordion>
        {
          localStorage.getItem("questions") ? (dataLocal.map((item, index) => {
            return (
              <Accordion.Item key={index} eventKey={item.id} >
                <Accordion.Header>
                  <div className='m-auto'>
                    {item.q}
                  </div>
                </Accordion.Header>
                <Accordion.Body className='text-end'>
                  <div className='px-3 d-inline'>
                    {item.a}
                  </div>
                  <button onClick={() => onDeleteQuestion(item.id)} className='btn-color'>مسح</button>
                </Accordion.Body>
              </Accordion.Item>
            )
          })) : <h2 className='fs-4 text-center p-5'>لا يوجد اسئلة </h2>
        }

      </Accordion>
    </Row >
  )
}
