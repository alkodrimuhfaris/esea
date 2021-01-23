import React from 'react';
import {Modal, ModalBody, Button} from 'reactstrap';

export default function ModalConfirm({
  modalOpen = false,
  title = 'Warning',
  content = 'Are you sure want to delete this?',
  confirm = () => {},
  confirmTxt = 'Yes',
  close = () => {},
  closeTxt = 'No',
  useOneBtn = false,
}) {
  const [openThis, setThisOpen] = React.useState(false);

  React.useEffect(() => {
    setThisOpen(modalOpen);
  }, [modalOpen]);

  const doConfirm = (e) => {
    e.preventDefault();
    confirm();
    setThisOpen(false);
  };

  const doCancel = (e) => {
    e.preventDefault();
    close();
    setThisOpen(false);
  };

  return (
    <Modal className="kumbh-sans" isOpen={openThis}>
      <ModalBody>
        <div className="text-center my-3">
          <h4>
            <text>{title}</text>
          </h4>
        </div>
        <div className="text-center">
          <text>{content}</text>
        </div>
        <div className="d-flex my-3 justify-content-around">
          <Button
            color="esea-main"
            outline
            onClick={(e) => doConfirm(e)}
            className="rounded-pill px-4 border-0"
          >
            <text className="border-bottom">{confirmTxt}</text>
          </Button>
          {useOneBtn ? null : (
            <Button
              color="danger"
              outline
              onClick={(e) => doCancel(e)}
              className="rounded-pill px-4 border-0"
            >
              <text className="border-bottom">{closeTxt}</text>
            </Button>
          )}
        </div>
      </ModalBody>
    </Modal>
  );
}
