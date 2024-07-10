import { Link } from "react-router-dom";
import { useState } from "react";
import { CircleX } from 'lucide-react';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="bg-white mx-auto max-w-screen-xl p-6">
            <div className="flex items-center justify-between">
                <Link to="/">
                    <div className="w-[120px]">
                        <img
                            className="w-[100%]"
                            src="./assets/logo-mew.png"
                            alt="logo"
                        />
                    </div>
                </Link>
                <div className="flex items-center gap-[30px]">
                    <div className="cursor-pointer" onClick={handleModalOpen}>
                        <p className="text-primary-green font-bold">About</p>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-md w-[300px]">
                        <div className="flex justify-between">
                            <h2 className="text-lg font-bold">
                                Thông tin cá nhân
                            </h2>
                            <CircleX className="cursor-pointer" onClick={handleModalClose}/>
                        </div>
                        <p>Họ và tên: Mai Cường Thịnh</p>
                        <p>MSSV: 20120196</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
