import LiveVideo from "../../assets/svg/liveVideo";
import Vid from "../../assets/svg/vid";
import Smile from "../../assets/svg/smile";

function CreatePost() {
  return (
    <div>
      <div className="w-full rounded-3xl bg-background p-4">
        <div className="flex space-x-2">
          <img
            src="https://picsum.photos/id/1012/1500"
            alt="user"
            className="h-10 w-10 rounded-full"
          />
          <input
            className="bg-dGrey px-5 py-1 w-full focus:outline-none rounded-full"
            placeholder="What's on your mind?"
          />
        </div>
        <div className="border border-whitish border-opacity-10 mt-4" />
        <div className="flex justify-between">
          <button className="flex justify-center rounded-2xl align-center w-1/3 focus:outline-none mt-4 py-2 px-2 hover:bg-dGrey">
            <LiveVideo />
            <span className="text-grey text-opacity-80 text-xs ml-2 mt-1 hover:text-fill">
              Live Video
            </span>
          </button>
          <button className="flex justify-center rounded-2xl align-center w-1/3 focus:outline-none mt-4 py-2 px-2 hover:bg-dGrey">
            <Vid />
            <span className="text-grey text-opacity-80 text-xs ml-2 mt-1 hover:text-fill">
              Photo/Video
            </span>
          </button>
          <button className="flex justify-center rounded-2xl align-center w-1/3 focus:outline-none mt-4 py-2 px-2 hover:bg-dGrey">
            <Smile />
            <span className="text-grey text-opacity-80 text-xs ml-2 mt-1 hover:text-fill">
              Feeling/Activity
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
