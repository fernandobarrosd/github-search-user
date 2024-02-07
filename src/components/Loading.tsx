type LoadingProps = {
    isVisible?: boolean
}

export function Loading({ isVisible = false } : LoadingProps) {
   if (isVisible) {
    return <div className="size-10 rounded-[50%]
    border-solid border-white animate-spin mt-5
    border-[6px] border-t-[#A367B1]"/>;
   }
}