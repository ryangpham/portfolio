import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="no-underline">
      <div className="bg-accent px-3 py-0.5">
        <span
          className="text-3xl tracking-tight text-white"
          style={{
            fontFamily: '"Futura", "Century Gothic", sans-serif',
            fontWeight: 900,
            fontStyle: "italic",
          }}
        >
          Ryan Pham
        </span>
      </div>
    </Link>
  );
}
