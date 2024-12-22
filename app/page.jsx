import BlogItem from "@/components/BlogItem";
import BlogList from "@/components/BlogList";

export default function Home() {
  return (
    <div className="text-center my-8">
      <h1 className="text-2xl lg:text-3xl md:text-5xl font-medium">
        Latest Blogs
      </h1>
      <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore totam
        aspernatur ullam repudiandae, odio aliquam vel quam quis quia fuga unde
        dolores omnis quos. Alias, repellendus natus? Consequatur, quos ipsa?
      </p>
      <form className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto my-10 border border-black hover:shadow-[-7px_7px_0px_#000000] ease-in-out duration-200">
        <input type="email"  placeholder="Enter your email" className="pl-4 outline-none"/>
        <button className="border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white">Subscribe</button>
      </form>

      <BlogList />

      <div className="md:px-10 lg:px-20">
        <BlogItem />
      </div>
    </div>
  );
}
