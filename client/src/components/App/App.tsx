import { useCurrentUser, useLogout } from '../../hooks/authentication-hooks';
import Header from '../Header';
import Login from '../Login';

function App() {
    const { data: currentUser, isSuccess, isPending } = useCurrentUser();

    const logoutQuery = useLogout();

    if (isPending) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Header />
            {isSuccess ? (
                <p>
                    Hello {currentUser.displayName}!{' '}
                    <button
                        onClick={() => {
                            logoutQuery.mutate();
                        }}
                    >
                        Log out
                    </button>
                </p>
            ) : (
                <Login />
            )}
        </>
    );
}

export default App;
