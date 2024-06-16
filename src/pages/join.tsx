import React from 'react';
import Image from 'next/image';

import Layout from 'src/components/DefaultLayout';
import ContactForm from 'src/components/ContactForm';
import korsangImg from 'public/images/korsang-farger.jpg';

import style from 'src/styles/pages/join.module.scss';

export default function AboutPage() {
  return (
    <Layout title={`Begynne i koret?`}>
      <article className={style.join}>
        <h2>Bli med i Lillestrøm Showkor!</h2>
        <p>
          Så gøy at du tenker på å bli med i koret vårt! Dersom du vil melde interesse med en gang, kan du gå rett ned
          til registreringsskjemaet. Ellers kan du her lese litt mer om både hvordan man blir med samt hva vi gjør i
          koret.
        </p>
        <Image alt={'Korsangere'} src={korsangImg} className={style.imageKorsang} />

        <h3>Hvem passer vi for?</h3>
        <p>
          Lillestrøm Showkor er et supert kor for (nesten) alle som liker å synge i Lillestrøm og omegn. Vi liker å ha
          bevegelse på scenen og synger alt mulig av sanger vi liker. Det er for det meste pop, rock, musikal og jazz i
          repertoaret i dag. Vi har noe koreografi på sangene, da på et nivå de fleste skal kunne plukke opp med litt
          øvelse. Vi tilpasser dette uansett til hvor trygge hver enkelt føler seg og bygger det opp bit for bit.
        </p>

        <h3>Hvordan er det å være medlem?</h3>
        <p>
          Vi har fast korøving en gang i uken: tirsdag kl. 18:30 på Sagdalen skole. I forkant av denne har vi en halv
          time med rytme og dans for de som ønsker det. Det hender også at vi har ekstra øving på andre tidspunkter når
          vi ser at dette kan være hensiktsmessig. Disse er frivillig og kan være for alle i koret eller bestemte
          undergrupper (stemmegruppe, koreografiarbeid, el.). Et par ganger i året har vi også seminar hvor vi går litt
          mer i dybden og utvikler oss som kor og sangere/artister.
        </p>
        <p>
          I løpet av året holder vi konserter. Disse kan være på større scener eller i mer intime omgivelser som kirker
          eller utesteder. Dette er moro, spennende og givende og absolutt noe som er verdt å få være med på!
        </p>
        <p>
          I koret vårt har alle mulighet til å komme med innspill til både musikkvalg, regi og andre momenter. Vi gjør
          vårt ytterste for at alle stemmer skal bli hørt!
        </p>

        <h3>Hva skjer etter at jeg har meldt interesse?</h3>
        <p>
          Etter at du har meldt interesse, er neste steg å komme innom for prøvesang. Du blir kontaktet av oss for å
          eventuelt avtale tidspunkt (gjerne i forbindelse med en korøving). Prøvesang er en helt ufarlig og
          uforpliktende sesjon med deg og vår dirigent hvor vi kartlegger blant annet hva slags stemmetype du har, hva
          du liker å synge og generelt hvordan vi tror du passer inn i koret vårt. Samtidig får du muligheten til å vite
          litt mer om hvordan ting fungerer hos oss og hva du eventuelt kan forvente dersom du blir med oss i koret.
        </p>
        <p>
          Dersom vi ser at vi kan passe for deg, så kan det hende du allerede første kvelden får muligheten til å delta
          på korøvingen og hilse på resten av oss i koret. Dette er igjen uforpliktende og kun for at du skal få bli
          kjent med oss og se hva vi driver med. Etter det håper vi naturligvis å se deg igjen på senere korøvinger!
        </p>
        <p>
          Forhåpentligvis har ikke dette skremt deg fra å ville synge med oss! Du kan melde interesse, og stille
          eventuelle spørsmål du har, nedenfor.
        </p>

        <h3>Meld interesse her:</h3>
        <ContactForm subject={'Innmelding Lillestrøm Showkor'} />
      </article>
    </Layout>
  );
}
