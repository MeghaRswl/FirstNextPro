import { useRouter } from "next/router"
const id = () =>{
    const router = useRouter();
    const data= router.query.productid
    

    return(
      <>
      <h1>id Number {data} </h1>
      </>
    )
  }
  
  export default id