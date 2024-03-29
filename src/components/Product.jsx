import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addProduct } from "../redux/cartRedux";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`


  margin: 2px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;
const Title = styled.h3`
  position: absolute;
  display: flex;
  bottom: 0;
  margin-top: 40px;
`

const Price = styled.span`
position: absolute;
color: green;
bottom: 0;
right: 0;
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
  object-fit: cover;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;


const Product = ({ item}) => {
  const total = useSelector(state=>state.cart)
  const dispatch = useDispatch(); 

  const handleClick = () => {
  
    dispatch(
      addProduct(total)
    );

    
  };

  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon to={`/product/${item._id}`}  onClick={handleClick} >
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
          <SearchOutlinedIcon />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
        <span></span>
        <span></span>
      </Info>
      <Title>{item.title}</Title>
      <Price>${item.price}</Price>
      
    

    </Container>
  );
};

export default Product;
