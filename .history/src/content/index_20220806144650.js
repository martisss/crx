import ReactDOM from 'react-dom/client';
import styled from 'styled-components'
const iconUrl = window.chrome.runtime.getURL
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
  background: url('images/ball.png');
  background-color: red;
  background-size: 100% 100%;
  cursor: pointer;
`

const app = document.createElement('div')
app.id = 'CRX-container'
document.body.appendChild(app)
const CRXroot = ReactDOM.createRoot(document.getElementById('CRX-container'))
CRXroot.render(<Content />)
