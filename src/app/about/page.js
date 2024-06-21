import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1><center>About Page</center></h1>
    <br />
    <center>
    <Link href="/" className="btn btn-primary">Home </Link> |
    <Link href="/about" className="btn btn-success"> About</Link> |
    <Link href="/service" className="btn btn-danger"> Service</Link> | 
    <Link href="/contact" className="btn btn-warning"> Contact</Link>
     </center>
    </>
  );
}
