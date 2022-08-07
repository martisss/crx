import ReactDOM from 'react-dom/client';
import styled from 'styled-components'
function Content() {
  return <Ball />
}

const Ball = styled.div`
  position: fixed;
  z-index: 9999;
  bottom: 50px;
  right: 20px;
  width: 50px;
  height: 50px;
  /* background: url('images/ball.png'); */
  background-color: ;
  background-size: 100% 100%;
  cursor: pointer;
  z-index: 1000 ;
`

const app = document.createElement('div')
app.id = 'CRX-container'
document.body.appendChild(app)
const CRXroot = ReactDOM.createRoot(document.getElementById('CRX-container'))
CRXroot.render(<Content />)
