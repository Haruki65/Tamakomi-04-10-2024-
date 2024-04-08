import Link from 'next/link'
import { useState } from 'react';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// ランダムな名詞のリスト（仮のリスト）
const nouns = [
    "clouds",
    "birds",
    "the sun",
    "the moon",
    "airplanes",
    "rainbow",
    "lions",
    "elephants",
    "monkeys",
    "zebras",
    "cages",
    "bears",
    "teachers",
    "students",
    "chairs",
    "books",
    "chalkboard",
    "desks",
    "water",
    "salt",
    "fish",
    "boats",
    "islands",
    "sharks"
];

// ランダムな名詞を取得する関数
function getRandomNoun() {
    const randomIndex = Math.floor(Math.random() * 24);
    return nouns[randomIndex];
}

export default function FirstPost() {
    const [randomNoun, setRandomNoun] = useState('');

    // ボタンをクリックしたときにランダムな名詞をセットする関数
    const generateRandomNoun = () => {
        const noun = getRandomNoun();
        setRandomNoun(noun);
    };

    return (

        <main
            className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-3xl">
                    2. Word Guessing Game&nbsp;
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


            <h1>
                In this game, each person will be given a word, and the others must describe it without mentioning it directly. If you guess the word right, you succeed!
            </h1>
            <button onClick={generateRandomNoun}>Generate</button>
            <h1>Generated Word: {randomNoun}</h1>
            <h1>
                <Link href="/">
                    <h1>Back to home</h1>
                </Link>
            </h1>


        </main>
    )
}