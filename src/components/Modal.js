import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap"
import img from '../img/cleanMumbai/8.png'

const ImgModal = ({showModal, handleClose}) => {
    console.log('showModal', showModal)
  return (
    <div >
        <Modal
        isOpen={showModal}
        size='lg'
        centered
        >
            <ModalBody style={{height:'40vw'}}>
                <div>
                    <img style={{height:'28vw', width:'100%'}} src={img} alt={img}></img>
                </div>
                <Button onClick={handleClose}>Close</Button>
            </ModalBody>
        </Modal>
    </div>
  )
}

export default ImgModal