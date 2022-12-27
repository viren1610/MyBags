import { ShoppingCart } from "@mui/icons-material";
import { ButtonGroup, ListItemButton, ListItemIcon, } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ActionIconsConatinerDesktop, MyList } from "../../Styles/appbar";
import { ActionIconsConatinerMobile } from "../../Styles/appbar";


export default function Actions({matches}){

const Components= matches 
? ActionIconsConatinerMobile  
: ActionIconsConatinerDesktop;

return(
<Components>


<MyList type="row"  sx={{justifyContent:'center'}}>

    
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
    
</MyList>

</Components>

);
}