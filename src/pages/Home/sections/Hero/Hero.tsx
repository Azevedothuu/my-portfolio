import styled from "@emotion/styled"
import Avatar from "../../../../assets/images/Avatar.jpg"
import { Container, Grid } from "@mui/material"


const Hero = () => {

    const StyledHero = styled("div")(()=> ({
        backgroundColor: "black"
        
    }))

    const StyledImg = styled("img")(()=> ({
        width: "30%",
        borderRadius: "50%",
        
    }))

  return (
    <>
      <StyledHero>
        <Container>

        <Grid>
    <StyledImg src={Avatar} />

        </Grid>

</Container>

        
    
      </StyledHero>
    </>
  )
}

export default Hero
