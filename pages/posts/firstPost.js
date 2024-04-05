import Head from "next/head";
import Link from "next/link";

function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <div>
        <h1>First Post</h1>
        <Link href="/">Home</Link>
      </div>
    </>
  );
}

export default FirstPost;
