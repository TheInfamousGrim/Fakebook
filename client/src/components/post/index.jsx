import Comment from "../../assets/svg/comment";
import Dots from "../../assets/svg/dots";
import Like from "../../assets/svg/like";
import Likes from "../../assets/svg/likes";
import Share from "../../assets/svg/share";
import Union from "../../assets/svg/union";

function Post() {
  return (
    <div>
      <div className="w-full rounded-3xl bg-background p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://picsum.photos/id/1012/1500"
              alt="user"
              className="h-10 w-10 rounded-full"
            />
            <div className="ml-4 text-sm">
              <span className="cursor-pointer font-bold">John Smith</span> is in{" "}
              <span className="cursor-pointer font-bold">London</span>
              <br />
              <span className="text-fill text-opacity-50 text-xs">
                November 13, 2022
              </span>
            </div>
          </div>
          <div className="flex flex-row">
            <button className="w-8 h-8 rounded-full bg-dGrey flex items-center justify-center focus:outline-none">
              <Dots />
            </button>
            <button className="flex items-center justify-center focus:outline-none ml-2">
              <Union />
            </button>
          </div>
        </div>
        <div className="w-full mt-4 text-sm">
          Feels like a nature kind of day 🤘
        </div>
        <img
          src="https://picsum.photos/id/1018/1500"
          alt="user"
          className="w-full h-72 object-cover mt-4 rounded"
        />
        <div className="flex justify-between items-center">
          <div className="flex flex-row items-center">
            <div className=" flex justify-center items-center w-2 h-2 rounded-full bg-pink p-4">
              <button className="flex justify-center align-center ">
                <Like />
              </button>
            </div>
            <span className="text-grey text-opacity-80 text-xs ml-2 mt-1 hover:text-fill">
              {" "}
              Liked by lucy and <b>23</b> others
            </span>
          </div>
          <div className="text-grey text-opacity-80 text-xs ml-2 mt-1 hover:text-fill">
            <span>23 Comments</span>
            <span className="ml-2">5 Shares</span>
          </div>
        </div>
        <div className="border border-whitish border-opacity-10 mt-4 mb-4" />
        <div className="flex justify-between items-center mt-4">
          <div className="w-1/3 flex items-center justify-center">
            <Likes />
            <button className="ml-2 text-sm hover:text-pink">Like</button>
          </div>
          <div className="w-1/3 flex items-center justify-center">
            <Comment />
            <button className="ml-2 text-sm hover:text-pink">Comment</button>
          </div>
          <div className="w-1/3 flex items-center justify-center">
            <Share />
            <button className="ml-2 text-sm hover:text-pink">Share</button>
          </div>
        </div>
        <div className="border border-whitish border-opacity-10 mt-4 mb-4" />
        <div className="flex justify-between items-center">
          <span className="text-grey text-opacity-80 text-xs ml-2 mt-1 hover:text-fill">
            View previous comments
          </span>
          <span className="text-grey text-opacity-80 text-xs ml-2 mt-1 hover:text-fill">
            All comments
          </span>
        </div>
        <div>
          <div className="flex space-x-2 mt-4">
            <img
              src="https://picsum.photos/id/1019/1500"
              alt="user"
              className="h-10 w-10 rounded-full"
            />

            <span className="bg-dGrey px-5 py-1 focus:outline-none rounded-2xl">
              <span className="cursor-pointer font-bold">Lucy Kane</span>
              <br />
              <span className="text-sm">
                Mama mia that’s a spicey meatball!!!! 🍝♨️
              </span>
            </span>
          </div>
          <div className="ml-16">
            <button className="text-fill text-opacity-50 text-xs mr-2">
              Like
            </button>
            <button className="text-fill text-opacity-50 text-xs mr-2">
              Reply
            </button>
            <span className="text-fill text-opacity-50 text-xs mr-2">2d</span>
          </div>
        </div>
        <div>
          <div className="flex space-x-2 mt-4">
            <img
              src="https://picsum.photos/id/1002/1500"
              alt="user"
              className="h-10 w-10 rounded-full"
            />

            <span className="bg-dGrey px-5 py-1 focus:outline-none rounded-2xl">
              <span className="cursor-pointer font-bold">Ali Bertrand</span>
              <br />
              <span className="text-sm">So proud honeybooboo 💅</span>
            </span>
          </div>
          <div className="ml-16">
            <button className="text-fill text-opacity-50 text-xs mr-2">
              Like
            </button>
            <button className="text-fill text-opacity-50 text-xs mr-2">
              Reply
            </button>
            <span className="text-fill text-opacity-50 text-xs mr-2">2d</span>
          </div>
        </div>
        <div>
          <div className="flex space-x-2 mt-4">
            <img
              src="https://picsum.photos/id/1009/1500"
              alt="user"
              className="h-10 w-10 rounded-full"
            />

            <span className="bg-dGrey px-5 py-1 focus:outline-none rounded-2xl">
              <span className="cursor-pointer font-bold">Simon Allison</span>
              <br />
              <span className="text-sm">Much WOW, very woof woof 🐶</span>
            </span>
          </div>
          <div className="ml-16">
            <button className="text-fill text-opacity-50 text-xs mr-2">
              Like
            </button>
            <button className="text-fill text-opacity-50 text-xs mr-2">
              Reply
            </button>
            <span className="text-fill text-opacity-50 text-xs mr-2">2d</span>
          </div>
        </div>

        <div className="flex space-x-2 mt-4">
          <img
            src="https://picsum.photos/id/1012/1500"
            alt="user"
            className="h-10 w-10 rounded-full"
          />
          <input
            className="bg-dGrey px-5 py-1 w-full focus:outline-none rounded-full"
            placeholder="Write a comment...."
          />
        </div>
      </div>
    </div>
  );
}

export default Post;
