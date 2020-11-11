import Link from 'next/link';

function Logo() {
  return <>
    <Link href={`/`}>
      <a>
        <img src="/logo.svg" alt="Logomarca" />
      </a>
    </Link>
  </>
}
  
export default Logo;