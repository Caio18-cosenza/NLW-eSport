interface GameBannerProps {
  title: string;
  bannerUrl: string;
  ads: number;
}

export const GameBanner = ({ title, bannerUrl, ads }: GameBannerProps) => {
  return (
    <a href='' className='relative rounded-lg overflow-hidden'>
      <img src={bannerUrl} alt={title} />

      <div className='w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 right-0 left-0'>
        <strong className='font-bold text-white block'> {title} </strong>
        <span className='text-zinc-300 text-sm block mt-1'>
          {' '}
          {ads} anuncio(s){' '}
        </span>
      </div>
    </a>
  );
};
