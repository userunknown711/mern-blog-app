import { useSelector } from 'react-redux';

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className='min-h-screen bg-gradient-to-br from-white to-gray-50 text-slate-700 dark:from-[rgb(10,15,28)] dark:to-[rgb(3,6,17)] dark:text-slate-200'>
        <div className='min-h-screen'>
          {children}
        </div>
      </div>
    </div>
  );
}
