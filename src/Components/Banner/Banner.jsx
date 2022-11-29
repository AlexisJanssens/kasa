import styled from 'styled-components'
import { colors, fonts } from '../../utils/style/colors'

const BannerContainer = styled.div`
  position: relative;
  display: flex;
  height: 223px;
`
const ImageBackground = styled.img`
  position: absolute;
  z-index: -1;
  filter: brightness(70%);
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const BannerText = styled.p`
  position: relative;
  margin: auto;
  color: ${colors.tertiary};
  font-weight: ${fonts.normalWeight};
  font-size: ${fonts.bigSize};
  :hover {
    cursor: default;
  }
`

function Banner(props) {
  return (
    <BannerContainer>
      <ImageBackground
        src={props.background}
        alt={'background'}
      ></ImageBackground>
      <BannerText>{props.text}</BannerText>
    </BannerContainer>
  )
}

export default Banner
