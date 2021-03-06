import React from 'react';
import {Modal, ModalBody, Spinner} from 'reactstrap';

export default function ModalLoading({modalOpen = false}) {
  return (
    <Modal
      isOpen={modalOpen}
      size="sm"
      style={{
        backgroundColor: 'rgba(0,0,0,0)',
      }}
    >
      <ModalBody
        style={{
          backgroundColor: 'rgba(0,0,0,0)',
        }}
      >
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            maxHeight: '200px',
            height: '20vw',
            backgroundColor: 'rgba(0,0,0,0)',
            aspectRatio: 1 / 1,
          }}
        >
          <Spinner color="esea-main" />
        </div>
      </ModalBody>
    </Modal>
  );
}
