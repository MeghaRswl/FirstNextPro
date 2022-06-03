import { useRouter } from "next/router"
const revi = () =>{
    const router = useRouter();
    const {productid, review }= router.query
    

    return(
      <>
      <h1>review no. {review} and product {productid} </h1>
      </>
    )
  }
  
  export default revi