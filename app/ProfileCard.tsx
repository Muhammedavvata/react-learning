import Skilles from "./Skilles";

function ProfileCard(){
    const name = "Muhammed";
    const jop = "Frontend Developer";
    return(
        <div>
            <h1>My Profile</h1>

            <h3>{name}</h3>
            <h3>{jop}</h3>

            <p>I am currently learning React.</p>

            <Skilles/>

            <h3>Contact Me</h3>
        </div>
    );
}

export default ProfileCard;