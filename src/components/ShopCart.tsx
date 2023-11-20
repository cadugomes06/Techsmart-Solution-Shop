import { useContext } from 'react';
import * as S from '../css/shopCart/styles'
import cartIcon from '../assets/vector.svg'
import CartContext from '../context/ProductsContext'
import AsideShopCart from './AsideShopCart';

const ShopCart = () => {
  const { cartItems, setOpenCart, openCart } = useContext(CartContext)

  const openShopCart = () => {
    setOpenCart(true)
  }

  return (
    <>
    <S.Container onClick={openShopCart}>
      <S.ImgCart src={cartIcon} alt='carrinho-de-compras' />
      <S.SpanValue>{cartItems.length}</S.SpanValue>
    </S.Container>

    {openCart ? <AsideShopCart /> : null}

    </>
  )
}

export default ShopCart