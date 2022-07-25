import { useDispatch, useSelector } from "react-redux";
import { Link as LinkBase, NavLink, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import styled from "styled-components";
import { setActiveUser } from "../../redux/auth";
import { RootState } from "../../redux/configureStore";
import { cleanToken } from "../../utils/auth";

const StyledNav = styled.nav`
    background-color: white;
    padding: 1rem;
    & li {
        display: inline-block;
        margin-right: 1rem;
        & a {
            text-decoration: none;
        }
    }
`    
 
const Link = styled(LinkBase)`
    color: ${({match}: any) => match ? '#0070f3' : 'black'};

`

export const CustomLink = ({children,to, props}:any) => {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname,end: true })
    return (
        <li>
            <Link
                
                match={match}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </li>)
}

export const Nav = () => {
    const dispatch = useDispatch()
    const {activeUser}=useSelector((s:RootState)=>s.auth);
    const navigate = useNavigate()
    const onlogout = () => {
        console.log("logout")
        cleanToken()
        dispatch(setActiveUser(false))
        setTimeout (() => {
            navigate("/")
        }
        , 300)
    }
    return (
        <StyledNav>
            {!activeUser && <CustomLink to="/">Login</CustomLink>}
            {!activeUser && <CustomLink to="/register">Register</CustomLink>}        
            {activeUser && <CustomLink to="/todo">Todo</CustomLink>}
            {activeUser && <CustomLink to="/test">Test</CustomLink>}
            <li>
                <button onClick={onlogout} >Logout</button>
            </li>
            
        </StyledNav>
    );
}