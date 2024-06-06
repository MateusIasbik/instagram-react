import React, { useState } from "react";

export default function Post({ post, index }) {
    const [savePost, setSavePost] = useState("bookmark-outline");
    const [like, setLike] = useState("heart-outline");
    const [heartColor, setHeartColor] = useState("#000");

    function savePostButton() {
        (savePost === "bookmark-outline" ? setSavePost("bookmark") : setSavePost("bookmark-outline"));
    }

    function likeHeart() {
        if (like === "heart-outline") {
            setLike("heart");
            setHeartColor("#ff0000");
        } else {
            setLike("heart-outline");
            setHeartColor("#000000");
        }
    }

    function imageClick() {
        setLike("heart");
        setHeartColor("#ff0000");
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
                    <img src={post.srcPost} alt={post.altPost} onClick={imageClick}/>
                </div>

                <div className="fundo">
                    <div className="acoes">
                        <div>
                            <ion-icon name={like} onClick={likeHeart} style={{ color: heartColor }}></ion-icon>
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