import { Badge } from "@material-ui/core";
import { HowToRegOutlined, Search, ShoppingCartOutlined, VerifiedUserOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux";
import LoginIcon from '@mui/icons-material/Login';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;

  padding: 5px;
`;

const Input = styled.input`

  
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.span`
  font-size: 25px;
  font-weight:bold;

  ${mobile({ fontSize: "20px", })}
`;
const Right = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center" })}
`;

const MenuItem = styled.div`
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  const user = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  const handleLogout = () =>{
    dispatch(logout())
  }



  return (
    <Container>
      <Wrapper>
        <Left> 
           <Link style={{textDecoration:'none', color: 'black', fontFamily:'Ariel' }} to='/'><Logo>Xcel $</Logo></Link> 
           
           <Language></Language>
        </Left>
        <Center>
 
          <SearchContainer>
            <Input placeholder="Search..." type="text" />
            
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem> <Link style={{ textDecoration:'none', color: 'black'}} to='/Register'  > <HowToRegOutlined/> Register</Link> </MenuItem>
          <MenuItem> <Link  style={{ textDecoration:'none', color: 'black'}} to='/Login'> <LoginIcon/>  Login   </Link> </MenuItem>

         <MenuItem onClick={handleLogout}>   <LogoutOutlinedIcon />
        Logout</MenuItem> 
  
     
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
