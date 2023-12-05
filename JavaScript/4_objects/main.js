const users = [
    user1 = {
        name: 'Cristobal Lepe',
        age: 25,
        email: 'cristoballepegarcia@gmail.com',
        income: 500,
        location: 'San Fernando',
}, 
    user2 = {
        name: 'George Constantine',
        age: 28,
        email: 'omghisfourty@gmail.com',
        income: 1000,
        location: 'Curico',
}, 
    user3 = {
        name: 'Emma Lepe',
        age: 3,
        email: 'emma@gmail.com',
        income: 100,
        location: 'Santiago',
}]

const div = document.querySelector('#user')
users.map((user) => {
    div.innerHTML += `
    <p class="user">
        Name: ${user.name}
        <br/>
        Age: ${user.age}
        <br/>
        Email: ${user.email}
        <br/>
        Income: ${user.income}
        <br/>
        Location: ${user.location}
    </p>
`
})



//user.push(user1, user2, user3)
//console.log(user)