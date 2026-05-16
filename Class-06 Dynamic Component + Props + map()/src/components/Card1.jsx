const Card1 = (
    { name = 'hassan', profession = 'Developer', age = 20
        , experience = 1, city = 'Karachi', imageUrl = 'https://images.unsplash.com/photo-1761839258575-038fef381ee7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D' }) => {
    return (
        <div>
            <p>{name}</p>
            <p>{age}</p>
            <p>{profession}</p>
            <p>{experience}</p>
            <p>{city}</p>
            <img
                src={imageUrl}
                alt=""
            />
        </div>
    )
}

export default Card1;