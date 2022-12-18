import { BallSection } from "../components/BallSection"
import { ContactMethods } from "../components/ContactsMethods"
import { LetsWorkTogether } from "../components/LetsWorkTogether"

export const Main = function(){
  return (
    <div id="main" className="flex flex-col gap-10 h-screen max-h-screen relative justify-around overflow-hidden">
        <header>
          <h1 className="text-[#FF0000] text-4xl font-[Lora]">Eu.</h1>
        </header>
        <main className=" flex items-center justify-around lg:flex-row gap-10 lg:gap-0 flex-col transition-all">
          <BallSection/>
          <LetsWorkTogether/>
        </main>
        <footer>
          <ContactMethods/>
        </footer>
        <span className="end-of-page"></span>
    </div>
  )
}