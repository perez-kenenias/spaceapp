
interface BannerProps {
    titulo: string
}

const Banner = ({ titulo }: BannerProps) => {

    if (!titulo)
        return;
    return (
        <figure className='banner'>
            <h1 className='titulo'>
                {titulo}
            </h1>
        </figure>
    )
}

export default Banner