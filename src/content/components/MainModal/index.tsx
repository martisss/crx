import { Modal } from 'antd'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

const MainModal = (props: {
  children: ReactNode
  visible: boolean
  show: () => void
}) => {
  const { children, visible, show, } = props
  return (
    <>
      <Modal
        style={{position: 'fixed', right: '30px', top: '30px', maxWidth: '800px', width: '500px'}}
        visible={visible}
        onOk={() => show()}
        onCancel={() => show()}
        modalRender={modal => <Wrapper>{modal}</Wrapper>}
        closable={false}
        mask={false}
        footer={null}
      >
        {children}
      </Modal>
    </>
  )
}

const Wrapper = styled.div`
  right: 30px;
  top: 50px;
`

export default MainModal
