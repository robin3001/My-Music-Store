import Head from "next/head";
import Link from "next/link";

function HomePage() {
  return (
    <>
      <Head>
        <title>My Music Store</title>
      </Head>
      <div>
        <h1>Welcome to Next.js!</h1>
        <Link href="posts/firstPost">First Post</Link>
      </div>
    </>
  );
}

export default HomePage;
