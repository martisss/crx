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
        style={{position: 'fixed', right: '10px', top: '20px'}}
        visible={visible}
        onOk={() => show()}
        onCancel={() => show()}
        width={800}
        modalRender={modal => <Wrapper>{modal}</Wrapper>}
        closable={false}
        mask={false}
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
