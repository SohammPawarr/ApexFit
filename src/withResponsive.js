import React, { useState, useEffect } from 'react';

const withResponsive = (WrappedComponent) => {
  return (props) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    let deviceType = 'desktop';
    if (windowWidth < 768) deviceType = 'mobile';
    else if (windowWidth < 1024) deviceType = 'tablet';

    return <WrappedComponent {...props} deviceType={deviceType} />;
  };
};

export default withResponsive;
