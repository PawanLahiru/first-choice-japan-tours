import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center">
      <Image
        src="/images/logo/logo.png"
        alt="First Choice Japan Tours"
        width={180}
        height={60}
        priority
        className="h-auto w-auto"
      />
    </Link>
  );
}