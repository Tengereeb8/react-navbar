"use client";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <div className="bg-white">
      <Sidebar open={open} setOpen={setOpen} />

      {/* Center area */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <Modal modal={modal} setModal={setModal} />
        </div>
      </div>
    </div>
  );
}

const Modal = ({ modal, setModal }) => {
  return (
    <div className="text-black">
      {/* Centered Open Button */}
      <button
        onClick={() => setModal(true)}
        className="w-32 h-12 bg-blue-300 rounded flex items-center justify-center"
      >
        Open Modal
      </button>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-100 p-6 rounded-lg relative">
            <button
              onClick={() => setModal(false)}
              className="absolute top-2 right-3 text-red-700 text-2xl"
            >
              X
            </button>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              minus numquam vel quam similique ab iste.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ open, setOpen }) => {
  return (
    <div className="text-black">
      <button
        onClick={() => setOpen(true)}
        className="w-8 h-6 flex flex-col justify-between ml-20 mt-5"
      >
        <span className="bg-blue-500 w-full rounded h-1"></span>
        <span className="bg-blue-500 w-full rounded h-1"></span>
        <span className="bg-blue-500 w-full rounded h-1"></span>
      </button>

      {open && (
        <div className="fixed top-0 left-0 bg-sky-100 shadow-lg p-5 flex flex-col gap-4 w-60 h-screen z-40">
          <div className="flex justify-between items-center">
            <h1>
              Coding <span className="text-sky-300">Addict</span>
            </h1>
            <button
              onClick={() => setOpen(false)}
              className="text-2xl text-red-500"
            >
              X
            </button>
          </div>

          <ul className="flex flex-col gap-2">
            <li>Home</li>
            <li>Team</li>
            <li>Projects</li>
            <li>Calendar</li>
            <li>Documents</li>
          </ul>
        </div>
      )}
    </div>
  );
};
