import Link from 'next/link'

const home = () => {
  return (
    <>
      <h1>Hello Home Page</h1>
      <Link href="/user">
        <a>User </a>
      </Link>
      
      <Link href="/posts">
        <a>Posts </a>
      </Link>
    </>
  )
}

export default home