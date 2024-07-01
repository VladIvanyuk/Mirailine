'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './FadeIntoView.module.scss';
import { classNames } from '@/utils/classNames/classNames';

function FadeIntoView({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isVisible, setVisible] = useState(true);
  const [alreadyViewed, setAlreadyViewed] = useState(false);
  const domRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const currentDomRef = domRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);

        // NOTE: Stop the animation from playing when the element already appeared
        if (entry.isIntersecting) {
          setAlreadyViewed(true);
        }
      });
    });
    observer.observe(currentDomRef);

    return () => observer.unobserve(currentDomRef);
  }, []);

  return (
    <div
      className={classNames(
        `${styles.fadeIntoView} ${isVisible ? styles.isVisible : ''} ${
          alreadyViewed ? styles.alreadyViewed : ''
        }`,
        {},
        [className]
      )}
      ref={domRef}
    >
      {children}
    </div>
  );
}

export default FadeIntoView;
