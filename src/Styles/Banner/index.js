import { Box, height } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const BannerContainer=styled(Box)(()=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:"100%",
    height:"100%",
    padding:"0px 0px",
    background: Colors.light_gray

}));