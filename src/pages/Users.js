import React from 'react'

const users = [
    {
        id: 1,
        name: 'Darkhan',
        lastName: 'Ashirbay'
    },
    {
        id: 2,
        name: 'John',
        lastName: 'Doe'
    },
    {
        id: 3,
        name: 'Lorem',
        lastName: 'Ipsum'
    }
]

const Users = () => {
    return (
        <>
            {users.map(item => (
                <div class="card">
                    <div class="card-body">
                       {item.name} {item.lastName}
                    </div>
                </div>
            ))}

        </>
    )
}

export default Users