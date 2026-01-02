# Performance Optimization TODO

## Task: Remove Redundant DigitalRain Component

### Files to Edit:
1. [ ] app/courses/page.tsx - Remove DigitalRain import
2. [ ] app/career/page.tsx - Remove DigitalRain import

### Changes:
- Remove: `import { DigitalRain } from "@/components/digital-rain"`
- Remove: `<DigitalRain />` component from JSX

### Rationale:
- BinaryRainBackground already includes satellite animation with particles
- Having both canvas animations running causes performance issues
- Single animation loop = better FPS and smoother experience

### Status:
- [x] Completed
- [x] Removed DigitalRain from app/courses/page.tsx
- [x] Removed DigitalRain from app/career/page.tsx

