import Link from 'next/link'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function FirstPost() {
    return (
        <main
            className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-3xl">
                    3. Discussion&nbsp;
                </p>
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <a
                        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By {"Haruki"}
                    </a>
                </div>
            </div>


            <h1>Select one agenda or feel free to touch on multiple topics</h1>
            <ul>
                <li style={{ listStyleType: 'disc' }}>What do you do to relax?</li>
                <li style={{ listStyleType: 'disc' }}>What book are you reading right now?</li>
                <li style={{ listStyleType: 'disc' }}>What's your favorite thing about your hometown?</li>
                <li style={{ listStyleType: 'disc' }}>Do you have dreams?</li>
            </ul>
            <h1>Don't feel nervous. Just talk freely and casually!!</h1>
            <h1>
                <Link href="/">
                    <h1>Back to home</h1>
                </Link>
            </h1>


        </main>
    )
}