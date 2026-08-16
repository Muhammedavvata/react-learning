import "./UserCard.css";

type UserCardProps = {
  name: string,
  age: number,
  isPremium: boolean
}
function UserCard({name,age,isPremium}: UserCardProps) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      {isPremium && <p>⭐ Premium User</p>}
    </div>   
  )
};
export default UserCard;