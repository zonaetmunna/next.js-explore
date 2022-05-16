import Link from 'next/link';
import React from 'react'

const users = ({users}) => {
    console.log(users);
  return (
    <div>
        <h2>users: {users.length}
        {
            users.map(user=><ul>
                <li>{user.name}</li>
                <li>{user.phone}</li>
                <button><Link href={`/dashboard/${user.id}`}><a>explore</a></Link></button>
            </ul>)
        }
        </h2>
    </div>
  )
}

export default users;

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
  
    return {
      props: {
        users,
      },
    }
  }