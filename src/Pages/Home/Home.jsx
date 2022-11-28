import styled from 'styled-components'
import Banner from '../../Components/Banner/Banner'
import Gallery from '../../Components/Gallery/Gallery'
import { LogementData } from '../Logement/LogementData'
import homeBackground from '../../assets/IMGBannerHomePage.png'

function Home() {
  console.log(LogementData)

  const Container = styled.div`
    padding-left: 25px;
    padding-right: 25px;
    max-width: 1440px;
    margin: auto;
  `

  return (
    <Container>
      <Banner
        background={homeBackground}
        text={'Chez vous, partout et ailleurs'}
      />
      <Gallery />
    </Container>
  )
}

export default Home
