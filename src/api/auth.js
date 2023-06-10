// save user in the database
export const saveUser = (user) =>  {
    const currentUser = {
        email:user.email,
        role:'student'
    }
    fetch(`http://localhost:5000/users/${user?.email}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}