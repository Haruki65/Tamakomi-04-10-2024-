// import Link from 'next/link'
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export default function FirstPost() {
//     return (
//         <main
//             className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
//         >
//             <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//                 <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-3 pt-3 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-3xl">
//                     Useful Phrases&nbsp;
//                 </p>
//                 <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//                     <a
//                         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         By {"Haruki"}
//                     </a>
//                 </div>
//             </div>


//             <h1>Feel free to use one of these expressions when you get stuck!!!</h1>
//             <ul>
//                 <li style={{ listStyleType: 'disc' }}>I enjoyed/had a whale of a time/had a blast doing…</li>
//                 <li style={{ listStyleType: 'disc' }}>It never fails to amaze me…</li>
//                 <li style={{ listStyleType: 'disc' }}>It never gets old…</li>
//                 <li style={{ listStyleType: 'disc' }}>What I like about it is that…</li>
//                 <li style={{ listStyleType: 'disc' }}>I should have done…</li>
//                 <li style={{ listStyleType: 'disc' }}>It was a memorable experience to…</li>
//             </ul>
//             <div style={{ height: '100px' }}></div>
//         </main>
//     )
// }
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
                    Useful Phrases&nbsp;
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
                    Feel free to use one of these expressions. (reference: https://www.fluentu.com/blog/english/common-english-phrases/)
                </p>
                <br></br>
                <ul>
                    <p className="text-lg">English Phrases for Introducing Yourself and Making Friends</p>
                    <li style={{ listStyleType: 'disc' }}>Hi! I am [Name]. (And you?)</li>
                    <li style={{ listStyleType: 'disc' }}>Nice to meet you.</li>
                    <li style={{ listStyleType: 'disc' }}>Where are you from?</li>
                    <li style={{ listStyleType: 'disc' }}>What do you do?</li>
                    <li style={{ listStyleType: 'disc' }}>What do you like to do (in your free time)?</li>
                    <li style={{ listStyleType: 'disc' }}>What is your phone number?</li>
                    <li style={{ listStyleType: 'disc' }}>Do you have Instagram?</li>
                    <br></br>
                    <p className="text-lg">Everyday English Phrases for Any Conversation</p>
                    <li style={{ listStyleType: 'disc' }}>Thanks so much.</li>
                    <li style={{ listStyleType: 'disc' }}>I really appreciate…</li>
                    <li style={{ listStyleType: 'disc' }}>Excuse me.</li>
                    <li style={{ listStyleType: 'disc' }}>I am sorry.</li>
                    <li style={{ listStyleType: 'disc' }}>What do you think?</li>
                    <li style={{ listStyleType: 'disc' }}>How does that sound?</li>
                    <li style={{ listStyleType: 'disc' }}>That sounds great.</li>
                    <li style={{ listStyleType: 'disc' }}>Oh, never mind.</li>
                    <br></br>
                    <p className="text-lg">Common Phrases about Learning English</p>
                    <li style={{ listStyleType: 'disc' }}>I am learning English.</li>
                    <li style={{ listStyleType: 'disc' }}>I do not understand.</li>
                    <li style={{ listStyleType: 'disc' }}>Could you repeat that please?</li>
                    <li style={{ listStyleType: 'disc' }}>Could you please talk slower?</li>
                    <li style={{ listStyleType: 'disc' }}>Thank you. That helps a lot.</li>
                    <li style={{ listStyleType: 'disc' }}>What does _____ mean?</li>
                    <li style={{ listStyleType: 'disc' }}>How do you spell that?</li>
                    <li style={{ listStyleType: 'disc' }}>What do you mean?</li>
                    <br></br>
                    <p className="text-lg">Everyday English Phrases for Shopping</p>
                    <li style={{ listStyleType: 'disc' }}>Can you help me?</li>
                    <li style={{ listStyleType: 'disc' }}>I am looking for…</li>
                    <li style={{ listStyleType: 'disc' }}>Do you have this [object] in a different color?</li>
                    <li style={{ listStyleType: 'disc' }}>I do not know my size.</li>
                    <li style={{ listStyleType: 'disc' }}>I need this in a size ______.</li>
                    <li style={{ listStyleType: 'disc' }}>Where can I find [item]?</li>
                    <li style={{ listStyleType: 'disc' }}>How much does this/that cost?</li>
                    <li style={{ listStyleType: 'disc' }}>I do not need a bag.</li>
                    <li style={{ listStyleType: 'disc' }}>Can someone help me carry this out?</li>
                    <li style={{ listStyleType: 'disc' }}>Can I have this delivered?</li>
                    <br></br>
                    <p className="text-lg">Common English Phrases for Work</p>
                    <li style={{ listStyleType: 'disc' }}>How can I help you?</li>
                    <li style={{ listStyleType: 'disc' }}>I will be with you in a moment.</li>
                    <li style={{ listStyleType: 'disc' }}>What time is our meeting?</li>
                    <li style={{ listStyleType: 'disc' }}>Please call me (back) at…</li>
                    <li style={{ listStyleType: 'disc' }}>Actually, I thought…</li>
                    <li style={{ listStyleType: 'disc' }}>When is the deadline?</li>
                    <li style={{ listStyleType: 'disc' }}>I am (just) about to [verb]…</li>
                    <br></br>
                    <p className="text-lg">Common English Idioms</p>
                    <li style={{ listStyleType: 'disc' }}>Break the ice</li>
                    <li style={{ listStyleType: 'disc' }}>A piece of cake</li>
                    <li style={{ listStyleType: 'disc' }}>Under the weather</li>
                    <li style={{ listStyleType: 'disc' }}>Up for/Down for (something)</li>
                    <li style={{ listStyleType: 'disc' }}>Play it by ear</li>
                    <li style={{ listStyleType: 'disc' }}>Call it a day/night</li>
                    <li style={{ listStyleType: 'disc' }}>Get away with (something)</li>
                    <li style={{ listStyleType: 'disc' }}>Get over something</li>
                    <li style={{ listStyleType: 'disc' }}>Hang out</li>
                    <li style={{ listStyleType: 'disc' }}>Take (one’s) time</li>
                </ul>
            </div>
            <div style={{ height: '100px' }}></div>
        </main>
    )
}