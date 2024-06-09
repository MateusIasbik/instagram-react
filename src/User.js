import React, { useState } from "react";

export default function User() {

    const [nameUser, setNameUser] = useState("catanacomics");
    const [imgUser, setImgUser] = useState("./assets/img/catanacomics.svg")

    function pencilButton() {
        const newNameUser = prompt("Digite seu nome de usuário!");
        (newNameUser === "" || newNameUser === null) ? setNameUser(nameUser) : setNameUser(newNameUser);
    }

    function changeProfileImg() {
        const newProfileImg = prompt("Cole aqui o link da nova imagem de perfil");
        (newProfileImg === "" || newProfileImg === null) ? setImgUser(imgUser) : setImgUser(newProfileImg);

    }

    return (
        <div className="usuario">
            <img src={imgUser} alt="imagem de perfil" onClick={changeProfileImg}/>
            <div className="texto">
                <span>
                    <strong>{nameUser}</strong>
                    <ion-icon name="pencil" onClick={pencilButton}></ion-icon>
                </span>
            </div>
        </div>
    )
}

