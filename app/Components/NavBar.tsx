import Link from 'next/link'

function NavBar() {
  return (
    <div>
          <nav className='flex justify-center gap-5 items-center p-5 bg-slate-900 text-2xl list-none'>
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/login">Login</Link></li>
    </nav>
    </div>
  )
}

export default NavBar