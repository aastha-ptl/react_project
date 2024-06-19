import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react'
import { useEffect } from 'react'
const Usercomponent = () => {
    const [users, setUsers] = useState([])
    const fetchDataHandler = async () => {
        const url = 'https://jsonplaceholder.typicode.com/users'
        const response = await fetch(url)
        let data = await response.json()
        setUsers(data)
        console.log(data)
    }
    useEffect(() => { fetchDataHandler() }, [])
    const deletedata = (userid) => {
        const reuser = users.filter((user) => user.id !== userid);
        setUsers(reuser);
        // users.splice(userid,1)
        // setUsers([...users])
        console.log(userid);

    }
    if(users.length === 0){
        return <p>User is not found</p>
    }

    return (
        <>
            {/* <button  onClick={fetchDataHandler}>Fetch data</button> */}

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>
                                    <button onClick={() => { deletedata(user.id); }} >Delete</button>
                                    <FontAwesomeIcon
                                        icon={faTrashAlt}
                                        onClick={() => {
                                            deletedata(user.id);
                                        }}
                                        style={{ color: "green", cursor: "pointer"}}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}




export default Usercomponent
