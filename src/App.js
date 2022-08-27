import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CardWithImage from './components/card/card-with-image/card-with-image';
import SimpleCard from './components/card/simple-card/simple-card';

function App() {
  const cards = [
    {
      title: 'Card title',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: 'https://picsum.photos/300/200'
    },
    {
      title: 'Card title',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
  ];

  return (
    <div className='container'>
      {cards.map(card => card.img 
        ? <CardWithImage key={cards.indexOf(card)} {...card} /> 
        : <SimpleCard key={cards.indexOf(card)} {...card} />)
      }
    </div>
  );
}

export default App;
