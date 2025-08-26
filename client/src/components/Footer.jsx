import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border-t border-slate-200/60 dark:border-white/10 bg-gradient-to-b from-white/90 to-slate-50/70 dark:from-slate-900/60 dark:to-slate-900/30 backdrop-blur-md'>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-6'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-xl sm:text-2xl font-extrabold tracking-tight dark:text-white hover:opacity-90 transition-opacity'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-brand-500 via-purple-500 to-pink-500 rounded-lg text-white shadow ring-1 ring-white/10 mr-1'>
                Alam's
              </span>
              <span className='text-slate-800 dark:text-slate-100'>Blog</span>
            </Link>
            <p className='text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-md'>
              Articles, tutorials and projects to help you grow as a developer.
            </p>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-8 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title className='text-slate-700 dark:text-slate-200' title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.100jsprojects.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  100 JS Projects
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Alam's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className='text-slate-700 dark:text-slate-200' title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.github.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='#'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className='text-slate-700 dark:text-slate-200' title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between py-4'>
          <Footer.Copyright
            href='#'
            by="Alam's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-5 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='#' icon={BsFacebook} className='hover:text-brand-600 transition-colors'/>
            <Footer.Icon href='#' icon={BsInstagram} className='hover:text-brand-600 transition-colors'/>
            <Footer.Icon href='#' icon={BsTwitter} className='hover:text-brand-600 transition-colors'/>
            <Footer.Icon href='https://github.com/' icon={BsGithub} className='hover:text-brand-600 transition-colors'/>
            <Footer.Icon href='#' icon={BsDribbble} className='hover:text-brand-600 transition-colors'/>

          </div>
        </div>
      </div>
    </Footer>
  );
}
