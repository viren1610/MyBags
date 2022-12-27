import { Typography,List } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box, } from "@mui/system";
import { Colors } from "../theme";

export const AppbarContainer =styled(Box)(({})=>({
    display:"flex",
    alignItem:"center",
    justifyContent:"center",
    padding:"2px 8px"
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

export const ActionIconsConatinerMobile=styled(Box)(()=>({
    display:"flex",
    backgroundColor:Colors.dim_grey,
    position:"fixed",
    bottom:0,
    left:0,
    width:"100%",
    alignItems:'center',
    zIndex:99,
    borderTop: "1px solid"
}))

export const ActionIconsConatinerDesktop=styled(Box)(()=>({
    flexGrow:0

}))