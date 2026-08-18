import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="First Choice Japan Tours home"
      className="flex shrink-0 items-center"
    >
      <Image
        src="/images/logo/logo1.png"
        alt="First Choice Japan Tours"
        width={190}
        height={90}
        priority
        className="h-auto w-[120px] object-contain sm:w-[145px] lg:w-[165px]"
      />
    </Link>
  );
}