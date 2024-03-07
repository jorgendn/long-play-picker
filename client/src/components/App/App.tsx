import { useCurrentUser } from "../../hooks/authentication-hooks"
import Login from "../Login";

function App() {
  const { data: currentUser, isSuccess, isPending } = useCurrentUser();

  if (isPending) {
    return <p>Loading...</p>
  }

  return isSuccess ?
    <p>Hello {currentUser.displayName}!</p> :
    <Login />
}

export default App
