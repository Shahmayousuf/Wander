import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = (props) => {

  return (
   
        
        
        <div className="productcard">
       <Card  className='card' >
      <Card.Img className='images' variant="top" src={props.image}/>
      <Card.Body>
        <Card.Title className='title'>{props. title}</Card.Title>
        <Card.Text style={{color:'black',fontSize:'20px',fontFamily:'serif'}}>
        {props.Activity}
        </Card.Text>
        <Card.Text style={{fontSize:'18px',color:'black'}} >INR {props.Price}</Card.Text>
        <Button  variant="primary">view</Button>
      </Card.Body>
    </Card>
        
        </div>
     
    
  )
}

export default ProductCard
