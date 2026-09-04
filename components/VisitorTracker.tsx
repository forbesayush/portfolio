'use client';

import { useEffect } from 'react';
import { trackNewVisitor } from '@/src/services/tracker';

export default function VisitorTracker() {
  useEffect(() => {
    trackNewVisitor();
  }, []);

  return null;
}
