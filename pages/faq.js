import Link from "../src/components/Link";
import PageTitle from "../src/components/PageTitle";

export async function getStaticProps() {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    const faq = await fetch(FAQ_API_URL)
        .then((res) => res.json())
    return {
        props: {
            faq
        }
    }
}

export default function FaqPage({faq}) {
    return (
        <div>
            <PageTitle>Home - Alura Cases FAQ</PageTitle>
            <h1>Alura Cases - FAQ</h1>
            <Link href='/'>Ir para a home</Link>
            <ul>
                {faq.map(({answer, question}) => {
                    return(
                        <li key={question}>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}