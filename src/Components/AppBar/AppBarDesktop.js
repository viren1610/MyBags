
import {  ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../Styles/appbar";
import SearchIcon from '@mui/icons-material/Search';

import Actions from "./Actions";


export default function AppBarDesktop({matches}){
  

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
        </MyList>
            <Actions/>
           
            
        

       </AppbarContainer>




    
    
    );
    
    
    }