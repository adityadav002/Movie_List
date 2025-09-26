import { CiUser } from "react-icons/ci";
import UserCard from '../component/UserCard'
import axios from 'axios';
import { useEffect, useState } from 'react';

function UserManagement() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/fetch/users`);
        setUsers(response.data);
      }
      catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
    <h1 className="add-movie-logo">
            <CiUser />
            User Record
          </h1>
    <UserCard users={users}/>
    </>
  )
}

export default UserManagement