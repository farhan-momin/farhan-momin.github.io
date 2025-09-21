export const Badge = ({children}:{children:React.ReactNode}) => {
    return <div className="bg-[#e8e8e8]  w-fit px-2 py-px text-sm rounded-md hover:ring hover:ring-black/50 transition hover:bg-neutral-100" 
    // title="abc"
    >
        {children}
    </div>
}