import styles from '../styles/credentialPage.module.css'

import Link from 'next/link'

export default function CredentialPage(props) {
    return (
        <div className={`${styles.container}`}>

            <h1 id={styles.logo_text}><Link href={'/'}>CesMusic</Link></h1>

            <form className={`${styles.credential_area}`}>
                <h1>Entre na sua conta</h1>                
                <input 
                    className={`${styles.input_box}`}
                    type="text" 
                    name="email" 
                    id="email" 
                    placeholder='Email'
                />
                <input 
                    className={`${styles.input_box}`}
                    type="text" 
                    name="password" 
                    id="password" 
                    placeholder='Password'
                />

                <button 
                    type="submit"
                    id={`${styles.login_bttn}`}>
                        Login
                </button>
                
                <h2>Quer se registrar? <span id={`${styles.register_span}`}><Link href={'/register'}>Clique aqui</Link></span></h2>
            </form>

        </div>
    )
}