const calculateEmoji = (minutes) => {
    const emoji = minutes >= 30 ? "🍱" : "☕️"
    const num = minutes >= 30 ? 10 : 5
    const result = ""

    for(let i = 0; i < minutes; i += num){
        result += emoji
    }

   return result;
} 

function Article({title, date = "January 1, 1970", preview, minutes}) {
    const emoji = calculateEmoji(minutes)

    return (
        <article>
            <h3>{title}</h3>
            <small>
                {date}{" "}
                {emoji}
                {minutes} min read
            </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;