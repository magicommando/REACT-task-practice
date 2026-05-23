function UserCard2({subject, ID}) {
    return (
        <div className="user-card">
            <h1>{subject}</h1>
            <p>{ID}</p>
        </div>
    );
}
export default UserCard2;