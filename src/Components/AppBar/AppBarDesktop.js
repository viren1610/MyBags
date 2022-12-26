import { ShoppingCart } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../Styles/appbar";


export default function AppBarDesktop(matches){
  

    return(
       <AppbarContainer>
        <AppbarHeader>My Bags</AppbarHeader>
        <MyList type="row">
            <ListItemText primary="Home"/>
            <ListItemText primary="Categories"/>
            <ListItemText primary="Products"/>
            <ListItemText primary="Conatct Us"/>
            <ListItemButton>
                <ListItemIcon>
             <ShoppingCart/>

            </ListItemIcon>

            </ListItemButton>
        </MyList>

       </AppbarContainer>

    
    
    );
    
    
    }