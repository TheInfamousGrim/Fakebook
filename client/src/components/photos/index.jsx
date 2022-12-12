function Photos() {
    return (
        <div className="shadow-fb w-full rounded-3xl bg-background p-4">
            <div className="flex justify-between text-whitish">
                <div className="ml-1 text-3xl font-bold">Photos</div>
                <button className="focus:outline-none text-pink text-lg hover:text-whitish">See all photos</button>
            </div>
            <div className="grid grid-cols-3 flex gap-1.5 mt-4">
                <img src="https://picsum.photos/id/1012/1500" alt="images" className="rounded-tl-lg" />
                <img src="https://picsum.photos/id/1013/1500" alt="images" />
                <img src="https://picsum.photos/id/1014/1500" alt="images" className="rounded-tr-lg" />
                <img src="https://picsum.photos/id/1021/1500" alt="images" />
                <img src="https://picsum.photos/id/1022/1500" alt="images" />
                <img src="https://picsum.photos/id/1023/1500" alt="images" />
                <img src="https://picsum.photos/id/1019/1500" alt="images" className="rounded-bl-lg" />
                <img src="https://picsum.photos/id/1016/1500" alt="images" />
                <img src="https://picsum.photos/id/1018/1500" alt="images" className="rounded-br-lg" />
            </div>
        </div>
    );
}

export default Photos;
