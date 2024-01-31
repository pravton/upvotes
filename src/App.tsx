import React from 'react';
import UpvotesList from './components/UpvotesList';
import { UpvoteProvider } from './context/UpvoteContext';
import './App.css';

function App() {
  return (
    <UpvoteProvider>
      <section className='w-full min-h-screen flex flex-col justify-between'>
        <header className='bg-gray-100 py-10'>
          <h1 className='text-4xl text-center font-bold mb-5'>Upvotes Technical Assessment</h1>
        </header>
        <div className='container xl mx-auto px-5'>
          <div className='my-5 py-10 px-7 shadow-lg rounded-xl w-full max-w-[700px] mx-auto flex flex-col gap-5'>
          <UpvotesList listIndex={0} />
          <UpvotesList listIndex={1} />
          <UpvotesList listIndex={2} />
          </div>
        </div>
        <footer className='flex justify-center py-5 bg-gray-100'>
          <p>
            Completed 
            by{' '}
            <a
              className='text-red-500'
              href='https://pravton.com'
              target='_blank'
              rel="noreferrer" 
              >Clinton</a>
          </p>
        </footer>
      </section>
    </UpvoteProvider>
  );
}

export default App;
