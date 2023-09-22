import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/1162019476/photo/boy-and-dog-in-toy-racing-car.jpg?s=612x612&w=0&k=20&c=q4VZNxBRnpl9gHv3om30YhAKGOyKmTzPV0eSoHGCfGo=",
    title: "Choosing the Right Toys for Children: A Comprehensive Guide",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tempora officia fugiat sit nulla, rerum veritatis harum saepe reiciendis reprehenderit cumque esse quasi quidem laborum cum ipsam ullam vel eaque laudantium. Accusantium suscipit similique dolorum maxime eaque eos quas, reprehenderit excepturi culpa ex earum labore placeat tempore sunt odio ullam? Fuga, ut! In non qui reiciendis architecto molestiae cumque quae autem asperiores mollitia adipisci provident error hic voluptatem omnis pariatur, tempora commodi assumenda officia. Similique sunt veniam corporis quae dolorem.",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/1283681886/photo/little-boy-riding-toy-car-in-the-garden.jpg?s=612x612&w=0&k=20&c=3B-qiRGCB1cUbUuAYZuSiVYf74hGrE3IOL2G3PWYCw4=",
    title: "Engaging and Educational Toys for Children",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tempora officia fugiat sit nulla, rerum veritatis harum saepe reiciendis reprehenderit cumque esse quasi quidem laborum cum ipsam ullam vel eaque laudantium. Accusantium suscipit similique dolorum maxime eaque eos quas, reprehenderit excepturi culpa ex earum labore placeat tempore sunt odio ullam? Fuga, ut! In non qui reiciendis architecto molestiae cumque quae autem asperiores mollitia adipisci provident error hic voluptatem omnis pariatur, tempora commodi assumenda officia. Similique sunt veniam corporis quae dolorem.",
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/id/1042058916/photo/boy-playing-with-toy-car.jpg?s=612x612&w=0&k=20&c=EP4GkZ3PMbYcjWorkUjk6DItJTLJTM0l6PAdjVu5vi8=",
    title: "Must-Have Children's Toys for Endless Fun and Learning",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tempora officia fugiat sit nulla, rerum veritatis harum saepe reiciendis reprehenderit cumque esse quasi quidem laborum cum ipsam ullam vel eaque laudantium. Accusantium suscipit similique dolorum maxime eaque eos quas, reprehenderit excepturi culpa ex earum labore placeat tempore sunt odio ullam? Fuga, ut! In non qui reiciendis architecto molestiae cumque quae autem asperiores mollitia adipisci provident error hic voluptatem omnis pariatur, tempora commodi assumenda officia. Similique sunt veniam corporis quae dolorem.",
  },
];

const Articles = () => {
    const [articleCount,setArticleCount]=useState(1);
    const displayArticle=articles[articleCount-1];
  return (
    <div className="mt-8 sm:mt-12">
      <h4 className="text-center text-xl md:text-3xl mb-5 font-semibold">
        Read Our Articles
      </h4>
        <div key={displayArticle?.id} className="grid sm:grid-cols-2 items-center gap-6">
          <img
            className="max-h-full max-w-auto m-auto"
            src={displayArticle?.image}
            alt=""
            // data-aos-duration="1000"
          />
          <div>
            <h2 className="text-2xl sm:text-4xl pb-3 mb-4 font-semibold border-b">{displayArticle?.title}</h2>
            <p className="text-lg mb-4">{displayArticle?.article.slice(0,200)}</p>
            <Link to="/" className="flex items-center gap-1 hover:gap-[6px] duration-200 uppercase font-semibold cursor-pointer">see more <Icon icon="heroicons-outline:arrow-right" /></Link>
          </div>
        </div>
      <div className="flex justify-center gap-1 mt-3">{articles?.map(item=><span key={item.id} onClick={()=>setArticleCount(item?.id)} className={`w-full cursor-pointer h-2 rounded ${articleCount===item?.id?"bg-[#f3bd98]":"bg-[#cee5ec]"}`}></span>)}</div>
    </div>
  );
};

export default Articles;
