import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";

export const MenuDrawer = ({ isOpenDrawer, setIsOpenDrawer }) => {
  return (
    <Drawer
      anchor="left"
      open={isOpenDrawer}
      onClose={() => setIsOpenDrawer(false)}
    >
      <List>
        {["Listado de libros", "Buscar Libro", "Devolución libros"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Drawer>
  );
};
