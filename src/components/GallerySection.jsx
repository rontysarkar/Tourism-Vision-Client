
const GallerySection = () => {

    const data = [
        {
            imageLink:
                "https://i.ibb.co/ckdtVPF/SRL-image-1.png",
        },
        {
            imageLink:'https://i.ibb.co/G5Y1sVQ/SRL-image-5.png'
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
        },
        {
            imageLink:
                "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        },
        {
            imageLink:'https://i.ibb.co/J5yzYdL/SRL-image-7.png'
        },
        {
            imageLink:'https://i.ibb.co/42WZHt5/SRL-image-13.png'
        },
        {
            imageLink:'https://i.ibb.co/d43WhhS/SRL-image-2.png'
        },
        {
            imageLink:
                "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
        },
        {
            imageLink:'https://i.ibb.co/YdVSgDP/best-things-to-do-phnom-penh-image-5.jpg'
        },
    ];


    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {data.map(({ imageLink }, index) => (
                <div key={index}>
                    <img
                        className="h-56 w-full max-w-full rounded-lg object-cover object-center"
                        src={imageLink}
                        alt="gallery-photo"
                    />
                </div>
            ))}
        </div>
    );
};

export default GallerySection;