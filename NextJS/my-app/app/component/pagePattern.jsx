import Link from 'next/link'


export default function PagePattern() {

    const colors = {
        text: 'yellow'
    }

    const postList = [
        {
            title: 'título',
            textPreview: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quasi labore quae, minima necessitatibus facere quaerat eum itaque 
            voluptates qui laudantium dolore reprehenderit voluptate libero 
            omnis ad quod nulla! Culpa, sit.`,
            imagePreview: 'img',
            postOwner: 'nome sobrenome'
        }
    ]

    return(
        <div>
            <div className="container">

                <div className="header">
                    <Link href="/">
                        <h1 id="logo_text">CesMusic</h1>
                    </Link>

                    <input 
                        type="text" 
                        name="search" 
                        id="search" 
                        placeholder="Pesquise alguma postagem aqui" 
                    />

                </div>

            </div>
        </div>
    )
}