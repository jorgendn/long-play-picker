import { useCurrentUser, useLogout } from '../../hooks/authentication-hooks';
import Header from '../Header';

function Authenticated() {
    const { data: currentUser } = useCurrentUser();

    const logoutQuery = useLogout();

    return (
        <>
            <Header />
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
        </>
    );
}

export default Authenticated;
