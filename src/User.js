import React from "react";

export default function User() {

    const [nameUser, setNameUser] = React.useState("catanacomics");

    function pencilButton() {
        const newNameUser = prompt("Digite seu nome de usuário!");
        (newNameUser === "" || newNameUser === null) ? setNameUser(nameUser) : setNameUser(newNameUser);
    }

    return (
        <div className="usuario">
            <img src="assets/img/catanacomics.svg" alt="imagem de perfil" />
            <div className="texto">
                <span>
                    <strong>{nameUser}</strong>
                    <ion-icon name="pencil" onClick={pencilButton}></ion-icon>
                </span>
            </div>
        </div>
    )
}

