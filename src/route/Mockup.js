import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import avatar from '../assets/images/img_avatar3.png'
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';



const MockCard = () => {
    const state = useSelector(state => state);

    return <>
        <Card sx={{ maxWidth: 350 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    // height="250"
                    image={avatar}
                    alt="user avatar"
                    />
                <CardContent>
                    <Typography 
                        gutterBottom variant="h6" 
                        component="div">
                            Тип : { state.stringType }
                    </Typography>
                    <Typography 
                        // gutterBottom variant="h5" 
                        variant="body1" 
                        color="text.secondary">
                            Значение : { state.data }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </>
}


const Mockup = () => {
    const dispatch = useDispatch();

    return (
        <StyledMockupComponent>
            <StyledMockup>
                <MockCard />
            </StyledMockup>
            <Button 
            component={RouterLink} to="/"
            onClick={() => dispatch({type: 'SET-CLEAR-STORE'})}
            >
                <ArrowBackIosNewIcon color="primary" fontSize="large"  
                />
            </Button>
        </StyledMockupComponent>
    )
}



const StyledMockupComponent = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  a{
      position: absolute;
      right: 5%;
      bottom: 7%;
  }
  @media (max-width: 500px){
    a{
      position: absolute;
      right:0%;
      bottom: 3%;
    }
  }
`

const StyledMockup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export default Mockup;