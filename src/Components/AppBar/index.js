import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppBarDesktop from "./AppBarDesktop";
import AppbarMobile from "./AppbarMobile";



 function Appbarfn(){
    const theme =useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    return(
        <>
        {matches ? (<AppbarMobile  matches={matches}/>):( <AppBarDesktop  matches={matches}/>)}
        </>
    );
}
export default Appbarfn;