import { useCurrentUser, useLogout } from "../../hooks/authentication-hooks"
import Login from "../Login";

function App() {
  const { data: currentUser, isSuccess, isPending } = useCurrentUser();

  const logoutQuery = useLogout();

  if (isPending) {
    return <p>Loading...</p>
  }

  return isSuccess ?
    <p>Hello {currentUser.displayName}! <button onClick={() => { logoutQuery.mutate() }}>Log out</button></p> :
    <Login />
}

export default App
