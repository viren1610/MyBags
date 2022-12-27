import { ShoppingCart } from "@mui/icons-material";
import { ButtonGroup, Divider, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../Styles/appbar";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function AppBarDesktop(matches){
  

    return(
       <AppbarContainer >
        <AppbarHeader>My Bags</AppbarHeader>
        <MyList type="row">
            <ListItemText primary="Home"/>
            <ListItemText primary="Categories"/>
            <ListItemText primary="Products"/>
            <ListItemText primary="Conatct Us"/>



            <ListItemButton sx={{justifyContent:'center'}}>
                <ListItemIcon sx={{justifyContent:'center'}}>
             <SearchIcon/>
            </ListItemIcon>
            </ListItemButton>
           
            
            <ButtonGroup sx={{flexGrow:0, alignItems:'end'}}>
            <ListItemButton sx={{justifyContent:'center'}}>
                <ListItemIcon sx={{justifyContent:'center'}}>
             <ShoppingCart/>
                </ListItemIcon>
            </ListItemButton>
            

            <ListItemButton sx={{justifyContent:'center'}}>
                <ListItemIcon sx={{justifyContent:'center'}}>
                    <FavoriteIcon/>
                </ListItemIcon>
            </ListItemButton>
            

            <ListItemButton sx={{justifyContent:'center'}}>
                <ListItemIcon sx={{justifyContent:'center'}}>
                    <PersonIcon/>
                </ListItemIcon>
            </ListItemButton>
            

            </ButtonGroup>

        </MyList>

       </AppbarContainer>




    
    
    );
    
    
    }