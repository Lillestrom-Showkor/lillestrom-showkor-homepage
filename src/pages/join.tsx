import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Layout from 'src/components/DefaultLayout';
import ContactForm from 'src/components/ContactForm';
import Post from 'src/interfaces/post';
import { getAllPosts } from 'src/lib/api';

import korsangImg from 'public/images/korsang-farger.jpg';
import style from 'src/styles/pages/join.module.scss';
import ContentMeta from 'src/components/ContentMeta';
import { formatDate } from 'src/lib/date';
import Alert, { AlertType } from 'src/components/Alert';

export default function AboutPage() {
  return (
    <Layout>
      <ContentMeta title={`Begynne i koret?`} path={'/join'} />
      <article className={style.join}>
        <h2>Bli med i Lillestrøm Showkor!</h2>
        <p>Så hyggelig at du vurderer å bli en del av Lillestrøm Showkor!</p>
        <p>
          Hvis du allerede vet at du ønsker å bli med, kan du registrere interessen din i skjemaet nederst på siden. Vil
          du å vite litt mer om hvordan opptaket fungerer og hva du kan forvente som medlem, finner du informasjonen
          nedenfor.
        </p>

        <Image alt={'Korsangere'} src={korsangImg} className={style.imageKorsang} />

        <h3>Opptak</h3>
        <p>
          Lillestrøm Showkor har ett hovedopptak hvert år i august. Dersom vi har ledige plasser i flere stemmegrupper,
          gjennomfører vi også et opptak i januar.
        </p>

        <p>
          Opptaket starter med en <em>åpen øvelse</em>, hvor du får muligheten til å bli kjent med koret, dirigenten og
          hvordan vi jobber. Dette er en fin anledning til å prøve ut om Lillestrøm Showkor er noe for deg &mdash; helt
          uforpliktende.
        </p>
        <p>
          Dersom du ønsker å gå videre etter den åpne øvelsen, inviterer vi deg til en prøvesang med dirigenten vår. I
          tillegg blir du invitert til en uformell samtale med to representanter fra styret. Samtalen handler om å bli
          bedre kjent med hverandre, svare på spørsmål og finne ut om koret passer for deg.
        </p>
        <p>
          Etter prøvesangen vil du få en tilbakemelding på om vi har mulighet til å tilby deg plass i koret. Da starter
          en prøveperiode på fire uker. I denne perioden kan både du og koret kjenne etter om dette føles riktig. Du
          står fritt til å trekke deg dersom du ønsker det, og det er selvfølgelig ingen medlemskontingent i
          prøveperioden.
        </p>
        <p>Etter prøveperioden, dersom alt fungerer godt, blir du fullverdig medlem av Lillestrøm Showkor.</p>
        <h3>Prøvesang</h3>
        <p>
          Vi vet at prøvesang kan føles litt skummelt. De aller fleste av oss har kjent på nervene før vår egen
          prøvesang, men erfaringen er at den er langt hyggeligere enn mange ser for seg.
        </p>
        <p>
          Prøvesangen gjennomføres kun med deg og dirigenten vår i en avslappet atmosfære. Du blir geleidet gjennom noen
          stemme- og sangøvelser, i tillegg til en låt du har forberedt. På den måten kan dirigenten bli kjent med
          stemmen din og hvilken stemmegruppe du vil fungere i. Du trenger ikke å være perfekt eller prestere feilfritt.
          Det viktigste for oss er å høre stemmen din og bli kjent med ditt musikalske potensial.
        </p>
        <h3>Passer Lillestrøm Showkor for deg?</h3>
        <p>
          Vi er et kor med høye ambisjoner og et sterkt ønske om å utvikle oss sammen. Derfor ser vi etter sangere som
          ikke bare liker å synge, men som også ønsker å bidra til fellesskapet.
        </p>
        <p>
          Vi forventer at medlemmene prioriterer øvelser og konserter, møter godt forberedt og viser engasjement både
          musikalsk og sosialt. Regelmessig oppmøte er viktig, både for din egen utvikling og fordi hver enkelt stemme
          er en viktig del av helheten.
        </p>
        <p>
          Til gjengjeld får du et kor som satser på kvalitet, musikalsk utvikling, spennende konserter og et
          inkluderende miljø der vi jobber mot felles mål og har det gøy underveis.
        </p>
        <p>Vi gleder oss til å bli kjent med deg!</p>

        <h3>Meld interesse her:</h3>
        <ContactForm subject={'Innmelding Lillestrøm Showkor'} showPhoneEntry={true} id={'form'} />
      </article>
    </Layout>
  );
}
