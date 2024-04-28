import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      id: '3jh32',
      label: 'You Can Dance?',
      content: '...If you want to.'
    },
    {
      id: '3jferf',
      label: 'You Can Leave?',
      content: '...Your friends behind.'
    },
    {
      id: 'fffe32',
      label: 'Cuz if your friends dont dance?',
      content: '...Then theyre no friends of mine'
    }
  ];

  return <Accordion items={items} />;
}

export default App;