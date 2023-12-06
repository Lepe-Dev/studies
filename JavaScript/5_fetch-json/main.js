const users = document.querySelector('#users__display')
const getData = async() => {
    const response = await fetch('users.json')
    const data = await response.json()
    //console.log(data)
    return data
}
getData()

const displayUsers = async() => {
    let usersData = await getData()
    const dataDisplay = usersData.map((user) => {
        const {id, first_name, last_name, country, email, web_site} = user
        return `
            <div class='container'>
                <p>Id: ${id}</p>
                <p>First Name: ${first_name}</p>
                <p>Last Name: ${last_name}</p>
                <p>Country: ${country}</p>
                <p>Email: ${email}</p>
                <p>Web Site: ${web_site}</p>
            </div>
        `
    })
    users.innerHTML = dataDisplay.join('')
}
displayUsers()
