import emoji from "../assets/images/emoji.png"

const Hero = ({
  title ="Become a Frontend Dev", 
  subtitle ="Find your right job that fits your skills and needs!"
}) => {
  return (
    <section className="bg-indigo-600 py-16 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <div className="flex items-center justify-center">
          <p className="my-4 text-xl text-white">{subtitle}</p>
          <img className="h-6 w-auto ml-3" src={emoji} alt="" />
          </div>
        </div>
      </div>
      <div className="flex">
            
          </div>
    </section>
  );
};

export default Hero;
