import { LogoList } from '@/Utils/LogoList';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// ...

const LogoMarquee = () => {
  const [isReverse, setIsReverse] = useState(false);

  useEffect(() => {
    const logoContainer = document.querySelector('.logoContainer');
    const observer = new IntersectionObserver(
      (entries) => {
        const lastEntry = entries[entries.length - 1];
        setIsReverse(lastEntry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(logoContainer);
  }, []);

  return (
    <div className="parentContainer overflow-hidden">
  <div className="logoContainer flex justify-center items-center gap-6 animate-marquee-bounce-reverse">
    {LogoList.map((log, indexedDB) => (
      <Image key={indexedDB} src={log.src} alt="logo" width={115} height={115} />
    ))}
  </div>
</div>

  );
};

export default LogoMarquee;
