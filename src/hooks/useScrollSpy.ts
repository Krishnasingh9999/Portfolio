import { useEffect, useState } from 'react';

export const useScrollSpy = (sectionIds: string[]): string => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -40% 0px',
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Fallback/refinement for top and bottom edge scroll locations
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveId(sectionIds[0]);
      } else if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
        setActiveId(sectionIds[sectionIds.length - 1]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return activeId;
};
