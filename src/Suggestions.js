import Suggestion from "./Suggestion";

export default function Suggestions() {

    const suggestionsPack = [
        { src: "assets/img/bad.vibes.memes.svg", altName: "bad.vibes.memes", razao: "Segue você" },
        { src: "assets/img/chibirdart.svg", altName: "chibirdart", razao: "Segue você" },
        { src: "assets/img/razoesparaacreditar.svg", altName: "razoesparaacreditar", razao: "Novo no Instagram" },
        { src: "assets/img/adorable_animals.svg", altName: "adorable_animals", razao: "Segue você" },
        { src: "assets/img/smallcutecats.svg", altName: "smallcutecats", razao: "Segue você" }
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