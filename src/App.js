import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoadingPage from './components/mainpages/LoadingPage';
import './styles/App.css';

const LazySuccessPage = React.lazy(() => import('./components/mainpages/SuccessPage'));

const LazyHomePageRoute = React.lazy(() =>
  import('./components/mainpages/HomePage')
);
const LazyWeddingRoute = React.lazy(() =>
  import('./components/mainpages/Weddings')
);
const LazyServicesRoute = React.lazy(() =>
  import('./components/mainpages/Services')
);
const LazyContactRoute = React.lazy(() =>
  import('./components/mainpages/Contact')
);
const LazyAboutMeRoute = React.lazy(() =>
  import('./components/mainpages/AboutMe')
);
const LazyAlyssaAndRyneRoute = React.lazy(() =>
  import('./components/Weddings/AlyssaAndRyne')
);
const LazyKarleyAndChrisRoute = React.lazy(() =>
  import('./components/Weddings/KarleyAndChris')
);
const LazyHannahAndBenRoute = React.lazy(() =>
  import('./components/Weddings/HannahAndBen')
);
const LazyJanieAndHaroldRoute = React.lazy(() =>
  import('./components/Weddings/JanieAndHarold')
);
const LazyRobynAndKellyRoute = React.lazy(() =>
  import('./components/Weddings/RobynAndKelly')
);
const LazyKatieAndBrettRoute = React.lazy(() =>
  import('./components/Weddings/KatieAndBrett')
);
const LazyMeganAndJustinRoute = React.lazy(() =>
  import('./components/Weddings/MeganAndJustin')
);
const LazyWhitneyAndJamesRoute = React.lazy(() =>
  import('./components/Weddings/WhitneyAndJames')
);
const LazyCoriAndJesseRoute = React.lazy(() =>
  import('./components/Weddings/CoriAndJesse')
);
const LazyWeddingServiceRoute = React.lazy(() =>
  import('./components/mainpages/services/WeddingService')
);
const LazyEventServiceRoute = React.lazy(() =>
  import('./components/mainpages/services/EventService')
);
const SuccessPage = props => <LazySuccessPage {...props} />
const HomePage = props => <LazyHomePageRoute {...props} />;
const Weddings = props => <LazyWeddingRoute {...props} />;
const Services = props => <LazyServicesRoute {...props} />;
const Contact = props => <LazyContactRoute {...props} />;
const AboutMe = props => <LazyAboutMeRoute {...props} />;
const AlyssaAndRyne = props => <LazyAlyssaAndRyneRoute {...props} />;
const KarleyAndChris = props => <LazyKarleyAndChrisRoute {...props} />;
const HannahAndBen = props => <LazyHannahAndBenRoute {...props} />;
const JanieAndHarold = props => <LazyJanieAndHaroldRoute {...props} />;
const RobynAndKelly = props => <LazyRobynAndKellyRoute {...props} />;
const KatieAndBrett = props => <LazyKatieAndBrettRoute {...props} />;
const MeganAndJustin = props => <LazyMeganAndJustinRoute {...props} />;
const WhitneyAndJames = props => <LazyWhitneyAndJamesRoute {...props} />;
const CoriAndJesse = props => <LazyCoriAndJesseRoute {...props} />;
const WeddingService = props => <LazyWeddingServiceRoute {...props} />;
const EventService = props => <LazyEventServiceRoute {...props} />;

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/weddingPlannerSite">
        <React.Suspense fallback={<LoadingPage />}>
          <div>
            <Route path="/" exact component={HomePage} />

            <Route path="/Success" exact component={SuccessPage} />

            <Route path="/Weddings" exact component={Weddings} />

            <Route path="/Services" exact component={Services} />

            <Route path="/AboutMe" exact component={AboutMe} />

            <Route path="/Contact" exact component={Contact} />

            <Route path="/AlyssaAndRyne" exact component={AlyssaAndRyne} />

            <Route path="/KarleyAndChris" exact component={KarleyAndChris} />
            <Route path="/HannahAndBen" exact component={HannahAndBen} />

            <Route path="/JanieAndHarold" exact component={JanieAndHarold} />
            <Route path="/KatieAndBrett" exact component={KatieAndBrett} />

            <Route path="/MeganAndJustin" exact component={MeganAndJustin} />
            <Route path="/RobynAndKelly" exact component={RobynAndKelly} />

            <Route path="/CoriAndJesse" exact component={CoriAndJesse} />

            <Route path="/WhitneyAndJames" exact component={WhitneyAndJames} />

            <Route
              path="/services/WeddingService"
              exact
              component={WeddingService}
            />

            <Route path="/Services/EventService" component={EventService} />
          </div>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
