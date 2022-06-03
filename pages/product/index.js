import Link from 'next/link'

const product = ({productid = 100}) =>{
  
    return(
      <>
      <Link href="/">
      <a><h1>Home</h1></a>
      </Link>
      <Link href="/product/1">
      <a><h1>product 1</h1></a>
      </Link>
      <Link href="/product/2">
      <a><h1>product 2</h1></a>
      </Link>
      <Link href="/product/3">
      <a><h1>product 3</h1></a>
      </Link>
      <Link href={`/product/ ${productid}`}>
      <a><h1>product {productid}</h1></a>
      </Link>
      
      
      
      </>
    )
  }
  
  export default product