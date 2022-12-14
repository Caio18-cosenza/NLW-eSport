import * as Dialog from '@radix-ui/react-dialog';
import { MagnifyingGlassPlus } from 'phosphor-react';

interface CreateAdsProps {}

export const CreateAds = ({}: CreateAdsProps) => {
  return (
    <div className='pt-1 bg-gradient self-stretch rounded-lg overflow-hidden mt-8'>
      <div className='bg-[#2A2634] px-8 py-6 flex items-center justify-between'>
        <div>
          <strong className='text-2xl text-white font-black block'>
            {' '}
            Não encontrou seu duo?{' '}
          </strong>
          <span className='text-zinc-400 block'>
            {' '}
            Publique um anúncio para encontrar novos players!{' '}
          </span>
        </div>
        <Dialog.Trigger className='px-3 py-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3'>
          {' '}
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio{' '}
        </Dialog.Trigger>
      </div>
    </div>
  );
};
