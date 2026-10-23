import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Utilities/Header/Header';
import Home from './Pages/Home/HomeMain/HomeMain';
import Footer from './Utilities/Footer/Footer';
import AboutUs from './Pages/AboutUs/AboutUs';
import Gallery from './Pages/Gallery/Gallery';
import Teams from './Pages/Team/Team';
import Faqs from './Pages/Faq/Faq';
import Games from './Pages/Games/Games';
import Matchese from './Pages/Matchese/Matchese';
import MatcheseDetails from './Pages/MatcheseDetails/MatcheseDetails';
import LiveStreaming from './Pages/LiveStreaming/LiveStreaming';
import Error404 from './Pages/404';
import BlogPost from './Pages/Blog/Blog';
import ContactUs from './Pages/ContactUs/ContactUs';
import SinglePost from './Pages/SinglePost/SinglePost';


const App = () => {
  return (
    <Router>
      <div className="App">

        {/* Header */}
        <Header />

        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/team" component={Teams} />
          <Route exact path="/faq" component={Faqs} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/matches" component={Matchese} />
          <Route exact path="/match-details" component={MatcheseDetails} />
          <Route exact path="/live-streaming" component={LiveStreaming} />
          <Route exact path="/blog" component={BlogPost} />
          <Route exact path="/blog/:slug" component={SinglePost} />
          <Route exact path="/contact" component={ContactUs} />
          <Route component={Error404} />

        </Switch>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
