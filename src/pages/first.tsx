import Link from 'next/link'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function FirstPost() {
    return (
        <main
            className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-3 pt-3 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-3xl">
                    1. Icebreaker&nbsp;
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


            <div className="max-w-4xl w-full mb-8">

                <p className="text-lg">
                    Share your good/funny/wonderful experiences in the spring break.
                    Feel free to use one of these expressions when you get stuck!!!
                </p>
                <br></br>
                <ul>
                    <li style={{ listStyleType: 'disc' }}>I enjoyed/had a whale of a time/had a blast doing…</li>
                    <li style={{ listStyleType: 'disc' }}>It never fails to amaze me…</li>
                    <li style={{ listStyleType: 'disc' }}>It never gets old…</li>
                    <li style={{ listStyleType: 'disc' }}>What I like about it is that…</li>
                    <li style={{ listStyleType: 'disc' }}>I should have done…</li>
                    <li style={{ listStyleType: 'disc' }}>It was a memorable experience to…</li>
                </ul>

            </div>

            <div style={{ height: '100px' }}></div>
        </main>
    )
}