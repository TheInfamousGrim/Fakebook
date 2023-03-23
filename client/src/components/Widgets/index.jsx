import React from 'react';

// Components
import Contact from '../Contacts';

function Widgets() {
    const contacts = [
        { src: 'https://pbs.twimg.com/profile_images/1591558315254890500/ETIHb4Nl_400x400.jpg', name: 'Jeff Bezoz' },
        {
            src: 'https://pyxis.nymag.com/v1/imgs/51b/acd/a62a5ea65fec42cc83e77eb5f6c9886223-elon-.rsquare.w700.jpg',
            name: 'Elon Musk',
        },
        { src: 'https://links.papareact.com/zvy', name: 'Bill Gates' },
        {
            src: 'https://pyxis.nymag.com/v1/imgs/95b/5e7/85b27048e85a2f3ad2252f40d96ed77c9f-20-mark-zuckerberg.rsquare.w700.jpg',
            name: 'Mark Zuckerberg',
        },
        { src: 'https://pictures.abebooks.com/isbn/9781780548371-uk.jpg', name: 'Harry Potter' },
        {
            src: 'https://static01.nyt.com/images/2021/12/23/multimedia/23virus-briefing-queen-01/23virus-briefing-queen-01-mediumSquareAt3X.jpg',
            name: 'The Queen',
        },
        { src: 'http://esq.h-cdn.co/assets/17/10/1280x1280/square-1488906206-daniel-craig.jpg', name: 'James Bond' },
    ];

    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl text-white font-bold">Contacts</h2>
                <div className="flex space-x-2 p-2 rounded-full hover:bg-dGrey cursorpointer">
                    <i className="fa-solid fa-magnifying-glass" />
                </div>
            </div>

            {contacts.map((contact) => (
                <Contact key={contact.src} src={contact.src} name={contact.name} />
            ))}
        </div>
    );
}

export default Widgets;
