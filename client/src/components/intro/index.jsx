import Location from '../../assets/svg/location';
import Heart from '../../assets/svg/heart';
import House from '../../assets/svg/house';

export default function Intro() {
    return (
        <div className="shadow-fb w-full rounded-3xl bg-background p-4">
            <div className="ml-1 text-3xl font-bold text-whitish"> Intro</div>
            <div className="focus:outline-none h-8 w-full flex items-center justify-center rounded-3xl bg-dGrey">
                <button type="button" className="flex flex-row items-center ">
                    <b>Add Bio</b>
                </button>
            </div>
            <div className="mt-4 flex items-center">
                <House />
                <span className="ml-2 text-xs">
                    Lives in <b>Birmingham, United Kingdom</b>
                </span>
            </div>
            <div className="mt-4 flex items-center">
                <Location />
                <span className="ml-2 text-xs">
                    From <b>Croyden</b>
                </span>
            </div>
            <div className="mt-4 flex items-center">
                <Heart />
                <span className="ml-1 text-xs">
                    <b>Single</b>
                </span>
            </div>
            <div className="focus:outline-none h-8 w-full flex items-center justify-center rounded-3xl bg-dGrey mt-4">
                <button type="button">
                    <b>Edit Details</b>
                </button>
            </div>
            <div className="focus:outline-none h-8 w-full flex items-center justify-center rounded-3xl bg-dGrey mt-4">
                <button type="button">
                    <b>Add Hobbies</b>
                </button>
            </div>
        </div>
    );
}
