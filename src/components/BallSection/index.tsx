import { MyProjects } from "../MyProjects"

export const BallSection = function () {
  const BallClass = `
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
    <section id="ball-and-content" className={BallClass + ' flex items-center justify-center p-8'}>
      <div className="flex flex-col gap-6 justify-center w-full h-full">
        <div className="dark:text-[#fff] text-black text-xl font-[Loras] max-w-max">
          <p>My <span className="dark:text-purple text-blue">name</span> is</p>
          <p className=" text-3xl">Jefferson Alves,</p>
          <p>Full Stack Developer & Designer.</p>
        </div>
        <MyProjects/>
      </div>
    </section>
  )
}