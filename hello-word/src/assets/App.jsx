import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
  const formatUserName = (userName) => `@${userName}`

  const [name, setName] = useState('angelica')

  const data = [
    {
      userName: 'midudev',
      name: 'Miguel Angel Duran',
      isFollowing: true
    },
    {
      userName: 'natioterom',
      name: 'Natalia Otero',
      isFollowing: true
    },
    {
      userName: 'yessblack',
      name: 'Angelica Garcia',
      isFollowing: false
    },
    {
      userName: 'gemes',
      name: 'Leandro Garcia',
      isFollowing: false
    }
  ]

  return (
    <section className='App'>
      {
        data.map(({userName, name, isFollowing }) => (
            <TwitterFollowCard 
              key={userName}
              formatUserName={formatUserName} 
              userName={userName} 
              inicialIsFollowing={isFollowing}
              name={name}/>
          ))}

        {/* <button onClick={() => setName('Jose')}>
          Cambiar nombre
          </button> */}
    </section>
  )
}

