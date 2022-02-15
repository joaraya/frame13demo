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
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <article>
        <header className={homeStyles.headerContainer}>
          <section>
            <Image
                priority
                src="/images/planet.png"
                height={200}
                width={200}
                alt='eath'
            />
            <h1 className={homeStyles.heading2Xl}>{translate(locale,'home', 'hello')}</h1>
          </section>
          <section className={homeStyles.optionsContainer}>     
            <strong>{translate(locale, 'home', 'options')}</strong>
            <p>{translate(locale, 'home', 'currentLanguage')}<b>{locale}</b></p>
            <p>{translate(locale, 'home', 'defaultLanguage')}<b>{defaultLocale}</b></p>
            <label>{translate(locale, 'home', 'availableLanguages')}</label>
            <label><strong>{JSON.stringify(locales)}</strong></label>
            <p>
              <label>{translate(locale,'home', 'languageRequest')}</label> 
              {otherLocales.map((locale) => {
                  const { pathname, query, asPath } = router
                  return (
                      <Link key={locale} href={{ pathname, query }} as={asPath} locale={locale}>
                        <a><b>{locale}</b></a>
                      </Link>        
                  )
                })}
            </p>
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