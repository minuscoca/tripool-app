import Card from '@/components/card'

export default function Home() {
  return (
    <main className="flex flex-col sm:flex-row min-h-screen items-center justify-center gap-8 p-4">
      <div className='grid grid-cols-2 w-full gap-8'>
        <Card />
        <Card />
      </div>
    </main>
  )
}
