import "./style.scss";

type LoadingProps = {
    isVisible?: boolean
}

export function Loading({ isVisible = false } : LoadingProps) {
   if (isVisible) {
    return <div className="loading"/>;
   }
}