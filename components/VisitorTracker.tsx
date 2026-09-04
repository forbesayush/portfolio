'use client';

import { useEffect } from 'react';

export default function VisitorTracker() {
  useEffect(() => {
    try {
      import('@/src/services/tracker')
        .then((mod) => {
          if (mod && typeof mod.trackNewVisitor === 'function') {
            mod.trackNewVisitor().catch(() => {});
          }
        })
        .catch(() => {});
    } catch (_) {}
  }, []);

  return null;
}
