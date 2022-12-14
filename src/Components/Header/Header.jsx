import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/LOGO.png'
import { colors, device, fonts } from '../../utils/style/variable'

function Header() {
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <Logo src={logo}></Logo>
      </Link>
      <nav>
        <StyledLink to={'/'}>Accueil</StyledLink>
        <StyledLink to={'/About'}>A Propos</StyledLink>
      </nav>
    </HeaderContainer>
  )
}

// Css by styled-components
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 60px;
  padding-left: 25px;
  padding-right: 25px;
  max-width: 1440px;
  @media (${device.mobile}) {
    padding: 0 20px;
    margin: 20px 0;
  }
`
const Logo = styled.img`
  height: 40px;
  @media (${device.mobile}) {
    height: 30px;
  }
`

const StyledLink = styled(Link)`
  margin-left: 57px;
  color: ${colors.primary};
  font-weight: ${fonts.normalWeight};
  font-size: ${fonts.normalSize};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media (${device.mobile}) {
    margin-left: 18px;
    font-size: 14px;
    text-transform: uppercase;
  }
  @media (${device.tablet}) {
    font-size: ${fonts.tabletNormalSize};
    margin-left: 20px;
  }
`

export default Header
