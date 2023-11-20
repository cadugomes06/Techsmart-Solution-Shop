import { useContext } from 'react';
import { useProductsData } from '../api/api'
import * as Styled from '../css/products/styles';
import bagIcon from '../assets/shopping-bag.svg';
import CartContext from '../context/ProductsContext';
import { ProductsData } from '../interfaces/products-data';
import Skeleton from './SkeletonPage';

const CardProducts = () => {
 const { cartItems ,setCartItems } = useContext(CartContext)
 const { data, isLoading } = useProductsData()

    const handleAddItem = (product: ProductsData) => {
      const itemExists = cartItems.find((item) => item.id == product.id) 

      if (itemExists) {
        return;
      } else {
        product['quantity'] = 1
        setCartItems((prevCartItems) => [...prevCartItems, product]);
      }
    }

    
  return (
    <>

    <Styled.SectionWrapper>
    {isLoading ? <Skeleton /> : null}
            {data?.products?.map((product) => (    
                    <Styled.divCardProduct key={product.name}>
                        <Styled.ImgWrapper>
                          <Styled.ImgProduct src={product.photo} />
                        </Styled.ImgWrapper>

                        <Styled.TitleWrapper>
                            <Styled.Title>{product.name}</Styled.Title>
                            <Styled.Price>R${product.price}</Styled.Price>
                        </Styled.TitleWrapper>

                        <Styled.Description>
                            {product.description}
                        </Styled.Description>

                        <Styled.ButtonComprar
                           onClick={() =>  handleAddItem(product)} 
                           >
                            <img src={bagIcon} alt="ícone-bolsa-de-compras" 
                            />
                            <span>Comprar</span>
                        </Styled.ButtonComprar>
                        
                    </Styled.divCardProduct>
            ))}
    </Styled.SectionWrapper>
    </>
  )
}

export default CardProducts