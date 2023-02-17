import React, { Fragment, useState } from 'react';
import { Dialog, Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon, XMarkIcon, BeakerIcon } from '@heroicons/react/20/solid';
import dayjs from 'dayjs';

const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Custom', value: 'custom' },
];

// Class name selection
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

/* --------------------------- Date selection data -------------------------- */
// Current date
const currentDate = dayjs();
const dayCurrent = currentDate.format(`D`);
const monthCurrent = currentDate.format(`MMMM`);
const yearCurrent = new Date().getFullYear();

const years = Array.from(new Array(120), (val, index) => yearCurrent - index);
const months = Array.from({ length: 12 }, (item, i) => new Date(0, i).toLocaleString('en-US', { month: 'long' }));
const days = Array.from(new Array(31), (val, index) => 1 + index);
const pronouns = [
    { key: 1, value: 'He' },
    { key: 2, value: 'She' },
    { key: 3, value: 'They' },
];

function SignUpForm({ registerModalOpen, setRegisterModalOpen }) {
    const [registrationForm, setRegistrationForm] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        birthDay: dayCurrent,
        birthMonth: monthCurrent,
        birthYear: yearCurrent.toString(),
        gender: '',
        pronoun: '',
        customGender: '',
    });
    const [birthDay, setBirthDay] = useState(dayCurrent);
    const [birthMonth, setBirthMonth] = useState(monthCurrent);
    const [birthYear, setBirthYear] = useState(yearCurrent);
    const [pronoun, setPronoun] = useState('');

    // Birth date state changes
    const onBirthDayChange = (value) => {
        setBirthDay(value);
        setRegistrationForm({
            ...registrationForm,
            birthDay: value.toString(),
        });
    };

    // Birth month state changes
    const onBirthMonthChange = (value) => {
        setBirthMonth(value);
        setRegistrationForm({
            ...registrationForm,
            birthMonth: value.toString(),
        });
    };

    // Birth year state changes
    const onBirthYearChange = (value) => {
        setBirthYear(value);
        setRegistrationForm({
            ...registrationForm,
            birthYear: value.toString(),
        });
    };

    // Pronouns state change
    const onPronounChange = (value) => {
        setPronoun(value);
        setRegistrationForm({
            ...registrationForm,
            pronoun: value,
        });
    };

    // Registration form function
    const onRegistrationFormChange = (event) => {
        const { name, value, type, checked } = event.target;

        setRegistrationForm({
            ...registrationForm,
            [name]: type === 'checkbox' ? checked : value,
        });
        console.log(registrationForm);
    };

    return (
        <Transition.Root show={registerModalOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setRegisterModalOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-visible rounded-3xl bg-white text-left shadow-xl transition-all w-full max-w-sm">
                                <div>
                                    <div className="border-b border-darkWhite p-6 flex justify-between items-start">
                                        <div>
                                            <Dialog.Title
                                                as="h3"
                                                className="text-3xl font-bold leading-6 text-gray-900"
                                            >
                                                Sign Up
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">It's quick and easy</p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            className="cursor-pointer"
                                            onClick={() => setRegisterModalOpen(false)}
                                        >
                                            <XMarkIcon className="h-6 w-6 text-gray-500" />
                                        </button>
                                    </div>
                                </div>
                                <form className="px-6 pb-6 flex flex-col gap-5 text-gray-700">
                                    <div>
                                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                            <div className="sm:col-span-3">
                                                <label
                                                    htmlFor="first-name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    First Name
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="firstName"
                                                        id="first-name"
                                                        autoComplete="given-name"
                                                        required
                                                        placeholder="First name"
                                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink focus:ring-pink sm:text-sm"
                                                        value={registrationForm.firstName}
                                                        onChange={onRegistrationFormChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-3">
                                                <label
                                                    htmlFor="last-name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Last Name
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="lastName"
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        required
                                                        placeholder="Last name"
                                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink focus:ring-pink sm:text-sm"
                                                        value={registrationForm.lastName}
                                                        onChange={onRegistrationFormChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-full">
                                                <label
                                                    htmlFor="email"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Email Address
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="email"
                                                        name="emailAddress"
                                                        type="email"
                                                        autoComplete="email"
                                                        required
                                                        placeholder="Please enter your email address"
                                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink focus:ring-pink sm:text-sm"
                                                        value={registrationForm.emailAddress}
                                                        onChange={onRegistrationFormChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-full">
                                                <label
                                                    htmlFor="password"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Password
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        autoComplete="current-password"
                                                        required
                                                        placeholder="New password"
                                                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-pink focus:outline-none focus:ring-pink sm:text-sm"
                                                        value={registrationForm.password}
                                                        onChange={onRegistrationFormChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-full border border-darkWhite rounded-full" />

                                            <div className="sm:col-span-full grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-6">
                                                <h3 className="sm:col-span-full">Date of Birth</h3>
                                                <div className="sm:col-span-3">
                                                    <Listbox
                                                        name="birthDay"
                                                        value={birthDay}
                                                        onChange={onBirthDayChange}
                                                    >
                                                        {({ open }) => (
                                                            <>
                                                                <Listbox.Label className="block text-sm font-medium text-gray-700">
                                                                    Day
                                                                </Listbox.Label>
                                                                <div className="relative mt-1">
                                                                    <Listbox.Button className="relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink sm:text-sm">
                                                                        <span className="block truncate text">
                                                                            {birthDay}
                                                                        </span>
                                                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                            <ChevronUpDownIcon
                                                                                className="h-5 w-5 text-gray-400"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </span>
                                                                    </Listbox.Button>

                                                                    <Transition
                                                                        show={open}
                                                                        as={Fragment}
                                                                        leave="transition ease-in duration-100"
                                                                        leaveFrom="opacity-100"
                                                                        leaveTo="opacity-0"
                                                                    >
                                                                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                            {days.map((day) => (
                                                                                <Listbox.Option
                                                                                    key={days.indexOf(day) + 1}
                                                                                    className={({ active }) =>
                                                                                        classNames(
                                                                                            active
                                                                                                ? 'text-white bg-pink'
                                                                                                : 'text-gray-900',
                                                                                            'relative cursor-pointer select-none py-2 pl-3 pr-9'
                                                                                        )
                                                                                    }
                                                                                    value={day}
                                                                                >
                                                                                    {({ selected, active }) => (
                                                                                        <>
                                                                                            <span
                                                                                                className={classNames(
                                                                                                    selected
                                                                                                        ? 'font-semibold'
                                                                                                        : 'font-normal',
                                                                                                    'block truncate'
                                                                                                )}
                                                                                            >
                                                                                                {day}
                                                                                            </span>

                                                                                            {selected ? (
                                                                                                <span
                                                                                                    className={classNames(
                                                                                                        active
                                                                                                            ? 'text-white'
                                                                                                            : 'text-indigo-600',
                                                                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                                    )}
                                                                                                >
                                                                                                    <CheckIcon
                                                                                                        className="h-5 w-5"
                                                                                                        aria-hidden="true"
                                                                                                    />
                                                                                                </span>
                                                                                            ) : null}
                                                                                        </>
                                                                                    )}
                                                                                </Listbox.Option>
                                                                            ))}
                                                                        </Listbox.Options>
                                                                    </Transition>
                                                                </div>
                                                            </>
                                                        )}
                                                    </Listbox>
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <Listbox
                                                        name="birthMonth"
                                                        value={birthMonth}
                                                        onChange={onBirthMonthChange}
                                                    >
                                                        {({ open }) => (
                                                            <>
                                                                <Listbox.Label className="block text-sm font-medium text-gray-700">
                                                                    Month
                                                                </Listbox.Label>
                                                                <div className="relative mt-1">
                                                                    <Listbox.Button className="relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink sm:text-sm">
                                                                        <span className="block truncate text">
                                                                            {birthMonth}
                                                                        </span>
                                                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                            <ChevronUpDownIcon
                                                                                className="h-5 w-5 text-gray-400"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </span>
                                                                    </Listbox.Button>

                                                                    <Transition
                                                                        show={open}
                                                                        as={Fragment}
                                                                        leave="transition ease-in duration-100"
                                                                        leaveFrom="opacity-100"
                                                                        leaveTo="opacity-0"
                                                                    >
                                                                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                            {months.map((month) => (
                                                                                <Listbox.Option
                                                                                    key={months.indexOf(month) + 1}
                                                                                    className={({ active }) =>
                                                                                        classNames(
                                                                                            active
                                                                                                ? 'text-white bg-pink'
                                                                                                : 'text-gray-900',
                                                                                            'relative cursor-pointer select-none py-2 pl-3 pr-9'
                                                                                        )
                                                                                    }
                                                                                    value={month}
                                                                                >
                                                                                    {({ selected, active }) => (
                                                                                        <>
                                                                                            <span
                                                                                                className={classNames(
                                                                                                    selected
                                                                                                        ? 'font-semibold'
                                                                                                        : 'font-normal',
                                                                                                    'block truncate'
                                                                                                )}
                                                                                            >
                                                                                                {month}
                                                                                            </span>

                                                                                            {selected ? (
                                                                                                <span
                                                                                                    className={classNames(
                                                                                                        active
                                                                                                            ? 'text-white'
                                                                                                            : 'text-indigo-600',
                                                                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                                    )}
                                                                                                >
                                                                                                    <CheckIcon
                                                                                                        className="h-5 w-5"
                                                                                                        aria-hidden="true"
                                                                                                    />
                                                                                                </span>
                                                                                            ) : null}
                                                                                        </>
                                                                                    )}
                                                                                </Listbox.Option>
                                                                            ))}
                                                                        </Listbox.Options>
                                                                    </Transition>
                                                                </div>
                                                            </>
                                                        )}
                                                    </Listbox>
                                                </div>

                                                <div className="sm:col-span-full">
                                                    <Listbox
                                                        name="birthMonth"
                                                        value={birthYear}
                                                        onChange={onBirthYearChange}
                                                    >
                                                        {({ open }) => (
                                                            <>
                                                                <Listbox.Label className="block text-sm font-medium text-gray-700">
                                                                    Year
                                                                </Listbox.Label>
                                                                <div className="relative mt-1">
                                                                    <Listbox.Button className="relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink sm:text-sm">
                                                                        <span className="block truncate text">
                                                                            {birthYear}
                                                                        </span>
                                                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                            <ChevronUpDownIcon
                                                                                className="h-5 w-5 text-gray-400"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </span>
                                                                    </Listbox.Button>

                                                                    <Transition
                                                                        show={open}
                                                                        as={Fragment}
                                                                        leave="transition ease-in duration-100"
                                                                        leaveFrom="opacity-100"
                                                                        leaveTo="opacity-0"
                                                                    >
                                                                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                            {years.map((year) => (
                                                                                <Listbox.Option
                                                                                    key={years.indexOf(year) + 1}
                                                                                    className={({ active }) =>
                                                                                        classNames(
                                                                                            active
                                                                                                ? 'text-white bg-pink'
                                                                                                : 'text-gray-900',
                                                                                            'relative cursor-pointer select-none py-2 pl-3 pr-9'
                                                                                        )
                                                                                    }
                                                                                    value={year}
                                                                                >
                                                                                    {({ selected, active }) => (
                                                                                        <>
                                                                                            <span
                                                                                                className={classNames(
                                                                                                    selected
                                                                                                        ? 'font-semibold'
                                                                                                        : 'font-normal',
                                                                                                    'block truncate'
                                                                                                )}
                                                                                            >
                                                                                                {year}
                                                                                            </span>

                                                                                            {selected ? (
                                                                                                <span
                                                                                                    className={classNames(
                                                                                                        active
                                                                                                            ? 'text-white'
                                                                                                            : 'text-indigo-600',
                                                                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                                    )}
                                                                                                >
                                                                                                    <CheckIcon
                                                                                                        className="h-5 w-5"
                                                                                                        aria-hidden="true"
                                                                                                    />
                                                                                                </span>
                                                                                            ) : null}
                                                                                        </>
                                                                                    )}
                                                                                </Listbox.Option>
                                                                            ))}
                                                                        </Listbox.Options>
                                                                    </Transition>
                                                                </div>
                                                            </>
                                                        )}
                                                    </Listbox>
                                                </div>
                                            </div>

                                            <div className="sm:col-span-full border border-darkWhite rounded-full" />

                                            <fieldset className="sm:col-span-full">
                                                <legend className="contents text-base font-medium text-gray-900">
                                                    Gender
                                                </legend>
                                                <p className="text-sm text-gray-500">
                                                    You can change who sees your gender on your profile later. Select
                                                    Custom to choose another gender, or if you'd rather not say.
                                                </p>
                                                <div className="mt-4 flex justify-between">
                                                    <div className="flex items-center">
                                                        <input
                                                            id="female"
                                                            name="gender"
                                                            type="radio"
                                                            value="female"
                                                            checked={registrationForm.gender === 'female'}
                                                            onChange={onRegistrationFormChange}
                                                            className="h-4 w-4 border-gray-300 text-pink focus:ring-pink cursor-pointer"
                                                        />
                                                        <label
                                                            htmlFor="push-everything"
                                                            className="ml-3 block text-sm font-medium text-gray-700"
                                                        >
                                                            Female
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input
                                                            id="male"
                                                            name="gender"
                                                            type="radio"
                                                            value="male"
                                                            checked={registrationForm.gender === 'male'}
                                                            onChange={onRegistrationFormChange}
                                                            className="h-4 w-4 border-gray-300 text-pink focus:ring-pink cursor-pointer"
                                                        />
                                                        <label
                                                            htmlFor="push-email"
                                                            className="ml-3 block text-sm font-medium text-gray-700"
                                                        >
                                                            Male
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input
                                                            id="custom"
                                                            name="gender"
                                                            type="radio"
                                                            value="custom"
                                                            checked={registrationForm.gender === 'custom'}
                                                            onChange={onRegistrationFormChange}
                                                            className="h-4 w-4 border-gray-300 text-pink focus:ring-pink cursor-pointer"
                                                        />
                                                        <label
                                                            htmlFor="push-nothing"
                                                            className="ml-3 block text-sm font-medium text-gray-700"
                                                        >
                                                            Custom
                                                        </label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            {registrationForm.gender === 'custom' && (
                                                <>
                                                    <div className="sm:col-span-full">
                                                        <Listbox
                                                            name="pronoun"
                                                            value={pronoun}
                                                            onChange={onPronounChange}
                                                        >
                                                            {({ open }) => (
                                                                <>
                                                                    <Listbox.Label className="block text-sm font-medium text-gray-700">
                                                                        Pronoun
                                                                    </Listbox.Label>
                                                                    <div className="relative mt-1">
                                                                        <Listbox.Button className="relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink sm:text-sm">
                                                                            <span className="block truncate text">
                                                                                {registrationForm.pronoun
                                                                                    ? registrationForm.pronoun
                                                                                    : 'Select your pronoun'}
                                                                            </span>
                                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                <ChevronUpDownIcon
                                                                                    className="h-5 w-5 text-gray-400"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </span>
                                                                        </Listbox.Button>

                                                                        <Transition
                                                                            show={open}
                                                                            as={Fragment}
                                                                            leave="transition ease-in duration-100"
                                                                            leaveFrom="opacity-100"
                                                                            leaveTo="opacity-0"
                                                                        >
                                                                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                {pronouns.map((pronoun) => (
                                                                                    <Listbox.Option
                                                                                        key={pronoun.key}
                                                                                        className={({ active }) =>
                                                                                            classNames(
                                                                                                active
                                                                                                    ? 'text-white bg-pink'
                                                                                                    : 'text-gray-900',
                                                                                                'relative cursor-pointer select-none py-2 pl-3 pr-9'
                                                                                            )
                                                                                        }
                                                                                        value={pronoun.value}
                                                                                    >
                                                                                        {({ selected, active }) => (
                                                                                            <>
                                                                                                <span
                                                                                                    className={classNames(
                                                                                                        selected
                                                                                                            ? 'font-semibold'
                                                                                                            : 'font-normal',
                                                                                                        'block truncate'
                                                                                                    )}
                                                                                                >
                                                                                                    {pronoun.value}
                                                                                                </span>

                                                                                                {selected ? (
                                                                                                    <span
                                                                                                        className={classNames(
                                                                                                            active
                                                                                                                ? 'text-white'
                                                                                                                : 'text-indigo-600',
                                                                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                                        )}
                                                                                                    >
                                                                                                        <CheckIcon
                                                                                                            className="h-5 w-5"
                                                                                                            aria-hidden="true"
                                                                                                        />
                                                                                                    </span>
                                                                                                ) : null}
                                                                                            </>
                                                                                        )}
                                                                                    </Listbox.Option>
                                                                                ))}
                                                                            </Listbox.Options>
                                                                        </Transition>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </Listbox>
                                                    </div>
                                                    <div className="sm:col-span-full">
                                                        <label
                                                            htmlFor="gender"
                                                            className="block text-sm font-medium text-gray-700"
                                                        >
                                                            Gender Custom
                                                        </label>
                                                        <div className="mt-1">
                                                            <input
                                                                type="text"
                                                                name="customGender"
                                                                autoComplete="sex"
                                                                placeholder="Gender (optional)"
                                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink focus:ring-pink sm:text-sm"
                                                                value={registrationForm.customGender}
                                                                onChange={onRegistrationFormChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-green px-4 py-2 text-lg font-semibold text-white shadow-sm hover:bg-pink focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                                        onClick={() => setRegisterModalOpen(false)}
                                    >
                                        Sign Up
                                    </button>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

export default SignUpForm;
