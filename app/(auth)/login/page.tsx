import Link from "next/link"

function Login() {
  return (
    <div>Login  Form
      <Link href={'/login/x'}>intercept</Link>
    </div>
  )
}

export default Login