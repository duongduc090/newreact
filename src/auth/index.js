export const signIn = (dataUser) => {
    return fetch('http://localhost:4000/api/signin', 
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUser)
    })
        .then(response => response.json())
        .catch( error => console.log(error))
}
export const signUp = (dataUser) => {
    return fetch('http://localhost:4000/api/signup', 
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataUser)
            })
                .then(response => response.json())
                .catch( error => console.log(error))
}
export const signOut = (next) => {
    localStorage.clear();
    fetch('http://localhost:4000/api/signout', 
    {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .catch( error => console.log(error))
    next()
}
export const auth = (data, next) => {
    
    if(typeof window !== 'undefined'){
        localStorage.setItem('auth', JSON.stringify(data));
        next()
    }
}
