import { Button, Modal } from 'antd'
import React, { ReactNode, useState } from 'react'

const MainModal = (props: { children: ReactNode, visible: boolean}) => {
  const { children, } = props
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
  )
}

export default MainModal
