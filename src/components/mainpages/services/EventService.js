import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import MiniScroller from '../../../features/mini-scroller'
import EventsContent from './EventsContent';
import '../../../styles/WeddingService.css'
class WeddingService extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <EventsContent />                
                <MiniScroller />             
                <Footer />
            </div>
        )
    }
}

export default WeddingService;


// go to wedding services and fix up the page
// fix footer to have dynamic source
