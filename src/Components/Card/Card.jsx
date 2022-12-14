import styled from 'styled-components'
import { colors, device, fonts } from '../../utils/style/variable'
import { Link } from 'react-router-dom'

function Cards({ title, cover, id }) {
  const linkId = `/Accomodation/${id}`

  return (
    <CardWrapper>
      <StyledLink to={linkId}>
        <CardCover src={cover} alt="image de l'appartement"></CardCover>
        <CardGradient></CardGradient>
        <CardTitle>{title}</CardTitle>
      </StyledLink>
    </CardWrapper>
  )
}

//Css by styled-components
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-height: 300px;
  border-radius: 10px;
  position: relative;
  background: ${colors.primary};
  &:hover {
    cursor: pointer;
  }
  @media (${device.mobile}) {
    min-height: 255px;
  }
`

const CardTitle = styled.p`
  position: absolute;
  font-size: ${fonts.smallsize};
  font-weight: normal;
  color: ${colors.tertiary};
  bottom: 0px;
  z-index: 3;
  width: 50%;
  margin: 20px;
  padding: 0;
`

const CardCover = styled.img`
  object-fit: cover;
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 10px;
`
const CardGradient = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  width: 100%;
  z-index: 2;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`

const StyledLink = styled(Link)`
  height: 100%;
`

export default Cards
