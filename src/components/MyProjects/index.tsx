export const MyProjects = function () {
  const Classes = `
    font-[Ubuntu Mono] 
    dark:bg-black 
    dark:text-purple
    bg-[#fff]
    p-2
    hover:scale-110 
    transition-all 
    rounded-md 
    text-blue
    text-xl  
    pr-4
  `

  return (
    <a href="#projects">
      <button className={Classes}>
        My Projects
      </button>
    </a>
  )
}