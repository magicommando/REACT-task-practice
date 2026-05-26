function UserCard(props) {
  return (
    <div className="user-card">
      <h1 className="pixel-font">{props.name}</h1>
      <p>Email: {props.email}</p>
      <p>Age: {props.age}</p>
      <p>Location: {props.location}</p>
      <p>Occupation: {props.occupation}</p>
      <p>Hobbies: {props.hobbies}</p>
    </div>
  );
}
export default UserCard;