import Link from "next/link";
<<<<<<< HEAD
import type { FC } from "react";
=======
import { FC, ReactElement } from "react";
>>>>>>> 6c875fa039e75cd5fb4b2dda3791ae8973aa5f47

type AppProps = {
    includeIndex?: boolean;
}

const BasicNavigation: FC<AppProps> = ({includeIndex=false}: AppProps) => {
    
    return(
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            {includeIndex
            ?
            <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="/"
            target=""
          >
          
            <h3 className="text-2xl font-bold">Home →</h3>
            <div className="text-lg">
              Home Page
            </div>
          </Link>
            :
            <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="/about"
            target=""
          >
          
            <h3 className="text-2xl font-bold">About Dying Lotus →</h3>
            <div className="text-lg">
              Just the basics - our origins.
            </div>
          </Link>
            }
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://discord.gg/4X7WTZbXZ8"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Discord Server →</h3>
              <div className="text-lg">
                Join the Discord!
              </div>
            </Link>
          </div>
    )
}

export default BasicNavigation;