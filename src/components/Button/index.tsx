export const Button = function () {
  const Classes = `
    font-[Ubuntu Mono] 
    dark:bg-purple 
    hover:scale-110 
    transition-all 
    pt-4 pb-4 pr-2 pl-2 
    text-xl dark:text-black 
    bg-blue 
    rounded-md 
    text-white
  `
  return (
    <div>
      <button className={Classes}>
        Let's work together?
      </button>
    </div>
  )
}