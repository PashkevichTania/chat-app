import {NavLink} from 'react-router-dom';

import { NavBarStyled } from 'components/Styled/styledComponents';

const NavBar = () => {
  return (
      <NavBarStyled>
        <NavLink
            exact
            to="/"
            style={{
              color: '#44D62C',
              textDecoration: 'none',
            }}
            activeStyle={{
              fontWeight: "bold",
              textDecoration: 'underline',
            }}
        >
          Home
        </NavLink>
        <NavLink
            to="/profile"
            style={{
              color: '#44D62C',
              textDecoration: 'none',
            }}
            activeStyle={{
              fontWeight: "bold",
              textDecoration: 'underline',
            }}
        >
          Profile
        </NavLink>
      </NavBarStyled>
  );
};

export default NavBar;
