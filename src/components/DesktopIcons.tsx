'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const DesktopIcons = () => {
  const [isRecycleModalOpen, setIsRecycleModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isDocumentsModalOpen, setIsDocumentsModalOpen] = useState(false);
  const [isMp3sModalOpen, setIsMp3sModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const resumeUrl = '/resume/Mary_Bruff_RESUME_Jan_2026_Tech.pdf';
  const downloadFilename = 'Mary_Bruff_RESUME_Jan_2026_Tech.pdf';

  // Hide icons & modals on mobile (<900px)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener('resize', check);
    const observer = new MutationObserver(check);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      window.removeEventListener('resize', check);
      observer.disconnect();
    };
  }, []);

  const stopProp = (e: React.MouseEvent) => e.stopPropagation();

  const handleFileClick = (fileName: string) => {
    alert(`You opened: ${fileName}`);
  };

  return (
    <>
      {/* === DESKTOP ICONS (≥900px only) === */}
      {!isMobile && (
        <div className="absolute top-4 left-4 flex flex-col space-y-6 z-10 select-none">
          {/* Recycle Bin */}
          <button
            onClick={(e) => { stopProp(e); setIsRecycleModalOpen(true); }}
            className="desktop-icon hover:bg-white/20 transition rounded p-1"
            aria-label="Open Recycle Bin"
          >
            <Image src="/icons/recycle-icon.png" alt="Recycle Bin" width={32} height={32} className="w-8 h-8" />
            <p className="desktop-icon-text">Recycle Bin</p>
          </button>

          {/* Resume */}
          <button
            onClick={(e) => { stopProp(e); setIsResumeModalOpen(true); }}
            onDoubleClick={(e) => { stopProp(e); window.open(resumeUrl, '_blank'); }}
            className="desktop-icon hover:bg-blue-600/30 transition rounded p-1"
            aria-label="Open Resume"
          >
            <Image src="/icons/pdf-icon.png" alt="Resume" width={32} height={32} className="w-8 h-8" />
            <p className="desktop-icon-text">resume_2025.pdf</p>
          </button>

          {/* My Documents */}
          <button
            onClick={(e) => { stopProp(e); setIsDocumentsModalOpen(true); }}
            className="desktop-icon hover:bg-white/20 transition rounded p-1"
            aria-label="Open My Documents"
          >
            <Image src="/icons/folder-icon.png" alt="My Documents" width={32} height={32} className="w-8 h-8" />
            <p className="desktop-icon-text">My Documents</p>
          </button>

          {/* my_mp3s */}
          <button
            onClick={(e) => { stopProp(e); setIsMp3sModalOpen(true); }}
            className="desktop-icon hover:bg-white/20 transition rounded p-1"
            aria-label="Open my_mp3s"
          >
            <Image src="/icons/music-folder-icon.png" alt="my_mp3s" width={32} height={32} className="w-9 h-9" />
            <p className="desktop-icon-text">my_mp3s</p>
          </button>
        </div>
      )}

      {/* === RECYCLE BIN MODAL === */}
      {isRecycleModalOpen && !isMobile && (
        <div className="window fixed top-1/4 left-1/4 w-96 h-64 z-[999]" onClick={stopProp}>
          <div className="title-bar">
            <div className="title-bar-text">Recycle Bin</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close" onClick={() => setIsRecycleModalOpen(false)}></button>
            </div>
          </div>
          <div className="window-body">
            <div className="field-row" style={{ justifyContent: 'center' }}>
              <p>Deleted Items</p>
            </div>
            <ul className="tree-view">
              <li>Old Project.txt</li>
              <li>Draft Resume.pdf</li>
              <li>Photo.jpg</li>
            </ul>
          </div>
        </div>
      )}

{/* === RESUME MODAL – FIXED SPARKLES + BIGGER BUTTON === */}
{isResumeModalOpen && !isMobile && (
  <div 
    className="fixed top-1/3 left-1/3 w-96 h-80 z-[999] select-none"
    onClick={stopProp}
    style={{
      background: 'linear-gradient(135deg, #ffe4f2, #e0f8ff)',
      border: '3px solid #ff69b4',
      borderRadius: '16px',
      boxShadow: '0 8px 25px rgba(255,105,180,0.3), 0 0 15px rgba(255,255,255,0.6)',
      fontFamily: '"Comic Sans MS", cursive, sans-serif',
      overflow: 'hidden',
      // Apply star pattern to the ENTIRE modal
      backgroundImage: `
        url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20"><path fill="%23ffd4ee" opacity="0.6" d="M10 2l1.5 4.5h4.5l-3.5 2.5 1.5 4.5-4-3-4 3 1.5-4.5-3.5-2.5h4.5z"/></svg>'),
        linear-gradient(135deg, #ffe4f2, #e0f8ff)
      `,
      backgroundSize: '30px, cover',
      backgroundRepeat: 'repeat, no-repeat',
    }}
  >
    {/* Title Bar */}
    <div 
      className="title-bar flex justify-between items-center p-2"
      style={{
        background: 'linear-gradient(to right, #ff69b4, #ff1493)',
        color: 'white',
        fontWeight: 'bold',
        textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="flex items-center gap-2 text-sm">
        Mary Bruff Resume
      </div>
      <div className="title-bar-controls">
        <button aria-label="Minimize" />
        <button aria-label="Maximize" />
        <button aria-label="Close" onClick={() => setIsResumeModalOpen(false)} />
      </div>
    </div>

    {/* Body */}
    <div className="window-body p-5 text-center">
      <h3 
        className="text-2xl font-bold mb-3"
        style={{
          background: 'linear-gradient(to right, #ff69b4, #00bfff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 8px rgba(255,255,255,0.8)',
        }}
      >
        Mary Bruff
      </h3>

      <p className="mb-2 text-sm">
        <strong style={{ color: '#ff1493' }}>Email:</strong>{' '}
        <a 
          href="mailto:marybruff5@gmail.com"
          style={{ color: '#00bfff', fontWeight: 'bold' }}
          className="hover:underline"
        >
          marybruff5@gmail.com
        </a>
      </p>

      <p className="mb-1 text-sm font-medium" style={{ color: '#ff69b4' }}>
        Download a PDF of my resume!
      </p>

      {/* BIGGER, CLEARER DOWNLOAD BUTTON */}
      <div className="flex justify-center mt-6">
        <a
          href={resumeUrl}
          download={downloadFilename}
          className="inline-block transition-all duration-300 hover:scale-110 hover:-rotate-2"
          style={{
            filter: 'drop-shadow(0 0 12px #ff69b4) drop-shadow(0 0 20px #00bfff)',
          }}
        >
          <img
            src="https://dl.glitter-graphics.com/pub/1284/1284631x8ims6r4ih.gif"
            alt="Download Resume"
            width={180}
            height={60}
            className="rounded-lg border-3 border-white shadow-lg"
            style={{
              imageRendering: 'pixelated', // Keeps GIF crisp
            }}
          />
        </a>
      </div>

      <p className="text-xs mt-4 italic text-pink-600">
        Click to download!
      </p>
    </div>
  </div>
)} 

      {/* === MY DOCUMENTS → CLEAN XP EXPLORER (NO MENU, NO TOOLBAR) === */}
      {isDocumentsModalOpen && !isMobile && (
        <div className="window fixed inset-0 m-auto w-[640px] h-[580px] z-[999]" onClick={stopProp}>
          {/* TITLE BAR */}
          <div className="title-bar">
            <div className="title-bar-text">My Documents - Windows Explorer</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" />
              <button aria-label="Maximize" />
              <button aria-label="Close" onClick={() => setIsDocumentsModalOpen(false)} />
            </div>
          </div>

          <div className="window-body p-0 flex flex-col h-full">
            {/* ADDRESS BAR ONLY */}
            <div className="field-row p-1 bg-white border-b border-gray-400 items-center text-sm">
              <label className="mr-1 font-bold">Address</label>
              <div className="flex-1 bg-white border border-gray-500 px-1">
                C:\Documents and Settings\Mary\My Documents
              </div>
            </div>

            {/* MAIN PANES: Tree + File List */}
            <div className="flex flex-1 overflow-hidden">
              {/* LEFT: Folder Tree */}
              {/* <div className="w-48 bg-[#f0f0f0] border-r border-gray-400 p-1 overflow-y-auto">
                <ul className="tree-view"> */}
                  {/* <li>
                    <details open>
                      <summary>My Documents</summary>
                      <ul>
                        <li>My Music</li>
                        <li>My Pictures</li>
                      </ul>
                    </details>
                  </li>
                  <li>Desktop</li>
                  <li>My Computer</li>
                </ul>
              </div> */}

              {/* RIGHT: File List */}
              <div className="flex-1 overflow-y-auto bg-white">
                {(() => {
                  function FileIcon({ src, alt }: { src: string; alt: string }) {
                    return (
                      <Image
                        src={src}
                        alt={alt}
                        width={50}
                        height={50}
                        className="w-12 h-12 flex-shrink-0 object-cover" 
                      />
                    );
                  }

                  return (
                    <table className="w-full text-sm">
                      {/* <thead className="bg-gradient-to-r from-[#0a246a] to-[#1e61b0] text-white sticky top-0">
                        <tr>
                          <th className="p-2 text-left">Name</th>
                          <th className="p-2 text-left">Size</th>
                          <th className="p-2 text-left">Type</th>
                          <th className="p-2 text-left">Modified</th>
                        </tr>
                      </thead> */}
                      <tbody>
                        <tr
                          className="hover:bg-[#cce4ff] cursor-pointer border-b"
                          onClick={() => handleFileClick('resume_draft.docx')}
                        >
                          <td className="p-3 flex items-center gap-3"> 
                            <FileIcon src="/icons/WordPad.png" alt="doc" />
                            resume_draft.doc
                          </td>
                          <td className="p-2">142 KB</td>
                          <td className="p-2">WordPad</td>
                          <td className="p-2">11/10/2025 3:22 PM</td>
                        </tr>

                        {/* <tr
                          className="hover:bg-[#cce4ff] cursor-pointer border-b"
                          onClick={() => handleFileClick('picture of Piglet')}
                        >
                          <td className="p-3 flex items-center gap-3"> 
                            <FileIcon src="/icons/JPEG file.png" alt="img" />
                            picture of Piglet
                          </td>
                          <td className="p-2">38 KB</td>
                          <td className="p-2">Image</td>
                          <td className="p-2">11/08/2025 9:15 AM</td>
                        </tr> */}
                      </tbody>
                    </table>
                  );
                })()}
              </div>
            </div>

            {/* STATUS BAR */}
            <div className="status-bar bg-gradient-to-r from-[#c0d8f8] to-[#e6f0ff] border-t border-gray-400 p-1 text-xs">
              <div className="status-bar-field">4 items</div>
              <div className="status-bar-field">1.07 MB</div>
            </div>
          </div>
        </div>
      )}


      {/* === my_mp3s → MY MUSIC FOLDER === */}
      {isMp3sModalOpen && !isMobile && (
        <div className="window fixed inset-0 m-auto w-[680px] h-[560px] z-[999] shadow-2xl" onClick={stopProp}>
          <div className="title-bar">
            <div className="title-bar-text">my_mp3s - My Music</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close" onClick={() => setIsMp3sModalOpen(false)}></button>
            </div>
          </div>
          <div className="window-body p-0 bg-[#e6f3ff] flex flex-col h-full">
            <div className="bg-white border-b border-gray-400 px-2 py-1 flex items-center text-sm">
              <span className="mr-2">Address</span>
              <div className="flex-1 bg-white border border-gray-500 px-1">
                C:\Documents and Settings\Mary\My Documents\My Music\my_mp3s
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  className="bg-white border border-gray-400 p-3 rounded hover:bg-blue-50 cursor-pointer"
                  onClick={() => alert('Playing: Fall Out Boy - Dance, Dance')}
                >
                  <div className="flex items-center gap-3">
                    <Image src="/icons/mp3.png" alt="mp3" width={48} height={48} />
                    <div>
                      <p className="font-semibold text-sm">Fall Out Boy - Dance,Dance.mp3</p>
                      <p className="text-xs text-gray-600">3.5 MB • 3:00</p>
                    </div>
                  </div>
                </div>

                <div
                  className="bg-white border border-gray-400 p-3 rounded hover:bg-blue-50 cursor-pointer"
                  onClick={() => alert('Playing: Kaskade - Angel on My Shoulder')}
                >
                  <div className="flex items-center gap-3">
                    <Image src="/icons/mp3.png" alt="mp3" width={48} height={48} />
                    <div>
                      <p className="font-semibold text-sm">Kaskade - Angel on My Shoulder.mp3</p>
                      <p className="text-xs text-gray-600">5.8 MB • 4:12</p>
                    </div>
                  </div>
                </div>

                <div
                  className="bg-white border border-gray-400 p-3 rounded hover:bg-blue-50 cursor-pointer"
                  onClick={() => alert('Playing: Soulja Boy - Crank That')}
                >
                  <div className="flex items-center gap-3">
                    <Image src="/icons/mp3.png" alt="mp3" width={48} height={48} />
                    <div>
                      <p className="font-semibold text-sm">Soulja Boy - Crank That (Soulja Boy).mp3</p>
                      <p className="text-xs text-gray-600">4.1 MB • 3:42</p>
                    </div>
                  </div>
                </div>

                <div
                  className="bg-white border border-gray-400 p-3 rounded hover:bg-blue-50 cursor-pointer"
                  onClick={() => alert('Playing: My Chemical Romance - Helena')}
                >
                  <div className="flex items-center gap-3">
                    <Image src="/icons/mp3.png" alt="mp3" width={48} height={48} />
                    <div>
                      <p className="font-semibold text-sm">My Chemical Romance - Helena.mp3</p>
                      <p className="text-xs text-gray-600">3.9 MB • 3:23</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-gray-300 to-gray-400 text-xs px-2 py-1 border-t border-gray-500">
              4 items | 62.0 MB
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DesktopIcons;