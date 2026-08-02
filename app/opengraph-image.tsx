import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/site';

export const alt = `${siteConfig.name} — East Alabama land and site services`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#304830', color: 'white', padding: 80, borderBottom: '22px solid #efbd1f' }}>
        <div style={{ color: '#efbd1f', fontSize: 28, letterSpacing: 7, textTransform: 'uppercase' }}>East Alabama land services</div>
        <div style={{ fontSize: 92, fontWeight: 900, lineHeight: 1, marginTop: 30, textTransform: 'uppercase' }}>{siteConfig.name}</div>
        <div style={{ fontSize: 34, color: '#d7e3dd', marginTop: 35 }}>Clearing • Mulching • Grading • Drainage • Gravel</div>
      </div>
    ),
    size,
  );
}
