import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

export const alt = 'Assaf Manzur — Senior Platform and DevOps Tech Lead';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const tags = ['Kubernetes', 'AWS', 'Terraform', 'Istio', 'GitOps'];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          color: '#ffffff',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 34, color: '#94a3b8', letterSpacing: 2 }}>
            PORTFOLIO
          </div>
          <div style={{ display: 'flex', fontSize: 82, fontWeight: 700, marginTop: 16 }}>
            Assaf Manzur
          </div>
          <div style={{ display: 'flex', fontSize: 40, color: '#cbd5e1', marginTop: 12 }}>
            Platform Architect · DevOps &amp; Reliability
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {tags.map((tag) => (
            <div
              key={tag}
              style={{
                display: 'flex',
                fontSize: 28,
                color: '#e2e8f0',
                border: '2px solid #334155',
                borderRadius: 9999,
                padding: '10px 26px',
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', fontSize: 32, color: '#94a3b8' }}>
          assafmanzur.com
        </div>
      </div>
    ),
    { ...size },
  );
}
