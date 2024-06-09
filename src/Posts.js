import Post from "./Post";


export default function Posts() {

    const postPack = [
        {
            srcAvatarPost: "assets/img/meowed.svg", nameAlt: "meowed",
            srcPost: "assets/img/gato-telefone.svg", altPost: "gato-telefone",
            srcLike: "assets/img/respondeai.svg", altLike: "respondeai", numberLikes: 101.523
        },
        {
            srcAvatarPost: "assets/img/barked.svg", nameAlt: "barked",
            srcPost: "assets/img/dog.svg", altPost: "dog",
            srcLike: "assets/img/adorable_animals.svg", altLike: "respondeai", numberLikes: 99.159
        },
        {
            srcAvatarPost: "assets/img/9gag.svg", nameAlt: "9gag",
            srcPost: "assets/img/paris.webp", altPost: "paris",
            srcLike: "assets/img/chibirdart.svg", altLike: "Chibirdart", numberLikes: 80.800
        }
    ];


    return (
        <>
            {
                postPack.map((post, index) => {
                    return <Post post={post} key={index} />
                })}
        </>
    )
}