

// save logged user in first time in the database
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

// save user role instructor database 
export const becomeInstructor = (email) =>  {
    // console.log('this is saveUser',user);
    const currentUser = {
       role:'instructor'
    }
        fetch(`${import.meta.env.VITE_url}/users/${email}`,{
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

// save user role admin  database
export const becomeAdmin = (email) =>  {
    // console.log('this is saveUser',user);
    const currentUser = {
       role:'admin'
    }
        fetch(`${import.meta.env.VITE_url}/users/${email}`,{
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
// save user class status  database

export const updateStatusApproved = async (id,refetch) => {
  const updateStatus = {
    status: 'approved',
  };

  const response = await fetch(`${import.meta.env.VITE_url}/allclasses/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(updateStatus),
  });

  const data = await response.json();

  refetch()

  return data;
};
// users class deny
export const updateStatusDeny = async (id,refetch) => {
  const updateStatus = {
    status: 'deny',
  };

  const response = await fetch(`${import.meta.env.VITE_url}/allclasses/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(updateStatus),
  });

  const data = await response.json();
  refetch()

  return data;
};

  