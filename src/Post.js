import React from "react";

export default function Post() {

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

    const [savePost, setSavePost] = React.useState("bookmark-outline");

    function savePostButton() {
        (savePost === "bookmark-outline" ? setSavePost("bookmark") : setSavePost("bookmark-outline"))
    }

    return (
        <div className="posts">

            {postPack.map((post, index) => {
                return (
                    <div key={index} className="post">
                        <div className="topo">
                            <div className="usuario">
                                <img src={post.srcAvatarPost} alt={post.nameAlt} />
                                {post.nameAlt}
                            </div>
                            <div className="acoes">
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                        </div>

                        <div className="conteudo">
                            <img src={post.srcPost} alt={post.altPost} />
                        </div>

                        <div className="fundo">
                            <div className="acoes">
                                <div>
                                    <ion-icon name="heart-outline"></ion-icon>
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </div>
                                <div>
                                    <ion-icon name={savePost} onClick={savePostButton}></ion-icon>
                                </div>
                            </div>

                            <div className="curtidas">
                                <img src={post.srcLike} alt={post.altLike} />
                                <div className="texto">
                                    Curtido por <strong>{post.altLike}</strong> e <strong>outras {post.numberLikes.toFixed(3)} pessoas</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}