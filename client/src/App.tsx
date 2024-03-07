import { useCurrentUser } from "./hooks/authentication-hooks"

function App() {
  const { data: currentUser, isSuccess, isPending } = useCurrentUser();

  if (isPending) {
    return <p>Loading...</p>
  }

  return isSuccess ?
    <p>Hello {currentUser}!</p> :
    <p>Please log in.</p>
}

export default App
