import React from 'react';

function Contact({ src, name }) {
    return (
        <div className="flex items-center space-x-3 mb-2 relative hover:bg-dGrey cursor-pointer p-2 rounded-xl">
            <img
                className="rounded-full"
                objectFit="cover"
                src={src}
                width={50}
                height={50}
                layout="fixed"
                alt="profile of friend"
            />
            <p>{name}</p>
            <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full" />
        </div>
    );
}

export default Contact;
