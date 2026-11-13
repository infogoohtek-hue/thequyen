'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function URLFilters({onChange}:{onChange:(params:URLSearchParams)=>void}) {
  const pathname=usePathname();
  const params=useSearchParams();
  const search=params.toString();
  useEffect(()=>{if(pathname==='/')onChange(new URLSearchParams(search))},[pathname,search,onChange]);
  return null;
}
