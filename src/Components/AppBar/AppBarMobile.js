import { IconButton,  } from "@mui/material";
import {  AppbarContainer, AppbarHeader } from "../../Styles/appbar";
import MenuIcon from '@mui/icons-material/Menu';
import Actions from "./Actions";
import SearchIcon from '@mui/icons-material/Search';

export default function AppbarMobile({matches}){
return(

<AppbarContainer>
    <IconButton>
            <MenuIcon/>
    </IconButton>
        
    <AppbarHeader textAlign={'center' } variant='h4'>Mybags</AppbarHeader>
    <IconButton >
        <SearchIcon/>
    </IconButton>

    <Actions matches={matches}/>
</AppbarContainer>

);


}