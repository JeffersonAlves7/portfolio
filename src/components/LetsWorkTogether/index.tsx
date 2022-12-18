export const LetsWorkTogether = function () {
  const Classes = `
    font-[Ubuntu Mono] 
    dark:bg-purple 
    dark:text-black
    bg-blue 
    pt-4 pb-4 pr-2 pl-2 
    hover:scale-110 
    transition-all 
    rounded-md 
    text-[#fff]
    text-xl  
  `
  return (
    <button className={Classes}>
      Let's work together?
    </button>
  )
}