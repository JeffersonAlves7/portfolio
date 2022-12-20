import { classParser } from "../../hook/classParser"
import { MyProjects } from "../MyProjects"

export const BallSection = function () {
  const ballClass = `
    h-[78vw] 
    w-[78vw] 
    min-h-[19rem]
    min-w-[19rem]
    max-h-[21rem]
    max-w-[21rem]
    rounded-full 
    hover:scale-105
    transition-all
  ` 

  return (
    <section id="ball-and-content" className={classParser(ballClass) + ' flex items-center justify-center p-8'}>
      <div className="flex flex-col gap-6 justify-center w-full h-full">
        <div className="dark:text-[#fff] text-black text-xl font-loras max-w-max">
          <p>My <span className=" text-other-color">name</span> is</p>
          <p className=" text-3xl">Jefferson Alves,</p>
          <p>A Brazilian Full Stack Developer <span className=" text-other-color">&</span> Designer.</p>
        </div>
        <MyProjects/>
      </div>
    </section>
  )
}