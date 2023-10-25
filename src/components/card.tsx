import { cn } from "@/lib/utils"
import { type ClassValue } from "clsx"

export default function Card() {
  return (
    <div className="@container">
      <div className="flex flex-col border rounded-md p-4">
        <CardHeader />
        <Photos />
      </div>
    </div>
  )
}

function CardHeader() {
  return (
    <header className="flex flex-col @sm:gap-4 @sm:flex-row items-center p-4">
      <Avatar />
      <section className="grid gap-2 justify-center @sm:justify-start items-center p-2">
        <div className="flex flex-col @sm:flex-row items-center justify-center @sm:justify-start gap-2">
          <h1 className="">tripool</h1>
          <div className="flex gap-2">
            <Icon />
            <Icon />
          </div>
        </div>
        <p className="max-@sm:px-4 max-@sm:text-center">a freindly private hire driver app for your trips around Taiwan</p>
      </section>
    </header>
  )
}

function Avatar() {
  return (
    <div className="rounded-full w-16 h-16 bg-slate-500 flex-shrink-0" />
  )
}
function Icon() {
  return (
    <div className="rounded-full w-5 h-5 bg-rose-500 flex-shrink-0" />
  )
}

function Photos() {
  return (
    <section className="grid gap-4 grid-cols-3">
      <Photo title="1" />
      <Photo title="2" />
      <Photo title="3" />
      <Photo title="4" />
      <Photo title="5" className="bg-amber-300 col-span-2 aspect-auto" />
      <Photo title="6" className="bg-pink-300 col-span-3 aspect-[3/1]" />
    </section>
  )
}

function Photo({
  title,
  className
}: {
  title: string
  className?: ClassValue
}) {
  return (
    <div className={cn("bg-slate-200 grid place-items-center aspect-square", className)}>
      {title}
    </div>
  )
}