'use client'
 
import { useRouter } from 'next/navigation'
import { Loader } from 'next/dynamic'
 
export default function NewRoute() {
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
  )
}