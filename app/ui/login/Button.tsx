import clsx from "clsx"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "flex h-10 items-center rounded shadow bg-blue-500 dark:bg-[#0b111f] px-4 text-sm font-medium text-white transition-colors dark:hover:bg-[#020407] hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 relative overflow-hidden isolate",
        className
      )}>
      {children}
    </button>
  )
}
