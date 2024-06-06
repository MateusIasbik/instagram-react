
export default function Suggestion({suggestion, index}) {

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
}