import Image from 'next/image';
import instagram from '@/assets/instagram.png';
import facebook from '@/assets/facebook.png';
import twitter from '@/assets/twitter.png'

const Footer = () => {
  return (
    <div className='bg-[#244d3fFF] py-10'>

  <div className='container mx-auto px-4 text-white'>

  <div className='text-center space-y-3'>
  <h2 className='text-3xl sm:text-4xl md:text-5xl'><span className='font-bold'>Keen</span>Keeper</h2>
   <p className='text-sm sm:text-base max-w-xl mx-auto text-gray-200'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
      </div>

      <div className='space-y-3 pt-5'>
       <h3 className='text-center text-base sm:text-lg font-semibold'>Social</h3>

       <div className='flex justify-center gap-5'>
        <Image 
       width={20} 
       height={20} 
       src={instagram} 
       alt='instagram'></Image>
       <Image 
       width={20} 
       height={20} 
       src={facebook} 
       alt=''></Image>
       
       <Image 
       width={20} 
       height={20} 
       src={twitter} 
       alt='twitter'></Image>
       </div>
      </div>
      <p className='border border-t-gray-700 text-gray-600 mt-5 w-full' ></p>

      <div className='flex justify-between text-gray-400'>
        <p><small>© 2026 KeenKeeper. All rights reserved.</small></p>
        <p><small>Privacy Policy           Terms of Service           Cookies</small></p>
      </div>
      
       


      </div>
    </div>
  );
};

export default Footer;