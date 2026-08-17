"use client";

function EventChallenge(){
    function handleChallenge(event: React.ChangeEvent<HTMLInputElement>) {
        console.log("Name:", event.target.value);
    }
    function handleHello() {
        console.log("Hello!");
    }

    function handleGoodbye() {
        console.log("Goodbye!");}
    return(
        <>
        <button onClick={handleHello}>
            Hello
        </button>
        <button onClick={handleGoodbye}>
            Goodbye
        </button>
        <input 
        type="text" 
        onChange={handleChallenge}
        placeholder="Enter your name"
         />
        </>
        
    );
  
};
export default EventChallenge;