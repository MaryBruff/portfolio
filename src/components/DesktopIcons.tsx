'use client';

import Image from 'next/image';
import { useState } from 'react';

const DesktopIcons = () => {
  const [isRecycleModalOpen, setIsRecycleModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <>
      <div className="absolute top-4 left-4 flex flex-col space-y-6 z-0">
        <button
          onClick={() => setIsRecycleModalOpen(true)}
          className="desktop-icon"
          aria-label="Open Recycle Bin"
        >
          <Image
            src="/icons/recycle-icon.png"
            alt="Recycle Bin Icon"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <p className="desktop-icon-text">Recycle Bin</p>
        </button>
        <button
          onClick={() => setIsResumeModalOpen(true)}
          className="desktop-icon"
          aria-label="Open Resume"
        >
          <Image
            src="/icons/pdf-icon.png"
            alt="Resume Icon"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <p className="desktop-icon-text">resume_2025.pdf</p>
        </button>
        <button className="desktop-icon" aria-label="Open My Documents">
          <Image
            src="/icons/folder-icon.png"
            alt="My Documents Icon"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <p className="desktop-icon-text">My Documents</p>
        </button>
        <button className="desktop-icon" aria-label="Open My Computer">
          <Image
            src="/icons/music-folder-icon.png"
            alt="My Computer Icon"
            width={32}
            height={32}
            className="w-9 h-9"
          />
          <p className="desktop-icon-text">my_mp3s</p>
        </button>
      </div>

      {/* Recycle Bin Modal */}
      {isRecycleModalOpen && (
        <div className="window fixed top-1/4 left-1/4 w-96 h-64 z-30">
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

      {/* Resume Modal */}
      {isResumeModalOpen && (
        <div className="window fixed top-1/3 left-1/3 w-96 h-80 z-30">
          <div className="title-bar">
            <div className="title-bar-text">Mary Bruff Resume</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close" onClick={() => setIsResumeModalOpen(false)}></button>
            </div>
          </div>
          <div className="window-body">
            <div className="field-row" style={{ justifyContent: 'center' }}>
              <h3>Mary Bruff</h3>
            </div>
            <p><strong>Email:</strong> mary.bruff@example.com</p>
            <p><strong>Experience:</strong></p>
            <ul>
              <li>Software Engineer, Tech Corp (2020–Present)</li>
              <li>Web Developer, Creative Solutions (2018–2020)</li>
            </ul>
            <p><strong>Education:</strong> B.S. Computer Science, University (2018)</p>
            <a
              href="/path/to/resume.pdf"
              download
              className="button"
              style={{ marginTop: '1rem', display: 'inline-block' }}
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default DesktopIcons;