import Link from "next/link";

export default function GoHomeLink() {
  return (
    <div className="flex justify-center">
      <Link href="/" className="text-gray-400 p-3">
        Go to homepage
      </Link>
    </div>
  );
}
