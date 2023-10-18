import { FaChevronDown } from 'react-icons/fa';
export default function PopupButton() {
  return (
    <button
      style={{ right: '-3rem' }}
      className='text-dark top-4/6 500 fixed right-0  top-3/4 flex rotate-90 items-center rounded rounded-bl-3xl rounded-br-3xl border-none bg-yellow-400 px-4 py-2 font-bold hover:bg-yellow-500'
    >
      <span>Try it free</span> <FaChevronDown className='mx-2 text-sm' />
    </button>
  );
}
