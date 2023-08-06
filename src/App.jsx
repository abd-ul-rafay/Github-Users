import { useEffect, useState } from 'react';
import './App.css';
import User from "./User";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://api.github.com/users');
                if (response.ok === false) {
                    setIsLoading(false);
                    setIsError(true);
                    return;
                }

                const data = await response.json();
                setUsers(data);
            } catch (err) {
                console.log(err);
                setIsError(true);
            }

            setIsLoading(false);
        }

        fetchUsers();
    }, []);

    if (isLoading) {
        return (
            <div className="container">
                <h1>Github Users</h1>
                <h2>Loading Users...</h2>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="container">
                <h1>Github Users</h1>
                <h2>Something went wrong...</h2>
            </div>
        );
    }

    return (
        <div className="container">
            <h1>Github Users</h1>
            {users.map((user) => <User key={user.id} name={user.login} avatar={user.avatar_url} url={user.html_url}/>)}
        </div>
    );  
}

export default App;
