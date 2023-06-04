import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserCard from "../user-card/User-card";
import Pagination from "../pagination/pagination";

axios.defaults.baseURL = "https://647a1260a455e257fa644557.mockapi.io/api/tweets/";

const App = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);

  const notify = () => toast("that's it, no more tweets!");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/users?page=${page}&limit=4`);
        const { data } = response;

        if (data.length < 4) {
          setHasNextPage(false);
        }

        setUsers(prevUsers => [...prevUsers, ...data]);

        if (!hasNextPage) {
          notify();
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [page, hasNextPage]);

  const handleButtonClick = async (_, user) => {
    const updatedFollowers = user.isFollowing ? user.followers - 1 : user.followers + 1;

    try {
      await axios.put(`/users/${user.id}`, { followers: updatedFollowers, isFollowing: !user.isFollowing });

      setUsers(prevUsers =>
        prevUsers.map(prevUser =>
          prevUser.id === user.id ? { ...prevUser, followers: updatedFollowers, isFollowing: !user.isFollowing } : prevUser
        )
      );
    } catch (error) {
      console.log('Ошибка при обновлении количества фолловеров:', error);
    }
  };

  const handlePaginationClick = () => {
    if (hasNextPage) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <UserCard users={users} onClick={handleButtonClick} />
      { hasNextPage && <Pagination onClickPagination={handlePaginationClick} />}
      <ToastContainer />
    </div>
  );
}

export default App;