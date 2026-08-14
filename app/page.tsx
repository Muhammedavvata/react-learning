import ProductCard from "./ProductCard";

function Home() {
  return (
    <>
      <h1>Product Card Challenge</h1>
      <p>  **********************************   </p>
      <ProductCard name="iPhone 15"
      
      price={800.99} 
      inStock={true}
       description="New iPhone" />
      <p>  **********************************   </p>
       <ProductCard name="iPhone 16"
      
      price={800.99} 
      inStock={false}
       description="New iPhone" />
      <p>  **********************************   </p>
       <ProductCard name="iPhone 17"
      
      price={800.99} 
      inStock={true}
        />
    </>
  );
}

export default Home;