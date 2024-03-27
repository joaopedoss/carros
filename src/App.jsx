import Sedans from "./compenents/Sedans"
import Suvs from "./compenents/Suvs"
import Luxury from "./compenents/Luxury"


export default function App() {
  return (
    <main className="min-h-svh bg-offwhitebg py-20 px-6 lg:flex justify-center items-center antialiazed">
      <section className="lg:flex max-w-[920px]">
        <Sedans />
        <Suvs />
        <Luxury />


      </section>
    </main>
  )
}