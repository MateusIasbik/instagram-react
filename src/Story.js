
export default function Story() {

    const storiesPack = [
        { nameAlt: "9gag", src: "assets/img/9gag.svg" },
        { nameAlt: "meowed", src: "assets/img/meowed.svg" },
        { nameAlt: "barked", src: "assets/img/barked.svg" },
        { nameAlt: "nathanwpylestrangeplanet", src: "assets/img/nathanwpylestrangeplanet.svg" },
        { nameAlt: "wawawicomics", src: "assets/img/wawawicomics.svg" },
        { nameAlt: "respondeai", src: "assets/img/respondeai.svg" },
        { nameAlt: "filomoderna", src: "assets/img/filomoderna.svg" },
        { nameAlt: "memeriagourmet", src: "assets/img/memeriagourmet.svg" }
    ];

    return (
        <>
            {storiesPack.map(story => {
                return (
                    <div className="story">
                        <div className="imagem">
                            <img src={story.src} alt={story.nameAlt} />
                        </div>
                        <div className="usuario">
                            {story.nameAlt}
                        </div>
                    </div>
                )
            }
            )}
        </>
    )
}