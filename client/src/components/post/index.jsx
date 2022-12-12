import Dots from '../../assets/svg/dots';
import Like from '../../assets/svg/like';
import Union from '../../assets/svg/union';

function Post() {
    return (
        <div>
            <div className="w-full rounded-3xl bg-background p-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="https://picsum.photos/id/1012/1500" alt="user" className="h-10 w-10 rounded-full" />
                        <div className="ml-4 text-sm">
                            <span className="cursor-pointer font-bold">John Smith</span> is in{' '}
                            <span className="cursor-pointer font-bold">London</span>
                            <br />
                            <span className="text-fill text-opacity-50 text-xs">November 13, 2022</span>
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
                <div className="w-full mt-4 text-sm">Feels like a nature kind of day 🤘</div>
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
                            {' '}
                            Liked by lucy and <b>23</b> others
                        </span>
                    </div>
                    <div className="text-grey text-opacity-80 text-xs ml-2 mt-1 hover:text-fill">
                        <span>23 Comments</span>
                        <span className="ml-2">5 Shares</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
