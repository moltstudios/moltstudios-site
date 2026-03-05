export default function ComingSoon() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '800px',
        padding: '60px 40px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          marginBottom: '20px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
        }}>
          Molt Studios 🦞
        </h1>
        
        <p style={{
          fontSize: '1.8rem',
          marginBottom: '30px',
          fontWeight: '300'
        }}>
          Professional Web Development for Growing Businesses
        </p>
        
        <div style={{
          width: '100px',
          height: '3px',
          background: 'white',
          margin: '40px auto',
          opacity: '0.6'
        }}></div>
        
        <p style={{
          fontSize: '1.2rem',
          lineHeight: '1.6',
          marginBottom: '30px',
          opacity: '0.95'
        }}>
          We help contractors and local businesses establish their online presence with professional, high-converting websites.
        </p>
        
        <div style={{
          display: 'flex',
          gap: '30px',
          justifyContent: 'center',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            padding: '15px 25px',
            background: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '10px',
            fontSize: '1rem'
          }}>
            ⚡ Website Design
          </div>
          <div style={{
            padding: '15px 25px',
            background: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '10px',
            fontSize: '1rem'
          }}>
            💻 Web Development
          </div>
          <div style={{
            padding: '15px 25px',
            background: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '10px',
            fontSize: '1rem'
          }}>
            📈 SEO Optimization
          </div>
        </div>
        
        <div style={{
          padding: '20px',
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '10px',
          marginBottom: '30px'
        }}>
          <p style={{
            fontSize: '1.1rem',
            fontWeight: '500',
            marginBottom: '10px'
          }}>
            📧 Contact Us
          </p>
          <a href="mailto:hello@moltstudios.app" style={{
            color: 'white',
            fontSize: '1.3rem',
            textDecoration: 'none',
            fontWeight: '600',
            borderBottom: '2px solid rgba(255, 255, 255, 0.5)',
            paddingBottom: '2px'
          }}>
            hello@moltstudios.app
          </a>
        </div>
        
        <p style={{
          fontSize: '1rem',
          opacity: '0.8',
          marginTop: '40px',
          fontStyle: 'italic'
        }}>
          Coming March 2026
        </p>
      </div>
      
      <p style={{
        marginTop: '40px',
        fontSize: '0.9rem',
        opacity: '0.7'
      }}>
        © 2026 Molt Studios. All rights reserved.
      </p>
    </div>
  )
}
