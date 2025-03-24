// pages/index.js
import DriftLeaderboard from './components/DriftLeaderboard';

const Home = () => {
  const competitors = [
    { id: 1, name: 'Takumi ', score: 98.7, car: 'Toyota AE86' },
    { id: 2, name: 'Keisuke ', score: 96.2, car: 'Mazda RX-7' },
    { id: 3, name: 'Ryosuke ', score: 95.8, car: 'Mazda RX-7' },
    { id: 4, name: 'Bunta ', score: 94.5, car: 'Subaru Impreza' },
    { id: 5, name: 'Kenta Nakamura', score: 92.1, car: 'Nissan Silvia' },
    { id: 6, name: 'Itsuki Takeuchi', score: 89.3, car: 'Toyota Levin' },
    { id: 7, name: 'Shingo Shoji', score: 88.7, car: 'Honda Civic' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <DriftLeaderboard competitors={competitors} />
    </div>
  );
};

export default Home;