// Import dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

function PostTest({ createdAt, userId, firstName, lastName, profilePicture, text, image, reactCount }) {
    return (
        <div className="flex flex-col" data-userId={userId}>
            <div className="p-5 bg-background mt-5 rounded-t-2xl shadow-sm">
                <div className="flex items-center space-x-2">
                    <img className="h-10 w-10 rounded-full" src={profilePicture} alt="User Profile" />
                    <div className="ml-4">
                        <p className="font-medium">{`${firstName} ${lastName}`}</p>
                        {createdAt ? (
                            <p className="text-xs text-gray-400">{dayjs(createdAt).format('DD MMMM YYYY HH:mm')}</p>
                        ) : (
                            <p className="text-xs text-gray-400">Loading</p>
                        )}
                    </div>
                </div>

                <p className="pt-4">{text}</p>
            </div>
            {image && (
                <div className="relative h-56 md:h-96 bg-white">
                    <img src={image} objectFit="cover" layout="fill" alt="users post" />
                </div>
            )}

            {/* Post Footer */}
            <div className="flex justify-between items-center rounded-b-2xl bg-background shadow-md text-gray-400 border-t">
                <div className="inputIcon p-3 rounded-none rounded-bl-2xl">
                    <i className="fa-solid fa-thumbs-up text-base" />
                    <p className="text-xs sm:text-base">Like</p>
                </div>

                <div className="inputIcon p-3 rounded-none">
                    <i className="fa-solid fa-comment text-base" />
                    <p className="text-xs sm:text-base">Comment</p>
                </div>

                <div className="inputIcon p-3 rounded-none rounded-br-2xl">
                    <i className="fa-solid fa-share-from-square text-base" />
                    <p className="text-xs sm:text-base">Share</p>
                </div>
            </div>
        </div>
    );
}

export default PostTest;
