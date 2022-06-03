function post({post}){
    return(
        <>
        <h2>{post.id} {post.title}</h2>
        <p>{post.body}</p>
        </>
    )
}

export default post

export async function getStaticPaths(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    const paths = data.map((post) =>{
        return{
            params : {
                postid : `${post.id}`
            }
        }
    })

    return{
        // paths: [
        //     {
        //         params : {postid:"1"},
        //     },
        //     {
        //         params : {postid:"2"},
        //     },
        //     {
        //         params : {postid:"3"},
        //     }
        // ]
        paths,
        fallback:false,
    }
}


export async function getStaticProps(context){
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`
    )
    const data = await response.json()

    return {
        props :{
            post : data,
        }
    }

}