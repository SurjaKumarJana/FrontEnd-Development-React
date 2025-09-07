import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
            <h1>this is header</h1>
            <div>
                <Link href='/About'> About</Link>
                <Link href='/Project'> Project</Link>
                <Link href='/Contact'> Contact</Link>
                

            </div>
    </>

  )
}

export default Header