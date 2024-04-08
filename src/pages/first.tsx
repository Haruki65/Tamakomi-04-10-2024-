import Link from 'next/link'

export default function FirstPost() {
    return (
        <>
            <h1>Share your good/funny/wonderful experiences in the spring break.</h1>
            <h2>
                <Link href="/">
                    <h1>Back to home</h1>
                </Link>
            </h2>
        </>
    )
}