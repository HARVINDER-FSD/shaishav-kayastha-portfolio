import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f1419',
          borderRadius: '12px',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            color: '#d4a574',
            fontFamily: 'Arial',
          }}
        >
          SK
        </div>
        <div
          style={{
            width: '40px',
            height: '2px',
            background: '#d4a574',
            marginTop: '4px',
            borderRadius: '1px',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
