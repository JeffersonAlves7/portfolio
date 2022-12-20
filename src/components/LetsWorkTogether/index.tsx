import { classParser } from "../../hook/classParser"

export const LetsWorkTogether = function () {
  const classes = `
    font-ubuntu
    dark:bg-purple 
    dark:text-black
    bg-blue 
    pt-4 pb-4 pr-2 pl-2 
    hover:scale-110 
    transition-all 
    rounded-md 
    text-[#fff]
    text-2xl  
  `
  return (
    <button className={classParser(classes) + " dark:shadow-[0px_0px_10px_5px_rgba(255,255,255,0.3)] shadow-[0px_0px_10px_5px_rgba(0,0,0,0.3)]"}>
      Let's work together?
    </button>
  )
}