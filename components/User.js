const User = ({user}) => {
    console.log(user)
    return (
        <>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </>
    )
}

export default User