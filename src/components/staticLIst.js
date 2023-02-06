

import "./staicList.css"
function StaticListApp(props) {
    const {eachList} = props
    return(
        <div className="card">
        <p className="styling1">ID:{eachList.id}</p>
        <h1 className="subject">Subject:{eachList.subject}</h1>
        <h2 className="body">Body:{eachList.body}</h2>
        <p className="count">views_count:{eachList.views_count}</p>

        </div>
    )
} 

export default StaticListApp