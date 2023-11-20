import * as S from '../css/navbar/styles'
import ShopCart from './ShopCart'

const Navbar = () => {
    
  return (
    <S.Container>

      <S.DivLogo>
        {/* <S.ImgLogo src={iconMsk} alt="logo-MKS-sistemas" /> */}
        <S.TitleLogo>Techsmart</S.TitleLogo>
        <S.SpanLogo>Solutions</S.SpanLogo>
      </S.DivLogo>

      <S.DivShopCart>
          <ShopCart />
      </S.DivShopCart>

    </S.Container>
  )
}

export default Navbar