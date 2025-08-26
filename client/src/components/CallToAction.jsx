import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex p-4 justify-center items-center rounded-2xl flex-col sm:flex-row text-center bg-white/70 dark:bg-slate-900/40 backdrop-blur-md shadow-soft border border-slate-200/60 dark:border-white/10'>
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl font-semibold tracking-tight'>
          Want to learn HTML, CSS and JavaScript by building fun and engaging
          projects?
        </h2>
        <p className='text-slate-600 dark:text-slate-300 my-2'>
          Check our 100 js projects website and start building your own projects
        </p>
        <a
          href='https://www.google.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button
            gradientDuoTone='purpleToBlue'
            className='rounded-xl w-full shadow hover:shadow-lg transition-shadow'
          >
            100 JS Projects Website
          </Button>
        </a>
      </div>
      <div className='flex-1 p-7'>
        <img className='rounded-xl shadow-soft' src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221114110410/Top-10-JavaScript-Project-Ideas-For-Beginners-2023.png' />
      </div>
    </div>
  );
}
