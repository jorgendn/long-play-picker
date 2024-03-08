import { useCurrentUser } from '../../hooks/authentication-hooks';
import Authenticated from '../Authenticated/Authenticated';
import Login from '../Login';

function App() {
    const { isSuccess, isPending } = useCurrentUser();

    if (isPending) {
        return <p>Loading...</p>;
    }

    return isSuccess ? <Authenticated /> : <Login />;
}

export default App;
