import "../style/UserCard.css"

function UserCard({ users }) {
  return (
    <>
      {users.length > 0 ? (
        users.map((user) => (
          <div className="card-extra" key={user._id}>
            <span><span style={{ color: "red" }}>User Name:</span> {user.name}</span>
            <span><span style={{ color: "red" }}>Email:</span> {user.email}</span>
            <span><span style={{ color: "red" }}>Created Date:</span> {new Date(user.createdAt).toLocaleDateString()}</span>
          </div>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </>
  );
}


export default UserCard;
