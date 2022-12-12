import ArrowDown from '../../assets/VectorDropdownArrow.png'
import styled from 'styled-components'
import { useState } from 'react'
import { media } from '../../utils/style/colors'

const ButtonDown = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 2em;
  :hover {
    cursor: pointer;
  }
  @media (max-width: ${media.mobile}) {
    margin-right: 10px;
  }

  img {
    @media (max-width: ${media.mobile}) {
      height: 9px;
      width: 15px;
    }
  }
`

function Button({ isOpen, setOpen }) {
  const [rotateIcon, setRotateIcon] = useState(false)

  function handleRotation() {
    setRotateIcon(!rotateIcon)
    setOpen(!isOpen)
  }

  const rotate = rotateIcon ? 'rotate(180deg)' : 'rotate(0)'

  return (
    <ButtonDown
      style={{ transform: rotate, transition: 'all 200ms ease' }}
      onClick={handleRotation}
    >
      <img src={ArrowDown} alt="flèche pour ouvrir ou fermer le texte"></img>
    </ButtonDown>
  )
}

export default Button
