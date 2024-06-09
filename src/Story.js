
export default function Story({ story }) {

    return ((
        <div className="story">
            <div className="imagem">
                <img src={story.src} alt={story.nameAlt} />
            </div>
            <div className="usuario">
                {story.nameAlt}
            </div>
        </div>
    )
    )
}