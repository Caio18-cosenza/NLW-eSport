import { useEffect, useState } from 'react';
import './styles/global.css';
import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';

import logo from './assets/logo.svg';

import { GameBanner } from './components/GameBanner';
import { CreateAds } from './components/CreateAds';
import { CreateAdModal } from './components/CreateAdModal';

interface GamesProps {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<GamesProps[]>([]);

  useEffect(() => {
    axios('http://localhost:8080/games').then((json) => setGames(json.data));
  }, []);

  return (
    <div className='max-w-[1344px] mx-auto flex items-center flex-col my-20'>
      <img src={logo} alt='Logo NLW' />
      <h1 className='text-6xl text-white font-black mt-20'>
        {' '}
        Seu{' '}
        <span className='bg-gradient text-transparent bg-clip-text'>
          {' '}
          duo{' '}
        </span>{' '}
        está aqui.{' '}
      </h1>
      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map((game) => (
          <GameBanner
            key={game.id}
            title={game.title}
            bannerUrl={game.bannerUrl}
            ads={game._count.ads}
          />
        ))}
      </div>
      <Dialog.Root>
        <CreateAds />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
