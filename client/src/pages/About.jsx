import CallToAction from '../components/CallToAction';

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-grid-slate bg-radial-fade'>
      <div className='max-w-2xl mx-auto p-6 text-center bg-white/70 dark:bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-200/60 dark:border-white/10 shadow-card'>
        <div>
          <h1 className='text-3xl font-semibold tracking-tight text-center my-6'>
            About Alam's Blog
          </h1>
          <div className='text-sm text-slate-600 dark:text-slate-300 flex flex-col gap-6'>
            <p>
              Welcome to Alam's Blog! This blog was created by Md Alam
              as a personal project to share his thoughts and ideas with the
              world. Alam is a passionate developer who loves to write about
              technology, coding, and everything in between.
            </p>

            <p>
              On this blog, you'll find weekly articles and tutorials on topics
              such as web development, software engineering, and programming
              languages. Alam is always learning and exploring new
              technologies, so be sure to check back often for new content!
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
        <div className='mt-10'>
          <CallToAction />
        </div>
      </div>
    </div>
  );
}