import styled from 'styled-components';

export const ContainerProducts = styled.section`
    height: calc(100vh);
    background: #F9F9F9;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SectionWrapper =  styled.section`
    width: 940px;
    height: 600px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
`;

export const divCardProduct = styled.div`
    width: 218px;
    height: 285px;
    background: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
    position: relative;
`;

export const ImgWrapper = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImgProduct = styled.img`
    width: 138px;
    height: 128px;
    background-size: contain;
`;

export const TitleWrapper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
`;

export const Title = styled.h1`
    display: flex;
    margin-left: 8px;
    flex: 6;
    font-family: MontSerrat, Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
`;

export const Price = styled.span`
    display: flex;
    flex: 4;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 26px;
    background: #373737;
    border-radius: 5px;
    color: #FFFFFF;
    font-family: MontSerrat, Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 700;
    margin-right: 6px;
`;

export const Description = styled.p`
    width: 100%;
    height: 50px;
    color: #2C2C2C;
    font-size: 10px;
    font-family: MontSerrat, Arial, Helvetica, sans-serif;
    line-height: 12px;
    font-weight: 300;
    padding: 0 10px;
`;

export const ButtonComprar = styled.button`
    width: 100%;
    height: 30px;
    background: #0F52BA;
    border: none;
    border-radius: 0 0 5px 5px;
    position: absolute;
    bottom: 0;   
    text-transform: uppercase;
    color: #FFFFFF;
    font-family: MontSerrat, Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    transition: .3s;
    
    &:hover {
        background: blue;
        color: #e3e3e3;
    }
`;

export const ImgIcon = styled.img``;

export const Span = styled.img``;





