import { Container, Row, Col } from 'react-bootstrap'
import { FormInput } from './component/form'
import { QAList } from './component/QAList';
import { question } from './data';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [data, setData] = useState(question);

  // to add new question
  const addQuestion = () => {
    localStorage.setItem("questions", JSON.stringify([...question]))
    setData([...question])
    notify('تم الاضافه بنجاح', "Success")
  }

  // to delete all question
  const deleteAllQuestion = () => {
    localStorage.removeItem("questions")
    question.splice(0, question.length)
    setData([])
    notify('تم الحذف الكل بنجاح', "Success")
  }
  // to delete one question
  const deleteOneQuestion = (question) => {
    localStorage.setItem("questions", JSON.stringify([...question]))
    setData([...question]);
    if (question.length <= 0) {
      deleteAllQuestion();
    }
    notify('تم الحذف السؤال بنجاح', "Success")
  }

  // to push notifcation
  const notify = (message, type) => {
    if (type === "Error") {
      toast.error(message)
    } else if (type === "Success") {
      toast.success(message)
    }
  };
  return (
    <div className="font text-center color-body">
      <Container className='p-5'>

        <Row className='justify-content-center'>
          <Col sm='4'>
            <div className='fs-3 text-center py-3'>
              أسئلة وأجوبة شائعة
            </div>
          </Col>
          <Col sm='8'>
            <FormInput onAdd={addQuestion} notify = {notify}/>
            <QAList data={data} deleteOneQuestion={deleteOneQuestion} />
            {
              localStorage.getItem("questions") ? (
                <button onClick={deleteAllQuestion} className='btn-color w-100 my-2'>مسح الكل</button>
              ) : null
            }
          </Col>
        </Row>

        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
