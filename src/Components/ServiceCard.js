import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { SERVICECARDITEM } from '../serviceCardItem';


export default function ServiceCard(props) {
  return (
    <div className='Card-service'>
      
    <Card sx={{ maxWidth: 300 ,height:400}}>
   

      <CardMedia
        sx={{ height: 150, width: 150 }}
         image={props.icon}
        
      />

      <CardContent>
        
        <Typography gutterBottom variant="h5" component="div">
    {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
 {props.description}
        </Typography>
      </CardContent>
      <CardActions >
      
        <Button  size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  );
}