import { Card, Button } from "antd";

function Basket({products, cartProducts, handleRemoveFromCart}) {
    return(
    <div>    
      <h1>your cart</h1>             
      <div>
      {cartProducts.length > 0
        ? cartProducts.map(productID => {
          const productIndex = products.findIndex(product => {
            return product.id === productID;
          });
          let { name, id, price, photo } = products[productIndex];
            return (
            <div className="main-basket">
              <Card key={id}>
              
              <div className="box">
                <p>{name}</p>
                <img src={photo} width="150px" alt="image" />
                
                <Button
                  onClick={() => handleRemoveFromCart(id)}
                  className="delete"
                  danger
                >
                  un-cart
                </Button>
                
                <p>{price}</p>
              </div>
              
              </Card>
              </div>
              );
            })
        : <p>your cart is empty <img src="https://img.icons8.com/?size=100&id=678&format=png&color=000000" width="20px" alt="sad"/> </p>}
        </div>
      </div>
  );
}; 

export default Basket;