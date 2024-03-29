import Link from "next/link";
import {Button} from "@/components/ui/button";

const Sidebar = () => {
  return (
      <div className={"hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40"}>
          <div className={"flex h-full max-h-screen flex-col gap-2"}>
              <div className={"flex h-[60px] items-center border-r px-6"}>
                  <Link className={"flex items-center gap-2 font-semibold"} href={"#"}>
                      <Package2Icon className={"h-6 w-6"}/>
                      <span> RMS </span>
                  </Link>
                  <Button className={"ml-auto h-8 w-8"} size={"icon"} variant={"outline"}>
                      <BellIcon className={"h-4 w-4"}/>
                      <span className={"sr-only"}>Toggle notifications</span>
                  </Button>
              </div>
              <div className={"flex-1 overflow-auto py-2"}>
                  <nav className={"grid items-start px-4 text-sm font-medium"}>

                  </nav>
              </div>
          </div>
      </div>
  );
}

export default Sidebar;

// @ts-ignore
function Package2Icon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
            <path d="M12 3v6" />
        </svg>
    )
}

// @ts-ignore
function BellIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
    )
}