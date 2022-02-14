import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';
import { translate } from '../locales/locales';
import homeStyles from './index.module.css';

export async function getStaticProps({ locale, locales, defaultLocale }) {
  return {
    props: {
      locale,
      locales,
      defaultLocale
    }
  }
}

export default function Home({locale, locales, defaultLocale }) {
  
  const router = useRouter();
  const otherLocales = locales.filter((currentLocale) => locale !== currentLocale)

  return (
    <main className={homeStyles.mainContainer}>
      <Head>
        <title>{'Climate Science Demo'}</title>
      </Head>
      <article>
        <header className={homeStyles.headerContainer}>
          <section>
            <Image
                priority
                src="/images/planet.png"
                height={144}
                width={144}
            />
            <h1 className={homeStyles.heading2Xl}>{translate(locale,'home', 'hello')}</h1>
            {/* <Link href="/new/new">
                <a>this page!</a>
           </Link> */}
          </section>
          <section className={homeStyles.optionsContainer}>     
            <h3>{translate(locale, 'home', 'options')}</h3>
            <p>{translate(locale, 'home', 'currentLanguage')}<b>{locale}</b></p>
            <p>{translate(locale, 'home', 'defaultLanguage')}<b>{defaultLocale}</b></p>
            <p>{translate(locale, 'home', 'availableLanguages')}<b>{JSON.stringify(locales)}</b></p>
            {translate(locale,'home', 'languageRequest')}
            <ul id="languages">
              {otherLocales.map((locale) => {
                  const { pathname, query, asPath } = router
                  return (
                    <li key={locale}>
                      <Link href={{ pathname, query }} as={asPath} locale={locale}>
                        <a><b>{locale}</b></a>
                      </Link>
                    </li>
                  )
                })}
            </ul> 
          </section> 
        </header>
      </article>

      {/* Slider animation */}

      <section className={`${homeStyles.questionSlide}`}>
          <div className={`${homeStyles.questionSlideContainer}`}> 
            <div className={`${homeStyles.questionContainer}`}>
              <label className={`${homeStyles.question}`}>
                {translate(locale,'home', 'question1')}
              </label>
            </div>   
            <div className={`${homeStyles.answer} ${homeStyles.answer1}`}>
              <div className={`${homeStyles.answerSelectorContainer}`}>
                <div className={`${homeStyles.answerSelector}`}></div>          
              </div> 
              <label className={`${homeStyles.answerText}`}>{translate(locale, 'home', 'answer1')}</label>
            </div>
            <div className={`${homeStyles.answer} ${homeStyles.answer2}`}>
              <div className={`${homeStyles.answerSelectorContainer}`}>
                <div className={`${homeStyles.answerSelector}`}></div>          
              </div> 
              <label className={`${homeStyles.answerText}`}>{translate(locale, 'home', 'answer2')}</label>
            </div>
            <div className={`${homeStyles.answer} ${homeStyles.answer3}`}>
              <div className={`${homeStyles.answerSelectorContainer}`}>
                <div className={`${homeStyles.answerSelector} ${homeStyles.correctAnswer}`}></div>          
              </div> 
              <label className={`${homeStyles.answerText}`}>{translate(locale, 'home', 'answer3')}</label>
            </div>
          </div>
      </section>
    </main>
  )
}