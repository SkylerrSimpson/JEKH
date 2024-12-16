import { Outlet } from 'react-router-dom';
import Menu from './Menu';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const navList = [
  {path: '/', name: 'JEKH'},
]

const Root = () => {
  return (
    <>
    <MenuWrapper>
      <JekhContainer>
        {navList.map((navItem) => (
          <JekhLink key={navItem.path} as={NavLink} to={navItem.path}>
            {navItem.name}
          </JekhLink>
        ))}
      </JekhContainer>
      <Menu />
    </MenuWrapper>

    <Outlet />
    </>

  );
}

const JekhLink = styled.a`
  text-decoration: none;
  color: white;
  font-family: 'Work Sans', sans-serif;
`;

const JekhContainer = styled.div`
  font-size: 2.5rem;
  padding: 0.7rem 1.5rem 1rem 0;
`;

const MenuWrapper = styled.div`
  display: flex;
  height: 4rem;
  justify-content: space-between;
  align-items: center; /* Center items vertically */
  padding: 0 1.5rem; /* Add some horizontal padding */
  background-color: #b5c7ab;
  box-shadow: 0 0 5px #35980f;

`;


export default Root;