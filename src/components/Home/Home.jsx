import slider1 from "../../assets/home/Home1.png"
import slider2 from "../../assets/home/Home (2).png"
import slider3 from "../../assets/home/Home3.png"
import slider4 from "../../assets/home/Home4.png"
import { useLoaderData } from "react-router-dom";
import House from "../House";
import men from "../../assets/home/men.jpg"
import lily from "../../assets/home/lily.jpg"
import marea from "../../assets/home/marea.jpg"

const Home = () => {
    const houseData = useLoaderData()
    console.log(houseData)
  return (
    <div>
      <div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={slider1}
              className="w-full h-[550px]"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={slider2}
              className="w-full h-[550px]"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={slider3}
              className="w-full h-[550px]"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src={slider4}
              className="w-full h-[550px]"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mt-16 mt-8 grid lg:grid-cols-3 grid-cols-1 gap-6">
        {
        houseData.map((data,index)=> <House key={index} data={data}></House>)
        }

      </div>
      <section className="my-32">
            <h1 className="text-center font-[600] text-[#000] lg:text-5xl text-xl">
                Happy <span className="text-[#E76F51]">Clients says</span>
            </h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 lg:mx-12">
                <div className="card lg:w-86 w-full bg-base-100 shadow-xl mt-14 border-2 border-[#DEDEDE]">
                    <figure className="p-5"><img src={men} alt="Shoes" className="w-32 h-32" /></figure>
                    <div className="lg:p-5 p-1 pt-5 text-center space-y-4">
                      <p className="text-[#6C6C6C] leading-7 lg:text-base text-sm font-[400] ">Slate helps you see how 
                        many more days you need to work to reach your financial goal for the month and year.</p>
                      <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      </div>
                      <p className="text-sm text-[#23A6F0]">
                        Regina Miles
                      </p>
                      <p className="text-sm text-[#252B42]">
                        Banker
                      </p>
                    </div>
                </div>
                <div className="card lg:w-86 w-full bg-base-100 shadow-xl mt-14 border-2 border-[#DEDEDE]">
                    <figure className="p-5"><img src={lily} alt="Shoes" className="w-32 h-32" /></figure>
                    <div className="lg:p-5 p-1 pt-5 text-center space-y-4">
                      <p className="text-[#6C6C6C] leading-7 lg:text-base text-sm font-[400] ">Slate helps you see how 
                        many more days you need to work to reach your financial goal for the month and year.</p>
                      <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      </div>
                      <p className="text-sm text-[#23A6F0]">
                        Regina Miles
                      </p>
                      <p className="text-sm text-[#252B42]">
                        Banker
                      </p>
                    </div>
                </div>
                <div className="card lg:w-86 w-full bg-base-100 shadow-xl mt-14 border-2 border-[#DEDEDE]">
                    <figure className="p-5"><img src={marea} alt="Shoes" className="w-32 h-32" /></figure>
                    <div className="lg:p-5 p-1 pt-5 text-center space-y-4">
                      <p className="text-[#6C6C6C] leading-7 lg:text-base text-sm font-[400] ">Slate helps you see how 
                        many more days you need to work to reach your financial goal for the month and year.</p>
                      <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      </div>
                      <p className="text-sm text-[#23A6F0]">
                        Regina Miles
                      </p>
                      <p className="text-sm text-[#252B42]">
                        Banker
                      </p>
                    </div>
                </div>

            </div>
      </section>
    </div>
  );
};

export default Home;
