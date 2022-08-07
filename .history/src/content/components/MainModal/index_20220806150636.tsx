import { Button, Modal } from 'antd'
import React, { ReactNode, useState } from 'react'

const MainModal = (props: { children: ReactNode, visible: boolean}) => {
  const { children, visible} = props
  return (
    <>
      <Modal
        title="20px to Top"
        style={{ top: 20 }}
        visible={visible}
        onOk={() => setModal1Visible(false)}
        onCancel={() => setModal1Visible(false)}
      >
        {children}
      </Modal>
    </>
  )
}

export default MainModal
