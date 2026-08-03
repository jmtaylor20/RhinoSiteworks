import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/site';

export const alt = `${siteConfig.name} — East Alabama land services`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#243f27',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(110deg, rgba(9,31,17,.98) 0%, rgba(24,63,34,.96) 54%, rgba(47,78,49,.9) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: -110,
            top: -85,
            width: 490,
            height: 490,
            borderRadius: 999,
            border: '62px solid rgba(242,185,20,.16)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: -150,
            bottom: -210,
            width: 510,
            height: 510,
            borderRadius: 999,
            border: '54px solid rgba(255,255,255,.05)',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '72px 88px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 22, marginBottom: 44 }}>
            <div
              style={{
                width: 92,
                height: 92,
                borderRadius: 20,
                background: '#f2b914',
                color: '#0b2413',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 62,
                fontWeight: 900,
                lineHeight: 1,
              }}
            >
              R
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ color: '#f2b914', fontSize: 54, fontWeight: 900, letterSpacing: 6, lineHeight: 1 }}>RHINO</div>
              <div style={{ color: '#ffffff', fontSize: 28, fontWeight: 800, letterSpacing: 12, lineHeight: 1.3 }}>LANDWORK</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 28 }}>
            <div style={{ width: 92, height: 4, background: '#f2b914' }} />
            <div style={{ color: '#f2b914', fontSize: 24, fontWeight: 900, letterSpacing: 7, textTransform: 'uppercase' }}>
              East Alabama Land Services
            </div>
            <div style={{ width: 92, height: 4, background: '#f2b914' }} />
          </div>

          <div style={{ fontSize: 72, fontWeight: 900, lineHeight: .98, letterSpacing: -2, textTransform: 'uppercase', maxWidth: 900 }}>
            Land Clearing & Dirt Work
          </div>
          <div style={{ color: '#f2b914', fontSize: 44, fontWeight: 900, marginTop: 10 }}>in East Alabama</div>

          <div style={{ display: 'flex', gap: 20, marginTop: 44, color: '#eef4ef', fontSize: 28, fontWeight: 800 }}>
            <span>Clearing</span>
            <span style={{ color: '#f2b914' }}>•</span>
            <span>Mulching</span>
            <span style={{ color: '#f2b914' }}>•</span>
            <span>Grading</span>
            <span style={{ color: '#f2b914' }}>•</span>
            <span>Drainage</span>
            <span style={{ color: '#f2b914' }}>•</span>
            <span>Gravel</span>
          </div>
        </div>
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 20, background: '#f2b914' }} />
      </div>
    ),
    size,
  );
}
