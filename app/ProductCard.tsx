type ProductCardProps = {
    name: string,
    price: number,
    inStock: boolean,
    description?: string
}
function ProductCard({ name, price, inStock, description="Not specified" }: ProductCardProps) {
    return(
        <div>
            <h2>{name}</h2>
            <p>Price: ${price.toFixed(2)}</p>
            <p style={{ color: inStock ? "green" : "red" }}>
            Status: {inStock ? "In Stock" : "Out of Stock"}
            </p>
            <p>{description}</p>
        </div>
    )
};



export default ProductCard;