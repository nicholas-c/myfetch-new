import Link from "next/link";
import clsx from "clsx";

const Button = ({ href, fullWidth = false, children, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className={clsx(
      "flex  items-center  justify-center  gap-1  bg-blue-400  hover:bg-blue-500  text-gray-800  py-3  px-5  tracking-wide  rounded-lg  uppercase  font-bold",
      {
        "w-full": fullWidth,
        "w-max": !fullWidth,
      }
    )}
  >
    {children}
  </Link>
);

export { Button };
