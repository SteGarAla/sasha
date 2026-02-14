# Custom URL Shortener

A URL shortening service that generates shareable short links and resolves them through a low-latency redirect pipeline, with caching, rate limiting, and observability built in.

## Tech Stack

Next.js, TypeScript, Prisma, PostgreSQL, Redis, OpenTelemetry

## Key Capabilities

- Generate short links with collision-resistant code generation (retry logic)
- Resolve short links through a cache-first redirect flow to reduce database load
- Support expiration and cleanup workflows for short-lived URLs
- Apply rate limiting to curb brute-force abuse
- Instrument redirects with OpenTelemetry metrics, structured logs, and traces (p95/p99 latency, error rates, cache performance)
