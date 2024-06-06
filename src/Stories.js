import Story from "./Story";

export default function Stories() {

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
        <div className="stories">
            {storiesPack.map((story, index) => {
                return <Story story={story} index={index}/>
            })}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}