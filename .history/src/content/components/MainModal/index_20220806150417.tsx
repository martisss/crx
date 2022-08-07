import { Button, Modal } from 'antd';
import React, { Children, ReactNode, useState } from 'react';

const MainModal: React.FC = (props: {children: ReactNode}) => {
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
        {children}

      </Modal>
    </>
  );
};

export default MainModal;