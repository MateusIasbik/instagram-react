
export default function Suggestion() {

    const suggestionsPack = [
        { src: "assets/img/bad.vibes.memes.svg", altName: "bad.vibes.memes", razao: "Segue você" },
        { src: "assets/img/chibirdart.svg", altName: "chibirdart", razao: "Segue você" },
        { src: "assets/img/razoesparaacreditar.svg", altName: "razoesparaacreditar", razao: "Novo no Instagram" },
        { src: "assets/img/adorable_animals.svg", altName: "adorable_animals", razao: "Segue você" },
        { src: "assets/img/smallcutecats.svg", altName: "smallcutecats", razao: "Segue você" }
    ];

    return (
        <>
            {suggestionsPack.map((suggestion, index) => {
                return (
                    <div key={index} className="sugestao">
                        <div className="usuario">
                            <img src={suggestion.src} alt={suggestion.altName} />
                            <div className="texto">
                                <div className="nome">{suggestion.altName}</div>
                                <div className="razao">{suggestion.razao}</div>
                            </div>
                        </div>

                        <div className="seguir">Seguir</div>
                    </div>
                )
            })}
        </>
    )
}