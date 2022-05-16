import { useState } from "react";
import { createClient, Provider } from "urql";
import TopBar from "../components/TopBar.js";
import UserList from "../components/UserList.js";
import Messages from "../pages/Messages.js";

const client = createClient({
  url: "https://api.github.com/graphql",
  fetchOptions: {
    headers: { authorization: `Bearer ${process.env.REACT_APP_GH_TOKEN}` },
  },
});

export default function Home({ page }) {
  const [usernames, setUsernames] = useState([]);
  const [maxUsersReached, setMaxUsersReached] = useState(false);
  const [userAlreadyAdded, setUserAlreadyAdded] = useState(false);
  const [userAdded, setUserAdded] = useState(false);

  const addUserToList = (username) => {
    if (usernames.length === 8) {
      setMaxUsersReached(true);
      setTimeout(() => setMaxUsersReached(false), 2000);
    } else if (usernames.includes(username)) {
      setUserAlreadyAdded(true);
      setTimeout(() => setUserAlreadyAdded(false), 2000);
    } else {
      setUserAdded(true);
      if (!usernames.includes(username))
        setUsernames((usernames) => [...usernames, username]);
      setTimeout(() => setUserAdded(false), 2000);
    }
  };

  return (
    <Provider value={client}>
      <TopBar
        page={page}
        usernames={usernames}
        setUsernames={setUsernames}
        maxUsersReached={maxUsersReached}
        setMaxUsersReached={setMaxUsersReached}
        userAlreadyAdded={userAlreadyAdded}
        setUserAlreadyAdded={setUserAlreadyAdded}
        addUserToList={addUserToList}
        userAdded={userAdded}
        setUserAdded={setUserAdded}
      />
      <div className="mt-28 sm:mt-20">
        {page === "UserList" && (
          <UserList
            usernames={usernames}
            setUsernames={setUsernames}
            setMaxUsersReached={setMaxUsersReached}
            setUserAlreadyAdded={setUserAlreadyAdded}
            addUserToList={addUserToList}
          />
        )}
        {page === "Messages" && <Messages />}
      </div>
    </Provider>
  );
}
