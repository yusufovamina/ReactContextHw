function User({name, department, position, index}) {
    return (
        <li>
            <p>{name}</p>
            <p>{department}</p>
            <p>{position}</p>
            <button onClick={() => deleteUser(index)}>X</button>
        </li>
    )
}

export default User