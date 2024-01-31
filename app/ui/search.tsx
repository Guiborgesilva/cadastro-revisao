'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { mulish } from "./fonts"

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams()
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string){
    console.log(`Searching... ${term}`)
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="relative flex justify-end w-64 text-black search">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className={`peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-slate-400 ${mulish.className}`}
        placeholder={placeholder}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
