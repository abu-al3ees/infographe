
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function form() {
    return (
        <div>
              
     

      <Card>
        <Card.Body style={{margin:'auto', width:'50%'}}>
          <Card.Title>Add Products</Card.Title>
          <Form >
            <Form.Group style={{ padding: "2px" }}>
              <Form.Control
                placeholder="Product Name"
                required={true}
                type="text"
                name="ProductName"
               
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Control
                placeholder="Product Discribtion"
                required={true}
                name="ProductDiscribtion"
                type="text"
              
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Control
                placeholder="product price"
                required={true}
                name="product price"
                type="text"
               
              ></Form.Control>
            </Form.Group>


           

            <Button variant="primary" type="submit" style={{marginLeft:'17rem'}}>
              Add Product
            </Button>
          </Form>
        </Card.Body>
      </Card>
        </div>
    )
}

export default form
