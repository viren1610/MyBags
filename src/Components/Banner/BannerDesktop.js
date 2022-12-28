import { Typography } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerTitle } from "../../Styles/Banner";


export default function BannerDesktop(matches){
return(

<BannerContainer>
<BannerContent>
    <Typography variant="h6">Huge Collection</Typography>
    <BannerTitle>SALEEEEEEE</BannerTitle>
    <BannerDescription variant="subtitle">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    </BannerDescription>
</BannerContent>
</BannerContainer>

);

}