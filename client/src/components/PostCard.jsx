import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className='group relative w-full border border-slate-200/70 dark:border-white/10 hover:border-brand-400/60 h-[400px] overflow-hidden rounded-xl sm:w-[430px] transition-all mx-auto shadow-sm hover:shadow-md bg-white/60 dark:bg-slate-900/40 backdrop-blur-md'>
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt='post cover'
          className='h-[260px] w-full  object-cover group-hover:h-[210px] transition-all duration-300 z-20'
        />
      </Link>
      <div className='p-4 flex flex-col gap-2'>
        <p className='text-lg font-semibold line-clamp-2 tracking-tight'>{post.title}</p>
        <span className='italic text-sm text-slate-500 dark:text-slate-300'>{post.category}</span>
        <Link
          to={`/post/${post.slug}`}
          className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-brand-500 text-brand-600 hover:bg-brand-600 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-3 shadow-sm'
        >
          Read article
        </Link>
      </div>
    </div>
  );
}
