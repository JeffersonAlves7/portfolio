import { classParser } from "../../hook/classParser"

export const MyProjects = function () {
  const classes = `
    font-ubuntu 
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
      <button className={classParser(classes)}>
        My Projects
      </button>
    </a>
  )
}