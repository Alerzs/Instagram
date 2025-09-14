import InstagramPost from "./InstagramPost"


export function Container({ data }){
    return(
        <div className="flex flex-col mx-auto gap-5">
            {data.map((val) => {            
                return <InstagramPost key={val._id} title={val?.title} content={val?.content} username={val?.user?.username} likess={val?.likes} comments={val?.comment}/>
            })}
        </div>
    )
}