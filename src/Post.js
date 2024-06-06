import React, { useState } from "react";

export default function Post({ post }) {
    const [savePost, setSavePost] = useState("bookmark-outline");
    const [like, setLike] = useState("heart-outline");
    const [heartColor, setHeartColor] = useState("#000");
    const [numberLike, setNumberLike] = useState(post.numberLikes);
    const [isLiked, setIsLiked] = useState(false);
    const [iconHeartScreen, setIconHeartScreen] = useState("none")

    function savePostButton() {
        (savePost === "bookmark-outline" ? setSavePost("bookmark") : setSavePost("bookmark-outline"));
    }

    function likeHeart() {
        if (like === "heart-outline") {
            setLike("heart");
            setHeartColor("#FF3040");
            setNumberLike(number => number + 0.001);
        } else {
            setLike("heart-outline");
            setHeartColor("#000000");
            setNumberLike(number => number - 0.001);
            setIconHeartScreen("none");
            setIsLiked(false);
        }
    }

    function imageClick() {
        if (!isLiked) {
            setLike("heart");
            setHeartColor("#ff0000");
            setNumberLike(number => number + 0.001);
            setIconHeartScreen("flex");
            setIsLiked(true);
        }
    }

    return (
        <div className="posts">
            <div className="post">
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
                    <ion-icon name="heart" style={{display: iconHeartScreen}}></ion-icon>
                    <img src={post.srcPost} alt={post.altPost} onDoubleClick={imageClick} />
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
                            Curtido por <strong>{post.altLike}</strong> e <strong>outras {numberLike.toFixed(3)} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}