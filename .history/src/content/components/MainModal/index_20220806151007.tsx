import { Button, Modal } from 'antd'
import React, { ReactNode, useState } from 'react'

const MainModal = (props: { children: ReactNode, visible: boolean, show: () => void}) => {
  const { children, visible, show} = props
  return (
    <>
      <Modal
        title="20px to Top"
        style={{ top: 20 }}
        visible={visible}
        onOk={() => show}
        onCancel={() => setModal1Visible(false)}
      >
        {children}
      </Modal>
    </>
  )
}

export default MainModal
