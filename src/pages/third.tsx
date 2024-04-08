import Link from 'next/link'

export default function FirstPost() {
    return (
        <>
            <h1>In this game, each person will be given a word, and the others must describe it without mentioning it directly. If you guess the word right, you succeed!</h1>
            <h1>
                <Link href="/">
                    <h1>Back to home</h1>
                </Link>
            </h1>
        </>
    )
}