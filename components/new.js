/**
 * コンポーネントにしたnew.js
 */
const New = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const target = e.target
        const title = target.title.value
        const content = target.content.value
        //console.log(title)
        //console.log(content)
        props.createMemo({
            title,
            content
        }) 
    }

    return(
        <div>
            <h1>メモ作成</h1>
            <div>
            <form onSubmit={handleSubmit}>
            <div>
                <div>
                <label htmlFor="">タイトル</label>
                </div>
                <input type="text" name="title" placeholder="title"/>
            </div>
            <div>
                <div>
                <label htmlFor="">本文</label>
                </div>
                <textarea name="content" placeholder="content"/>
            </div>
            <div>
                <input type="submit" value="submit"/>
            </div>
            </form>
            </div>
        </div>
    )
}