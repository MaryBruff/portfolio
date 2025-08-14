// 'use client'; // Client-side for state

// import React, { useState } from 'react';

// export default function Modal({ children, trigger }: { children: React.ReactNode; trigger: React.ReactNode }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <div onClick={() => setIsOpen(true)}>{trigger}</div>
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="myspace-window p-4 max-w-md w-full relative">
//             <button className="absolute top-2 right-2 text-myspace-accent text-xl" onClick={() => setIsOpen(false)}>
//               X
//             </button>
//             {children}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }