import { Button, Modal } from 'antd';
import React, { useState } from 'react';

const MainModal: React.FC = () => {
  const [modal1Visible, setModal1Visible] = useState(false);


  return (
    <>
      <Modal
        title="20px to Top"
        style={{ top: 20 }}
        visible={modal1Visible}
        onOk={() => setModal1Visible(false)}
        onCancel={() => setModal1Visible(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};

export default MainModal;