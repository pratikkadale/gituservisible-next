import React from 'react'
import Card from '@/components/Card'
export default async function({ params }) {

  const username = params.slug;

  const response = await fetch(`https://api.github.com/users/${username}`)
   const res = await response.json()
  console.log(res)
  return (
    <div>
        <main>

        <Card avatar_url={res.avatar_url} username={res.login} name={res.name} public_repos={res.public_repos} public_gists={res.public_gists} created_at={res.created_at}/>
        </main>
    </div>
  )
}

