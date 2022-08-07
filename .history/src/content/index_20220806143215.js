import ReactDom from 'react-dom'
import styled from 'styled-components'
function Content() {
  return (
    <Ball/>
  )
}

const Ball = styled.div`
  position: fixed;
  z-index: 9999;
  bottom: 50px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: url('images/ball.png');
  background-size: 100% 100%;
  cursor: pointer;
`


root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
const app = document.createElement('div')
app.id = 'CRX-container'
document.body.appendChild(app)
ReactDom.render(<Content />, app)

