import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl my-4">Next.js Code Challenge</h1>
      <Link href="/users" className="text-blue-700 underline">
        Users Page
      </Link>
    </main>
  );
}
