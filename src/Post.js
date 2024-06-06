import React, { useState } from "react";

export default function Post({index, post}) {
    const [savePost, setSavePost] = useState("bookmark-outline");

    function savePostButton() {
        (savePost === "bookmark-outline" ? setSavePost("bookmark") : setSavePost("bookmark-outline"));
    }

    return (
        <div className="posts">
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
        </div>
    );
}