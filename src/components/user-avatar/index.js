import { useState } from 'react';
import Avvvatars from "avvvatars-react";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import Link from "../link";

const UserAvatar = ({ username }) => {
  const [anchorMenu, setAnchorMenu] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorMenu(null);
  };

  const pages = [
    { name: 'Dashboard', url: '/dashboard' },
    { name: 'Find a Mentor', url: '/find-mentor' },
    { name: 'Profile', url: '/profile' },
  ];

  return (
    <>
      <IconButton onClick={handleOpenMenu}>
        <Avvvatars style="shape" value={username} size={45} border shadow borderColor="#000000" />
      </IconButton>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorMenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorMenu)}
        onClose={handleCloseMenu}
      >
        {pages.map((page) => (
          <MenuItem key={page.name} onClick={handleCloseMenu}>
            <Link href={page.url} className="menu-link">
              <Typography textAlign="center">{page.name}</Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default UserAvatar;
