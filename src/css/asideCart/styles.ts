import styled from 'styled-components';

export const Container = styled.section`
    position: fixed;
    height: 100%;
    width: 486px;
    background: #0F52BA;
    right: 0;
    top: 0;
    z-index: 100;
    box-shadow: 1px 0px 8px rgba(0, 0, 0, 0.3);
`;

export const TitleWrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

export const Title = styled.h1`
    font-family: MontSerrat, Arial, Helvetica, sans-serif;
    font-size: 27px;
    margin-left: 45px;
    color: #FFFFFF;
`;

export const Img = styled.img`
    margin-right: 25px;
    cursor: pointer;
`;

export const ItemsWrapper = styled.div`
    height: 350px;
    width: 100%;
    overflow-y: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 10px;
`;

export const Product = styled.div`
    width: 380px;
    height: 100px;
    min-height: 100px;
    background: #FFFFFF;
    border-radius: 8px;
    box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    margin-top: 10px;
`;

export const ImageProduct = styled.img`
    width: 60px;
    height: 80px;
    display: flex;
    flex: 2;
    `;

export const TitleProduct = styled.h3`
    font-family: MontSerrat, Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    display: flex;
    flex: 1.5;
`;

export const Price = styled.h3`
    font-family: MontSerrat, Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 15px;
    line-height: 17px;
    display: flex;
    flex: 2.5;
    justify-content: center;
    letter-spacing: .3px;
`;

export const AmountWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 70px;
    height: 30px;
    border: #BFBFBF .5px solid;
    border-radius: 8px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    flex: 1;
`;

export const TotalSection = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    font-family: MontSerrat, Arial, Helvetica, sans-serif;
    font-weight: 700;
    color: #FFFFFF;
    font-size: 22px;
`;

export const AmountButtonLeft = styled.button`
    width: 15px;
    height: 20px;
    border: #BFBFBF .5px solid;
    border-top: transparent;
    border-left: transparent;
    border-bottom: transparent;
    background: #FFFFFF;
    cursor: pointer;
`;

export const AmountButtonRight = styled.button`
    width: 15px;
    height: 20px;
    border: #BFBFBF .5px solid;
    border-top: transparent;
    border-bottom: transparent;
    border-right: transparent;
    background: #FFFFFF;
    cursor: pointer;
`;


export const FinishButton = styled.button`
    width: 100%;
    height: 100px;
    background: #000000;
    color: #FFFFFF;
    font-family: MontSerrat, Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 22px;
    transition: .2s;
    position: absolute;
    bottom: 0;
    border: none;
    cursor: pointer;
    &:hover {
        background: #090909;
    }
`;

export const RemoveProduct = styled.img`
    width: 20px;
    height: 20px;
    position: absolute;
    right: -5px;
    top: -5px;
    cursor: pointer;
`;