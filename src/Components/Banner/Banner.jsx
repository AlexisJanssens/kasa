import styled from 'styled-components'
import { colors, device, fonts } from '../../utils/style/variable'

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

//Css by styled-components
const BannerContainer = styled.div`
  position: relative;
  display: flex;
  height: 223px;
  @media (${device.mobile}) {
    height: 111px;
  }
`
const ImageBackground = styled.img`
  position: absolute;
  z-index: -1;
  filter: brightness(70%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
  @media (${device.mobile}) {
    border-radius: 10px;
    object-fit: cover;
  }
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
  @media (${device.mobile}) {
    font-size: ${fonts.normalSize};
    margin: auto 16px;
    width: 217px;
  }

  @media (${device.tablet}) {
    font-size: ${fonts.mediumSize};
    margin: auto;
    padding: 20px;
  }
`

export default Banner
