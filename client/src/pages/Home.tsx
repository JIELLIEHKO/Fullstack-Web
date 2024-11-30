import { FC } from 'react';
import img from '../assets/example.png'

const Home: FC = () => {
  return (<div className='mt-10 '>
    <div className='flex flex-col items-center'>
      <h1 className='text-4xl uppercase'>FinTrack</h1>
      <p className='text-2xl my-5 mx-10 text-center'>
        <span className='uppercase'>FinTrack</span> is a convenient tool for
        managing personal finances. The site allows you to easily record income
        and expenses, analyze your spending using visual graphs and charts,
        and plan your budget.
      </p>
    </div>
    <div className="flex flex-col items-center mt-10">
      <h2 className='text-2xl uppercase'>How this works?</h2>
      <ol className='flex flex-col list-decimal mx-10'>
        <li className="text-lg mt-2">
          Go to the Categories tab. Create several categories, for example
          "Salary, Gift, Shop, Freelance, etc."
        </li>
        <li className="text-lg">
          Go to the Transactions tab. In the title field, write the desired month,
          in the amount, write the amount, then select the category and indicate
          whether it is income or expenses. Submit!
        </li>
        <li className="text-lg">
          On the page below, the table will display this transaction.
          And in the upper right corner, the full amount of income and
          expenses will be indicated and will be displayed on the graph.
        </li>
      </ol>
      <div className="flex flex-col justify-center items-center my-2 b-sky-600">
        <p className='my-2 text-2xl'>Example</p>
        <img src={img} alt="Example screenshot" />
      </div>
    </div>
  </div>);
};

export default Home;