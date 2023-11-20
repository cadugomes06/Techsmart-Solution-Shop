import { useContext, useEffect, useState } from 'react'
import * as Styled from '../css/asideCart/styles'
import closeIcon from '../assets/close_cart.svg'
import CartContext from '../context/ProductsContext'
import { ProductsData } from '../interfaces/products-data'

const AsideShopCart = () => {  
  const [ totalPrice, setTotalPrice ] = useState(0)
  const { cartItems, setCartItems, setOpenCart } = useContext(CartContext)


  const handleRemoveQuantity = (item: ProductsData) => {
    const productExist = cartItems.find((product) => product.id === item.id)

    if (productExist && productExist.quantity > 1) {
      setCartItems(prevState => prevState.map(product => 
        product.id == item.id ? {...product, quantity: product.quantity - 1} : product))
    }
  }

  const handleAddQuantity = (item: ProductsData) => {
    const productExist = cartItems.find((product) => product.id === item.id)

    if (productExist) {
      setCartItems(prevState => prevState.map(product => 
        product.id === item.id ? {...product, quantity: product.quantity + 1} : product))
    }
  }

  const removeProductOnCart = (item: ProductsData, index: number) => {
    const productExist = cartItems.find((product) => product.id === item.id)

    if (productExist) {
     const updateCartItems = [...cartItems]
     updateCartItems.splice(index, 1)
     setCartItems(updateCartItems)
  }
}

  useEffect(() => {
    const allValues = cartItems.map((item) => Number(item.price) * item.quantity)
    const totalPrice = allValues.reduce((accumulator, num) => accumulator + num, 0)
    setTotalPrice(totalPrice)
    
  }, [cartItems])

  const closeShopCart = () => {
    setOpenCart(false)
  }
 
  return (
    <>
      <Styled.Container>
      <Styled.TitleWrapper>
        <Styled.Title>Carrinho <br /> de compras</Styled.Title>
        <Styled.Img 
            src={closeIcon} 
            alt="fechar-carrinho" 
            onClick={closeShopCart}
            />
      </Styled.TitleWrapper>

      <Styled.ItemsWrapper>
        {cartItems.map((item, index) => (
            <Styled.Product key={index}>
              <Styled.RemoveProduct 
                  src={closeIcon}
                  onClick={() => removeProductOnCart(item, index)}
                   />
              <Styled.ImageProduct src={item.photo} alt='' />
              <Styled.TitleProduct>{item.name}</Styled.TitleProduct>

              <Styled.AmountWrapper>
                <Styled.AmountButtonLeft 
                 onClick={() => handleRemoveQuantity(item)}>-</Styled.AmountButtonLeft>

                  <span>{item.quantity}</span>

                <Styled.AmountButtonRight onClick={() => handleAddQuantity(item)}>+</Styled.AmountButtonRight>
              </Styled.AmountWrapper> 

              <Styled.Price>R${item.price}</Styled.Price>

            </Styled.Product>          
        ))}
        
      </Styled.ItemsWrapper>

      <Styled.TotalSection>
          <h3>Total: </h3>
          <h3>R$ {totalPrice}</h3>
      </Styled.TotalSection>

      <Styled.FinishButton>
        Finalizar Compra
      </Styled.FinishButton>

    </Styled.Container>
    </>
  )
}

export default AsideShopCart