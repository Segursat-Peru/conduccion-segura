import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
	ChartBarIcon,
	LogoutIcon,
	MenuIcon,
	UserCircleIcon,
	UserIcon,
	XIcon,
} from "@heroicons/react/solid/";

const solutions = [
	{
		name: "Analytics",
		description:
			"Get a better understanding of where your traffic is coming from.",
		href: "#",
		icon: ChartBarIcon,
	},
];

const Dashboard = () => {
	return (
		<section className="flex flex-col h-screen">
			<Popover className="flex-1 fixed w-full bg-white">
				<div className="mx-auto px-6">
					<div className="flex items-center justify-between border-gray-100 py-6 lg:py-5">
						<div className="flex justify-start lg:w-0 lg:flex-1">
							<a href="#">
								<span className="sr-only">Solgas Logo</span>
								<img
									className="h-8 w-auto sm:h-10"
									src="/images/logo-solgas.png"
									alt="logo-solgas-in-header"
								/>
							</a>
						</div>
						<div className="flex md:hidden">
							<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-inset">
								<span className="sr-only">Open menu</span>
								<MenuIcon className="h-8 w-8" aria-hidden="true" />
							</Popover.Button>
						</div>
						<div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
							<Popover.Group as="nav" className="hidden md:flex gap-5">
								<a
									href="#"
									className="text-base font-medium text-gray-500 hover:text-gray-900"
								>
									Unidades
								</a>
								<a
									href="#"
									className="text-base font-medium text-gray-500 hover:text-gray-900"
								>
									Usuarios
								</a>
							</Popover.Group>
							<a
								href="#"
								className="ml-8 inline-flex items-center justify-center whitespace-nowrap border-transparent text-base font-medium text-black"
							>
								<Popover className="flex">
									<Popover.Button className="inline-flex items-center justify-center rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-inse mt-0 pt-0">
										<span className="sr-only">Open menu</span>
										<UserCircleIcon className="h-10 w-10" aria-hidden="true" />
									</Popover.Button>

									<Transition
										as={Fragment}
										enter="transition ease-out duration-200"
										enterFrom="opacity-0 translate-y-1"
										enterTo="opacity-100 translate-y-0"
										leave="transition ease-in duration-150"
										leaveFrom="opacity-100 translate-y-0"
										leaveTo="opacity-0 translate-y-1"
									>
										<Popover.Panel
											focus
											className="absolute z-10 right-4 top-16 w-56 origin-top-right bg-gray-50 divide-y divide-gray-100 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
										>
											<div className="px-4 py-3 hover:bg-gray-200 rounded-tl-xl rounded-tr-xl">
												<p className="flex gap-2 items-center text-base font-medium text-gray-700">
													<UserIcon className="w-6 h-6" /> Mi cuenta
												</p>
												<p className="text-sm text-gray-700 truncate"></p>
											</div>
											<div className="px-4 py-3 hover:bg-gray-200 rounded-bl-xl rounded-br-xl">
												<p className="flex gap-2 items-center text-base font-medium text-gray-700">
													<LogoutIcon className="w-6 h-6" /> Cerrar sesión
												</p>
												<p className="text-sm text-gray-700 truncate"></p>
											</div>
										</Popover.Panel>
									</Transition>
								</Popover>
							</a>
						</div>
					</div>
				</div>

				<Transition
					as={Fragment}
					enter="duration-200 ease-out"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="duration-100 ease-in"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<Popover.Panel
						focus
						className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
					>
						<div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
							<div className="px-5 pt-5 pb-6">
								<div className="flex items-center justify-between">
									<div>
										<img
											className="h-8 w-auto"
											src="/images/logo-solgas.png"
											alt="logo-solgas-in-header"
										/>
									</div>
									<div className="-mr-2">
										<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-inset">
											<span className="sr-only">Close menu</span>
											<XIcon className="h-6 w-6" aria-hidden="true" />
										</Popover.Button>
									</div>
								</div>
								<div className="mt-6">
									<nav className="grid gap-y-8">
										{solutions.map(item => (
											<a
												key={item.name}
												href={item.href}
												className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
											>
												<item.icon
													className="h-6 w-6 flex-shrink-0 text-indigo-600"
													aria-hidden="true"
												/>
												<span className="ml-3 text-base font-medium text-gray-900">
													{item.name}
												</span>
											</a>
										))}
									</nav>
								</div>
							</div>
							<div className="space-y-6 pb-6 px-5">
								<div>
									<a
										href="#"
										className="flex w-full items-center justify-center rounded-md border border-transparent bg-solgas-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
									>
										Cerrar sesión
									</a>
								</div>
							</div>
						</div>
					</Popover.Panel>
				</Transition>
			</Popover>
			<main className="h-screen pt-20 bg-gray-200">
				<div className="px-6 pt-6">Hello World</div>
			</main>
		</section>
	);
};

export default Dashboard;
