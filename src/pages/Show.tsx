import ImageScroller from "@/components/ImageScroller";

const Show: React.FC = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="font-bold mb-8 text-center text-sky-100
      text-5xl
      sm:text-5xl
      lg:text-6xl
      ">This is Luna's world.</h1>
      <ImageScroller/>
    </div>
  )
}

export default Show;