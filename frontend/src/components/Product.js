import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded product">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="productTitle">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} Reviews`}
          />
        </Card.Text>

        {product.discount > 0 ? (
          <>
            <div class="ribbon">
              <span>{product.discount * 100}% Off</span>
            </div>
            <Card.Text as="h5" className="d-inline">
              ${Math.floor(product.price * (1 - product.discount)) - 0.01}
            </Card.Text>
            <Card.Text as="h5" className="d-inline ms-5 text-muted">
              <s>${product.price}</s>
            </Card.Text>
          </>
        ) : (
          <Card.Text as="h5">${product.price}</Card.Text>
        )}
      </Card.Body>
    </Card>
  )
}

export default Product
