import { Box, height } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";
import { Typography } from "@mui/material";

export const BannerContainer=styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:"100%",
    height:"100%",
    padding:"0px 0px",
    background: Colors.light_gray,
    [theme.breakpoints.down('sm')] :  {
        flexDirection:'initial',
        alignItems:'center',
    }

}));

export const BannerContent=styled(Box)(({theme})=>({
    display:'flex',
    alignItems:"center",
    justifyContent:'center',
    padding:'30px',
    flexDirection:'column',
    [theme.breakpoints.down('sm')]:{
        flexDirection:''
    }   
}))


export const BannerTitle =styled(Typography)(({theme})=>({
       lineHeight:'1.5',
       fontSize:'72px',
       marginBottom:'20px',
       [theme.breakpoints.down('sm')]:{
        fontSize:'42px',
       }
}))

export const BannerDescription =styled(Typography)(({theme})=>({
    lineHeight:'1.25',
    marginBottom:'3em',
    letterSpacing:'1.25',
    [theme.breakpoints.down('sm')]:{
        lineHeight:'1.15',
        marginBottom:'1.5em',
        letterSpacing:'1.15',
    }
}))

