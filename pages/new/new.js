
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './new.module.css';

export default function FirstPost() {

    
    /* Dummy Data*/
    const username = 'asdadasdad.adsasdasd@gmail.com';
    const eventId = 'qtf8x4370';
    /* Dummy Data*/
    const [question1SelectedTab, setQuestion1SelectedTab] = React.useState('Answer');


    return (
        <main className={styles.mainContainer}>
        <Head>
          <title>{'Climate Science Demo'}</title>
        </Head>
        <article>
          <header className={styles.headerContainer}>
            <section className={styles.headerContainerNav}>
                <div>
                    <p>Username: {username}</p>
                    <p>science.com</p>
                    <p>Event ID: {eventId}</p>
               
                </div>
              <button >Log out</button>     
            </section>
            <h1>Welcome to the ClimateScience Olympiad Qualifier</h1>
            <label>Instructions:</label>
            <ul>
                <li>
                    <b>Language:</b> Please answer the questions in one of the following laguages:
                    <ol className={styles.languageList}>
                        <li>English</li>
                        <li>French</li>
                        <li>Spanish</li>
                    </ol>
                </li>
                <li>
                    <b>Auto-save:</b>
                    <label> Responses are automatically saved</label>
                </li>
            </ul>
            <p><b>Good luck!</b></p>
          </header>
          <section>
              <div className={styles.countdownControl}>
                  <label>Time left: <strong>02:50:04</strong> of 03:00:00</label>
              </div>

              <select name="categories" id="categories" className={styles.categoriesSelector}>
                  
                <option value="cleanEnergy">Clean Energy</option>
                <option value="sustainableAgriculture">Sustainable Agriculture</option>
                <option value="globalDevelopmentAndHealth">Global Development and Health</option>
                <option value="sustainableEconomy">Sustainable Economy</option>
                <option value="sustainableTransport">Sustainable Transport</option>
                <option value="waterResources">Water Resources</option>
                <option value="biodiversity">Biodiversity</option>
            </select>

              <h1 className={styles.subjectTitle}>Reversing Biodiversity Loss Across South America, Southern Africa and Southeast Asia</h1>

              <p>
              In September 2020, political leaders from 64 countries around the world all pledged to
reverse biodiversity loss in the next decade in order to protect the natural world and fight
the climate crisis [1]. This was in response to a recent study highlighting the huge impact
that returning 30% of ecosystems to their natural state would have, with the potential to stop
70% of projected extinctions and absorb more than 465 billion tons of carbon dioxide from
the atmosphere. This study highlighted that restoration in certain areas would have a much
larger impact than others, with the priority areas for restoration including large parts of South
America, Southern Africa and SE Asia [2]. You have been chosen to serve on the
international committee for restoration and come up with a global action plan on how to
prioritise restoration within these areas. Please provide a detailed response to the following
questions regarding the global action plan.
              </p>

              <strong>References:</strong>
              <ul>
                  <li>[1]  
                      <a  target="_blank" rel="noopener noreferrer" href='https://wwf.panda.org/wwf_news/press_releases/?893466/Leaders-Pledge-for-Nature-World-leaders-commit-to-reversing-nature-loss-by-2030'>
                             https://wwf.panda.org/wwf_news/press_releases/?893466/Leaders-Pledge-for-Nature-World-leaders-commit-to-reversing-nature-loss-by-2030
                      </a>
                  </li>
                  <li>[2]  
                      <a  target="_blank" rel="noopener noreferrer" href='https://www.nature.com/articles/s41586-020-2784-9'>   
                       https://www.nature.com/articles/s41586-020-2784-9            
                      </a>
                  </li>
              </ul>     
          </section>
          <section id='summary' className={styles.summary}>
            <div className={styles.summaryHeader}>
                <h3>Your Summary</h3> 
                <strong>0/100 words</strong>
            </div>
            <textarea maxLength={100} rows={10} placeholder='Summarize your solution to the overarching problem. We recommend writtng this after writing the three answers below.'>
            </textarea>
            <hr></hr>
            <div id='summaryAutoSaveReminder'>
                <label>#</label>
                <label>Responses are automatically saved</label>
            </div>
          </section>
          <section id='summary' className={styles.summary}>
            <div className={styles.summaryHeader}>
                <h3>1. What types of restoration initiatives will you be implementing in each of these 3 regions?
How do they vary across regions?</h3> 
                <strong>0/100 words</strong>
            </div>

            <div className={styles.tab}>
                <button className={styles.tablinks} onClick={() => setQuestion1SelectedTab('Answer')}>Answer</button>
                <button className={styles.tablinks} onClick={() => setQuestion1SelectedTab('Notes')}>Notes</button>
            </div>

            {question1SelectedTab === 'Answer' && <div id="Answer" className={styles.tabcontent}>
                <textarea  className={styles.answerTextArea} maxLength={300} rows={10} placeholder='Your response' ></textarea>
            </div>}

            {question1SelectedTab === 'Notes' && <div id="Notes" className={styles.tabcontent}>
                <textarea className={styles.answerTextArea}  maxLength={300} rows={10} placeholder='Your notes'></textarea>
            </div>}     
            <hr></hr>
            <div id='summaryAutoSaveReminder'>
                <label>#</label>
                <label>Responses are automatically saved</label>
            </div>
        </section>
          <section>
              <div id='referenceRow'>
                  <input className={styles.referenceInput} type='text' placeholder='Reference id (e.g [1])'/>
                  <input className={styles.referenceInput} type='text' placeholder='Reference link (e.g http://nature.com/your-paper)'/>
              </div>
              <button>+</button>
          </section>
          <footer className={styles.footer}>
              <button className={styles.submitButton}>Submit</button>
          </footer>
        </article>
      </main>
    );
  }