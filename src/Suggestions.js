import Suggestion from "./Suggestion";

export default function Suggestions() {

    const suggestionsPack = [
        { src: "assets/img/bad.vibes.memes.svg", altName: "bad.vibes.memes", description: "Segue você" },
        { src: "assets/img/chibirdart.svg", altName: "chibirdart", description: "Segue você" },
        { src: "assets/img/razoesparaacreditar.svg", altName: "razoesparaacreditar", description: "Novo no Instagram" },
        { src: "assets/img/adorable_animals.svg", altName: "adorable_animals", description: "Segue você" },
        { src: "assets/img/smallcutecats.svg", altName: "smallcutecats", description: "Segue você" }
    ];

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggestionsPack.map((suggestion, index) => {
                return <Suggestion suggestion={suggestion} key={index}/>
            })}
            
        </div>
    )
}