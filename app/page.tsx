import Button from "./Button";
import NameInput from "./NameInpute";
import ProductCard from "./ProductCard";
import UserCard from "./UserCard";
import EventChallenge from "./EventChallenge";


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
      <p>  **********************************    </p>
      <h1>Events</h1>
      <Button firstButton="Hello Mohammed!" secondButton="Goodbye Mohammed!" />
      <p>  **********************************    </p>
      <h1>Stage 6 - Events</h1>
      <NameInput />
      <p> ***********************************  </p>
      <EventChallenge />
    </>
  );
}

export default Home;