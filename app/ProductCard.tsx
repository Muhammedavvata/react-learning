import "./ProductCard.css";

type ProductCardProps = {
    name: string,
    price: number,
    inStock: boolean,
    description?: string
}
function ProductCard({ name, price, inStock, description="Not specified" }: ProductCardProps) {
    return(
        <div className="product-card">
            <h2>{name}</h2>
            <p>Price: ${price.toFixed(2)}</p>
            <p className={inStock ? "in-stock" : "out-of-stock"}>{inStock ? "In Stock" : "Out of Stock"}</p>
            <p>{description}</p>
        </div>
    )
};



export default ProductCard;