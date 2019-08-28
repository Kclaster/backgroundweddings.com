import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import '../../styles/Weddings.css';

import alyssa from '../../pics/Alyssa and Ryne/star.jpg';
import karley from '../../pics/Karley and Chris/star.jpg';
import hannah from '../../pics/Hannah and Ben/star.jpg';
import janie from '../../pics/Janie and Harold/star.jpg';
import katie from '../../pics/Katie and Brett/star.jpg';
import megan from '../../pics/Megan and Justin/star.jpg';
import robyn from '../../pics/Robyn and Kelly/star.jpg';
import whitney from '../../pics/Whitney and James/ten.jpg';
import cori from '../../pics/Cori and Jesse/star.jpg';
import PageSnippets from '../PageSnippets';
import styled from 'styled-components';

const Weddings = () => {
  const Wrapper = styled.div`
    margin: 6vh 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;
  return (
    <>
      <Header />
      <Wrapper className="weddingGrid">
        <PageSnippets
          href="/AlyssaAndRyne"
          hoverid="alyssa"
          image={alyssa}
          title="Alyssa and Ryne"
        />
        <PageSnippets
          href="/KarleyAndChris"
          hoverid="karley"
          image={karley}
          title="Karley and Chris"
        />
        <PageSnippets
          href="/HannahAndBen"
          hoverid="hannah"
          image={hannah}
          title="Hannah and Ben"
        />
        <PageSnippets
          href="/JanieAndHarold"
          hoverid="janie"
          image={janie}
          title="Janie and Harold"
        />
        <PageSnippets
          href="/KatieAndBrett"
          hoverid="katie"
          image={katie}
          title="Katie and Brett"
        />
        <PageSnippets
          href="/MeganAndJustin"
          hoverid="megan"
          image={megan}
          title="Megan and Justin"
        />
        <PageSnippets
          href="/RobynAndKelly"
          hoverid="robyn"
          image={robyn}
          title="Robyn and Kelly"
        />
        <PageSnippets
          href="/WhitneyAndJames"
          hoverid="whitney"
          image={whitney}
          title="Whitney and James"
        />
        <PageSnippets
          href="/CoriAndJesse"
          hoverid="cori"
          image={cori}
          title="Cori and Jesse"
        />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Weddings;
