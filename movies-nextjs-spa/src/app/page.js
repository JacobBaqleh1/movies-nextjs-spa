export default function Home() {
  return (
    <div className="">
      <main>
        <div className="flex flex-col md:flex-row">
          <h3 className="w-full md:w-1/2  text-2xl font-medium text-gray-700 text-center underline my-8">
            Now Playing
          </h3>

          <h3 className="w-full md:w-1/2  text-2xl font-medium text-gray-700 text-center underline my-8">
            Upcoming
          </h3>
        </div>
        <div className="flex flex-col md:flex-row">
          <h3 className="w-full md:w-1/2  text-2xl font-medium text-gray-700 text-center underline my-8">
            Top Rated
          </h3>
          <h3 className="w-full md:w-1/2 text-2xl font-medium text-gray-700 text-center underline my-8">
            Upcoming
          </h3>
        </div>
      </main>
    </div>
  );
}
