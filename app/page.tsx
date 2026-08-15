import ProductCard from "./ProductCard";
import UserCard from "./UserCard";


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
      <p>  **********************************    </p>
      <UserCard name="Ahmad" age={30} isPremium={true} />
      <p>  ----------------    </p>
      <UserCard name="Ali" age={25} isPremium={false} />
    </>
  );
}

export default Home;