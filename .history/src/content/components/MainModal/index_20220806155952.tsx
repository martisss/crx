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
        bodyStyl={{}}
        visible={visible}
        onOk={() => show()}
        onCancel={() => show()}
        width={1000}
      >
        {children}
      </Modal>
    </>
  )
}

export default MainModal
