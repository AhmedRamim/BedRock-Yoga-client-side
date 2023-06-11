

// save user in the database
export const saveUser = (user) =>  {
    console.log('this is saveUser',user);
    const currentUser = {
        name:user?.displayName,
        email:user?.email,
    }
        fetch(`${import.meta.env.VITE_url}/users/${user?.email}`,{
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