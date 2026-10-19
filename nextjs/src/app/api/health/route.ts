import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextRequest) {
  const target = req.nextUrl.searchParams.get('target') || 'system';

  return NextResponse.json({
    status: 'ONLINE',
    target,
    version: '1.0.0-clean-arch',
    runtime: 'Bun 1.4.3 / Next.js 16',
    architecture: 'Ports & Adapters (Hexagonal)',
    timestamp: new Date().toISOString(),
    supportedBackends: ['python-ai', 'aspnet-core', 'go-gin', 'rust-axum', 'mock-standalone'],
  });
}
