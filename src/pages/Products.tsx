import CardProducts from '../components/CardProducts'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import * as Styled from '../css/products/styles'

const Products = () => {

  return (
    <>
      <Navbar />
      
      <Styled.ContainerProducts>
         <CardProducts />
      </Styled.ContainerProducts>

      <Footer />
    </>
  )
}

export default Products