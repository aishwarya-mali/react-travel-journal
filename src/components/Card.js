export default function Card(props) {
    const { data } = props
    return (
        <section className='card'>
            <img src={data.imageUrl} alt={data.title} />
            <div className='card--info'>
                <div className='card--header'>
                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.57866 5.25002C2.65532 5.25002 1.90837 4.50221 1.90837 3.57965C1.90837 2.65757 2.65532 1.90911 3.57866 1.90911C4.50167 1.90911 5.24927 2.65757 5.24927 3.57965C5.24927 4.50221 4.50167 5.25002 3.57866 5.25002ZM3.48394 0C1.54227 0 0 1.63678 0 3.65569C0 6.40791 2.95078 9.25191 2.95078 9.25191C3.34777 9.62783 3.59437 9.65847 4.01646 9.25191C4.01646 9.25191 7 6.40791 7 3.65569C7 1.63678 5.42544 0 3.48394 0Z" fill="#F55A5A" />
                    </svg>
                    <div className='card--city'>{data.location}</div>
                    <a className='card--gmap' href={data.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{data.title}</h1>
                <h5>{data.startDate} - {data.endDate}</h5>
                <p>{data.description}</p>
            </div>
        </section>
    )
}