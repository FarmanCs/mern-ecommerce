
import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders
          subHeader={'Our store'}
          mainHeader={'about Us'}
        />
        <div className="max-w-2xl mx-auto mt-4 text-gray-500 flex flex-col gap-3 ">
          <p className="max-w-2xl mx-auto mt-4"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate harum commodi velit, modi corporis fFacilis saepe totam fugit perferendis?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate harum commodi velit, modi corporis fFacilis saepe totam fugit perferendis.<br />
          </p>
          <p > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate harum commodi velit, modi corporis fFacilis saepe totam fugit perferendis?<br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate harum commodi velit, modi corporis fFacilis saepe totam fugit perferendis?
          </p>
          <p>Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate harum commodi velit, modi corporis fFacilis saepe totam fugit perferendis?<br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate harum commodi velit, modi corporis fFacilis saepe totam fugit perferendis</p>
        </div>
      </section >
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={`Don\'t hesitate`}
          mainHeader={'to contact us'}
        />
        <div className="my-8 underline text-gray-600">
          <a className="text-center text-4xl " href="+92 3499279661">+92 349 9279 661</a>
        </div>
      </section>

    </>
  );
}
