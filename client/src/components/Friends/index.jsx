function FriendList() {
  return (
    <div className="shadow-fb w-full rounded-3xl bg-background p-4">
      <div className="flex justify-between text-whitish">
        <div className="ml-1 text-3xl font-bold mb-2">Friends</div>
        <button className="focus:outline-none text-pink text-lg hover:text-whitish">
          See all friends
        </button>
      </div>
      <span className="text-sm ml-1">
        2700 <b>Friends</b>
      </span>
      <div className="grid grid-cols-3 flex gap-1.5 mt-4">
        <div className=" text-center text-xs">
          <img
            src="https://picsum.photos/id/1032/1500"
            alt="images"
            className="rounded-md"
          />
          <span>George</span>
        </div>
        <div className=" text-center text-xs">
          <img
            src="https://picsum.photos/id/1003/1500"
            alt="images"
            className="rounded-md"
          />
          <span>Sarah</span>
        </div>
        <div className=" text-center text-xs">
          <img
            src="https://picsum.photos/id/1004/1500"
            alt="images"
            className="rounded-md"
          />
          <span>Alice</span>
        </div>
        <div className=" text-center text-xs">
          <img
            src="https://picsum.photos/id/1027/1500"
            alt="images"
            className="rounded-md"
          />
          <span>Ali</span>
        </div>
        <div className=" text-center text-xs">
          <img
            src="https://picsum.photos/id/1028/1500"
            alt="images"
            className="rounded-md"
          />
          <span>Asia</span>
        </div>
        <div className=" text-center text-xs">
          <img
            src="https://picsum.photos/id/1029/1500"
            alt="images"
            className="rounded-md"
          />
          <span>Legacy</span>
        </div>

        <div className=" text-center text-xs">
          <img
            src="https://picsum.photos/id/1009/1500"
            alt="images"
            className="rounded-md"
          />
          <span>Smith</span>
        </div>

        <div className=" text-center text-xs">
          <img
            src="https://picsum.photos/id/1011/1500"
            alt="images"
            className="rounded-md"
          />
          <span>James</span>
        </div>

        <div className=" text-center text-xs">
          <img
            src="https://picsum.photos/id/1022/1500"
            alt="images"
            className="rounded-md"
          />
          <span>Alexis</span>
        </div>
      </div>
    </div>
  );
}

export default FriendList;
