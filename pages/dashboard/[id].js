import React from 'react'

const user = ({idUser}) => {
  return (
    <div>{idUser.name}</div>
  )
}

export default user;

// path defined
export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = users.map((user) => ({
      params: { id: user.id.toString() },
    }))
    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const idUser = await res.json()
    // Pass  data to the page via props
    return { props: { idUser } }
  }