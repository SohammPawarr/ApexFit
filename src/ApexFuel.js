import React from 'react';
import withResponsive from './withResponsive';
import './ApexFuel.css';

const ApexFuel = ({ deviceType }) => {
  const isMobile = deviceType === 'mobile';
  const isTablet = deviceType === 'tablet';
  
  const baseTileStyle = {
    borderRadius: '24px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
    border: '1px solid rgba(0,0,0,0.08)',
    overflow: 'hidden',
    position: 'relative'
  };

  const styles = {
    container: {
      backgroundColor: '#FFFFFF', // 70% White
      minHeight: '100vh',
      color: '#1A1A1A',
      fontFamily: '"Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif'
    },
    nav: {
      padding: isMobile ? '20px' : '30px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid rgba(0,0,0,0.05)'
    },
    logo: {
      fontFamily: '"Monument Extended", "Inter", sans-serif',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '1.5rem',
      letterSpacing: '1px'
    },
    heroTile: {
      ...baseTileStyle,
      backgroundColor: '#1A1A1A', // 10% Black
      color: '#FFFFFF',
      gridColumn: isMobile ? 'span 1' : (isTablet ? 'span 2' : 'span 2'),
      gridRow: isMobile ? 'span 1' : 'span 2',
      padding: isMobile ? '30px' : '40px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: isMobile ? '280px' : 'auto'
    },
    fuelGradesTile: {
      ...baseTileStyle,
      backgroundColor: '#E63946', // 20% Red
      color: '#FFFFFF',
      gridColumn: isMobile ? 'span 1' : 'span 1',
      gridRow: 'span 1',
      padding: '30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      border: 'none'
    },
    statsTile: {
      ...baseTileStyle,
      backgroundColor: '#FFFFFF',
      color: '#1A1A1A',
      gridColumn: isMobile ? 'span 1' : 'span 1',
      gridRow: 'span 1',
      padding: '30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    locationTile: {
      ...baseTileStyle,
      backgroundColor: '#F5F5F5',
      color: '#1A1A1A',
      gridColumn: isMobile ? 'span 1' : 'span 2',
      gridRow: 'span 1',
      padding: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'url("https://images.unsplash.com/photo-1527351659755-e9ae4d03d3ce?q=80&w=2070&auto=format&fit=crop")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    locationOverlay: {
      backgroundColor: '#1A1A1A',
      color: '#FFFFFF',
      padding: '16px 24px',
      borderRadius: '16px',
      fontFamily: '"Monument Extended", sans-serif',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: '0.5px'
    },
    headingHero: {
      fontFamily: '"Monument Extended", "Inter", sans-serif',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: isMobile ? '2.5rem' : '4.5rem',
      lineHeight: '0.9',
      margin: '0 0 20px 0'
    },
    headingSecondary: {
      fontFamily: '"Monument Extended", "Inter", sans-serif',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '2rem',
      margin: '0',
      lineHeight: '1'
    },
    headingTertiary: {
      fontFamily: '"Monument Extended", "Inter", sans-serif',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      margin: '0 0 10px 0',
      letterSpacing: '0.5px',
      opacity: '0.8'
    },
    bodyText: {
      fontSize: '1.1rem',
      lineHeight: '1.5',
      opacity: '0.85',
      margin: '0'
    },
    badge: {
      alignSelf: 'flex-start',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      backgroundColor: 'rgba(255,255,255,0.2)',
      marginBottom: '20px'
    },
    fuelPrice: {
      fontSize: '3.5rem',
      fontFamily: '"Monument Extended", "Inter", sans-serif',
      fontWeight: 'bold',
      margin: '10px 0'
    }
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <div style={styles.logo}>APEXFUEL</div>
        <div style={{...styles.bodyText, fontWeight: 'bold'}}>PREMIUM GRADE</div>
      </nav>
      
      <div className="bento-container">
        {/* Hero Tile */}
        <div className="tile-hover" style={styles.heroTile}>
          <div>
            <div style={{...styles.badge, backgroundColor: 'rgba(230,57,70,0.2)', color: '#E63946'}}>New Formula</div>
            <h1 style={styles.headingHero}>Peak<br/>Performance<br/>Refueled.</h1>
          </div>
          <p style={{...styles.bodyText, maxWidth: '80%'}}>
            Engineered for high-end combustion engines. Experience unmatched power delivery 
            and superior engine protection with our 99 octane formula.
          </p>
        </div>
        
        {/* Fuel Grades Tile */}
        <div className="tile-hover" style={styles.fuelGradesTile}>
          <div>
            <h3 style={styles.headingTertiary}>Apex 99</h3>
            <div style={styles.fuelPrice}>$5.49</div>
            <p style={{...styles.bodyText, fontSize: '0.9rem'}}>PER GALLON</p>
          </div>
          <p style={{...styles.bodyText, marginTop: '20px'}}>Pure efficiency. Zero compromise for performance vehicles.</p>
        </div>
        
        {/* Performance Stats Tile */}
        <div className="tile-hover" style={styles.statsTile}>
          <h3 style={{...styles.headingTertiary, color: '#E63946'}}>Performance</h3>
          <div>
            <h2 style={styles.headingSecondary}>+12%</h2>
            <p style={{...styles.bodyText, marginTop: '5px', fontSize: '0.9rem', color: '#666'}}>Engine Efficiency</p>
          </div>
          <div style={{ marginTop: '20px' }}>
            <h2 style={styles.headingSecondary}>99.9%</h2>
            <p style={{...styles.bodyText, marginTop: '5px', fontSize: '0.9rem', color: '#666'}}>Carbon Reduction</p>
          </div>
        </div>

        {/* Info Tile */}
        <div className="tile-hover" style={{...baseTileStyle, backgroundColor: '#1A1A1A', color: '#FFF', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gridColumn: 'span 1', gridRow: 'span 1'}}>
          <h3 style={{...styles.headingTertiary, color: '#E63946'}}>Rewards</h3>
           <h2 style={{...styles.headingSecondary, fontSize: '1.5rem', margin: '15px 0'}}>Double Points<br/>Weekend</h2>
           <p style={{...styles.bodyText, fontSize: '0.9rem'}}>Earn 2x Apex points on all Premium grade fuel purchases this weekend.</p>
        </div>
        
        {/* Environment Tile */}
        <div className="tile-hover" style={{...baseTileStyle, backgroundColor: '#FFFFFF', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gridColumn: 'span 1', gridRow: 'span 1'}}>
           <h3 style={{...styles.headingTertiary, color: '#1A1A1A'}}>Eco-Tech</h3>
           <p style={{...styles.bodyText, color: '#666', marginBottom: '20px'}}>Reduced emissions formula meets 2030 standards today.</p>
           <div style={{height: '8px', width: '100%', backgroundColor: '#F0F0F0', borderRadius: '4px', overflow: 'hidden'}}>
             <div style={{height: '100%', width: '75%', backgroundColor: '#E63946', borderRadius: '4px'}}></div>
           </div>
        </div>

        {/* Location Tile */}
        <div className="tile-hover" style={styles.locationTile}>
          <div style={styles.locationOverlay}>
            Find a Station
          </div>
        </div>
      </div>
    </div>
  );
};

export default withResponsive(ApexFuel);
