import { Card, Button } from "antd";
import Buttons from "./Buttons";
import { data } from "./data";

function Goods({products, cartProducts, handleAddProductToCart, handleRemoveFromCart, setProducts}) {

const chosenGoods = (searchTerm) => {
    const newGoods = data.filter(element => element.searchTerm === searchTerm);
    setProducts(newGoods);
}
    return(       
    <div>
        <div className="goods-header">
            <div>
                <h1>select a product</h1>  
            </div>          
            <div>
                <Buttons filteredGoods={chosenGoods}/>   
            </div>
        </div>
            <div className="goods">
            {products.map((product) => {
                const { id, name, price, photo } = product;
                let haveInCart = false;

                cartProducts.forEach(productID => {                          
                if (productID === id) {
                haveInCart = true;
                }
                });   

                return (<div className="main">
                    <Card key={id}>
                        <div className="box" >
                            <h3 className="name">{name}</h3>
                            <img src={photo} width="300px" alt="image" />
                                {!haveInCart ? (
                                    <Button
                                        onClick={() => handleAddProductToCart(id)}
                                        className="add"
                                    >add to cart</Button>
                                ) : (
                                    <Button
                                        onClick={() => handleRemoveFromCart(id)}
                                        className="delete"
                                        danger
                                    >un-cart</Button>
                                )}  
                                <p>{price}</p>
                        </div>
                    </Card>
                        </div>);
            })}
        </div>          
    </div>)
}

export default Goods;