
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux";
import LoginIcon from '@mui/icons-material/Login';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';



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
  border: 0.9px solid lightblue;
  display: flex;
  align-items: center;
  border-radius:16px;
width: 400px;
  padding: 5px;
  
`;

const Input = styled.input`
width: 300px;
border-radius: 14px;
padding: 8px;

  
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
           <Link style={{textDecoration:'none', color: 'black', fontFamily:'Ariel' }} to='/'><Logo>BIG X</Logo></Link> 
           
           <Language>EN</Language>
        </Left>
        <Center>
 
          <SearchContainer>
            <Input placeholder="Search..." type="text" />
          <SearchIcon/>
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem> <Link style={{ textDecoration:'none', color: 'black'}} to='/Register'  > 
          <HowToRegOutlinedIcon/> 
           Register</Link> </MenuItem>
          <MenuItem> <Link  style={{ textDecoration:'none', color: 'black'}} to='/Login'> 
          <LoginIcon/>
           Login   </Link> </MenuItem>

         <MenuItem onClick={handleLogout}> 
          <LogoutOutlinedIcon />
        Logout</MenuItem> 
  
     
          <Link to="/cart">
          <MenuItem>
        
          < ShoppingCartOutlinedIcon/>
                
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
