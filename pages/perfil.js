import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Layout from '../components/layout'
import AccessDenied from '../components/access-denied'
import styles from "./profile.module.css"

export default function Page() {
    const { data: session, status } = useSession()
    const loading = status === 'loading'
    const [ content , setContent ] = useState()

    if(session){const {user} = session;}

    if (!session) { return  <Layout><AccessDenied/></Layout> }

    console.log(session);
  return (
    <Layout>
      <h1>Pagina de perfil de {user.name}</h1>
      <img src={user.image} className={styles.profilePhoto}></img>
      <h3>
          y este es su correo: {user.email}
      </h3>
      <p><strong>{content || "\u00a0"}</strong></p>
    </Layout>
  )
}
