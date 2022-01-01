// our-domain.com/news

import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJs Is A Great Framework
          </Link>
        </li>
        <li>
          <Link href="/news/another-article">Another article</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;

// bud mame tenhle soubor v te celkove slouzce pages a nazveme ho news.js
// nebo vytvorime podslozku news a do ni premistime tento soubor => pak ho musime prejmenovat na index.js
// je to dobre pro vytvareni nested routes
// tzn nase nested route bdue something-important
/*
Jenomze takhle bychom museli mit pro kazdou zpravu vlastni stranku somethin-important,
coz neni feasible. proto pridame dynamic pages.
ty se pisou do [].js, takze napr. [newsId].js - nejaky identifikator.
*/

/*
Navigating to pages:
Jde to takhle: <li a href='/news/next-page'>Next Page</li>
Jenze takhle se bude NACITAT NOVA STRANKA, TZN NENI TO SINGLE PAGE APP.
Muzeme taklhe ztratis states, redux data, context states, apod.
=> proto pouzijeme Link z next/link. ten ma atribut href! ne 'to' jako react router Link.
*/
