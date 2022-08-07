import { Modal } from 'antd'
import React, { ReactNode } from 'react'

const MainModal = (props: {
  children: ReactNode
  visible: boolean
  show: () => void
}) => {
  const { children, visible, show, } = props
  return (
    <>
      <Modal
        bodyStyle={{right: '10px'}}
        visible={visible}
        onOk={() => show()}
        onCancel={() => show()}
        width={1000}
        modalRender={modal => <Wrapper>{modal}</Wrapper>}
      >
        {children}
      </Modal>
    </>
  )
}

const Wrapper = styled.div`
  
`

export default MainModal
