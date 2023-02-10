import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Link className='cardLink' to={`/product/${product._id}`}>
      <Card className='my-3 p-3 rounded product'>
        <Card.Img src={product.image} variant='top' />

        <Card.Body>
          <Card.Title as='div' className='productTitle'>
            <strong>{product.name}</strong>
          </Card.Title>

          <Card.Text as='div'>
            <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
          </Card.Text>

          {product.discount > 0 ? (
            <>
              <div class='ribbon'>
                <span className='discount'>{product.discount * 100}% Off</span>
              </div>
              <div className='d-flex mb-0'>
                <Card.Text as='h5' className='d-inline'>
                  ${Math.round(product.price * (1 - product.discount)) - 0.01}
                </Card.Text>
                <Card.Text as='h5' className='d-inline ms-auto text-muted'>
                  <s>${product.price}</s>
                </Card.Text>
              </div>
            </>
          ) : (
            <Card.Text as='h5' className='mb-2'>
              ${product.price}
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </Link>
  )
}

export default Product
