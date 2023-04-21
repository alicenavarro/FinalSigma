import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Link } from 'react-router-dom';

const Navbar = () => {
  //cabezeras
  const [openAnimales, setOpenAnimales] = React.useState(false);
  const [openAdministracion, setOpenAdministracion] = React.useState(false);
  const [openVeterinario, setOpenVeterinario] = React.useState(false);
  const [openFamilia, setOpenFamilia] = React.useState(false);
  const [openVoluntarios, setOpenVoluntarios] = React.useState(false);
  const [openInventario, setOpenInventario] = React.useState(false);
  const [openCalendario, setOpenCalendario] = React.useState(false);

  const handleClickAnimales = () => {
    setOpenAnimales(!openAnimales);
  };

  const handleClickAdministracion = () => {
    setOpenAdministracion(!openAdministracion);
  };

  const handleClickVeterinario = () => {
    setOpenVeterinario(!openVeterinario);
  }
  
  const handleClickFamilia = () => {
    setOpenFamilia(!openFamilia);
  };

  const handleClickVoluntarios = () => {
    setOpenVoluntarios(!openVoluntarios);
  };
    const handleClickInventario = () => {
    setOpenInventario(!openInventario);
  };
  const handleClickCalendario = () => {
    setOpenCalendario(!openCalendario);
  };





  return (
        <div className="barralateral">

    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClickAnimales}>
        <ListItemIcon>
          <StarBorder />
        </ListItemIcon>
        <ListItemText primary="Animales" />
        {openAnimales ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openAnimales} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Link to="/">
            <ListItemText primary="Dar de alta" /></Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Link to="/">
            <ListItemText primary="Dar de baja" /></Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Link to="/">
            <ListItemText primary="Registros" /></Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Link to="/">
            <ListItemText primary="Adopción" /></Link>
          </ListItemButton>

        </List>
      </Collapse>
      <ListItemButton onClick={handleClickAdministracion}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Administración" />
        {openAdministracion ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openAdministracion} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Link to="/Cuidadores">
            <ListItemText primary="Cuidadores" /></Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Link to="/">
            <ListItemText primary="Facturas" /></Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Link to="/">
            <ListItemText primary="Contabilidad" /></Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Link to="/">
            <ListItemText primary="Inventario" /></Link>
          </ListItemButton>          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Link to="/">
            <ListItemText primary="Usuarios" /></Link>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickVeterinario}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Veterinario" />
        {openVeterinario ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openVeterinario} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Link to="/">
            <ListItemText primary="Formulario" /></Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Link to="/">
            <ListItemText primary="Gestiones" /></Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Link to="/">
            <ListItemText primary="Urgencias" /></Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Link to="/">
            <ListItemText primary="Facturas" /></Link>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickFamilia}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Familia" />
        {openFamilia ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openFamilia} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Link to="/">
            <ListItemText primary="Gestion" /></Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Link to="/">
            <ListItemText primary="Adopción" /></Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Link to="/">
            <ListItemText primary="Formulario de contacto" /></Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Link to="/">
            <ListItemText primary="Contratos" /></Link>
          </ListItemButton>
          
        </List>
      </Collapse>

    </List>
    </div>
  );
}
export default Navbar
