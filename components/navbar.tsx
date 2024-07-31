"use client"

import { Icon } from "./icons";

export const Navbar = () => {

  const closeWindow = () => {
    if (window.electron && typeof window.electron.closeWindow === 'function') {
      window.electron.closeWindow();
    } else {
      console.error('Electron API is not available or close function is not defined');
    }
  };

  const minimizeWindow = () => {
    if (window.electron && typeof window.electron.minimizeWindow === 'function') {
      window.electron.minimizeWindow();
    } else {
      console.error('Electron API is not available or minimize function is not defined');
    }
  }
  return (
    <div className="w-full bg-slate-800 flex flex-row items-center justify-between p-4 top-0 z-50 drag-region">
      <div></div>
      <div className="flex justify-center items-center gap-6 no-drag-region select-none">
        <Icon name="minimize" size={"sm"} onClick={() => minimizeWindow()} className="cursor-pointer" color="white"/>
        <Icon name="close" size={"sm"} onClick={() => closeWindow()} className="cursor-pointer" color="white"/>
      </div>
      
    </div>
  );
};
