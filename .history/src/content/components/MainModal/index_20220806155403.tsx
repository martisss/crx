import { Modal } from 'antd'
import React, { ReactNode } from 'react'

const MainModal = (props: {
  children: ReactNode
  visible: boolean
  show: () => void
}) => {
  const { children, visible, show } = props
  return (
    <>
      <Modal
        style={{ top:  }}
        visible={visible}
        onOk={() => show()}
        onCancel={() => show()}
      >
        {children}
      </Modal>
    </>
  )
}

export default MainModal
