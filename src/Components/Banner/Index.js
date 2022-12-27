import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import BannerDesktop from "./BannerDesktop";
import BannerMobile from "./BannerMobile";

export default function Bannerfn(){

const theme =useTheme()
const matches =useMediaQuery(theme.breakpoints.down('md'));

return(
    matches?<BannerMobile/>:<BannerDesktop/>
);

}