import styles from '../styles/userPage.module.css'
import stylesB from '../styles/pagePattern.module.css'

import { CiUser } from "react-icons/ci";

import Link from 'next/link'

const likedPosts = [
    {
        title: "Título A",
        contentPreview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius non odit totam nam enim? ",
        date: "04/08/2024"
    },
    {
        title: "Título B",
        contentPreview: "Aliquam erat volutpat. Curabitur lacinia libero non libero sollicitudin, ac volutpat metus facilisis.",
        date: "01/08/2024"
    },
    {
      title: "Título C",
      contentPreview: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      date: "24/07/2024"
    },
    {
      title: "Título D",
      contentPreview: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      date: "22/07/2024"
    }
]

export default function UserPage() {

    return (
        <div className={styles.container}>

            <div className={`${styles.header}`}>

                <h1><Link href={'/'}>CesMusic</Link></h1>
                <CiUser id={styles.profile_icon}/>

            </div>

            <div className={`${styles.left_bar}`}>
                <h2 className='hover:cursor-pointer'>Meus Posts</h2>
                <h2 className='hover:cursor-pointer'>Posts Curtidos</h2>
            </div>

            <div className={`${styles.middle_screen}`}>
                {likedPosts.map((element, index) => (
                    <div key={index} className={`${styles.post}`}>

                        <div className={`${styles.title_and_text}`}>
                            <h1 children="font-semibold">{element.title}</h1>
                            <p>{element.contentPreview}</p>
                        </div>

                        <div className={styles.info_bellow}>
                            <button>
                                <p>Acessar Publicação</p>
                            </button>

                            <p id={styles.owner_name}>Data: {element.date}</p>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}