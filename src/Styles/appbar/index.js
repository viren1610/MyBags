import { Typography,List } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box, } from "@mui/system";
import { Colors } from "../theme";

export const AppbarContainer =styled(Box)(({})=>({
    display:"flex",
    alignItem:"center",
    justifyContent:"center",
    padding:"1px 2px"
}))

export const AppbarHeader=styled(Typography)(({})=>({
    padding:'4px',
    flexGrow: 1,
    fontSize:'4rem',
    color:Colors.secondary,
}))

export const MyList= styled(List)(({type})=>({
display:type==='row'?'flex':'block',
alignItems:'center',
justifyContent:'center',
flexGrow:2,
}))