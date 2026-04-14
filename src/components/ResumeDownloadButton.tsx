import { useEffect, useId, useState } from 'react';
import type { ReactElement } from 'react';
import { FileDown, X } from 'lucide-react';
import { PATHS } from '../config/paths';

type ResumeLanguage = 'en' | 'fr';

type ResumeDownloadButtonProps = {
  label: string;
  className: string;
};

const resumeLabels: Record<ResumeLanguage, string> = {
  en: 'English',
  fr: 'Français',
};

const FlagEN = () => (
  <span className="inline-block w-10 h-6 rounded-sm overflow-hidden flex-shrink-0 border border-white/10">
    <svg viewBox="0 0 60 30" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0 0l60 30M60 0L0 30" stroke="#fff" strokeWidth="6" />
      <path d="M0 0l60 30M60 0L0 30" stroke="#C8102E" strokeWidth="4" />
      <rect x="0" y="12" width="60" height="6" fill="#fff" />
      <rect x="27" y="0" width="6" height="30" fill="#fff" />
      <rect x="0" y="13" width="60" height="4" fill="#C8102E" />
      <rect x="28" y="0" width="4" height="30" fill="#C8102E" />
    </svg>
  </span>
);

const FlagFR = () => (
  <span className="inline-block w-10 h-6 rounded-sm overflow-hidden flex-shrink-0 border border-white/10">
    <svg viewBox="0 0 3 2" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="1" height="2" fill="#002395" />
      <rect x="1" width="1" height="2" fill="#fff" />
      <rect x="2" width="1" height="2" fill="#ED2939" />
    </svg>
  </span>
);

const resumeFlags: Record<ResumeLanguage, ReactElement> = {
  en: <FlagEN />,
  fr: <FlagFR />,
};

const resumeFileNames: Record<ResumeLanguage, string> = {
  en: 'ahmed-belaaj-cv-en.pdf',
  fr: 'ahmed-belaaj-cv-fr.pdf',
};

export default function ResumeDownloadButton({ label, className }: ResumeDownloadButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<ResumeLanguage>('en');
  const dialogTitleId = useId();

  useEffect(() => {
    if (!isDialogOpen) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDialogOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDialogOpen]);

  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = PATHS.shared.resumes[selectedLanguage];
    downloadLink.download = resumeFileNames[selectedLanguage];
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    setIsDialogOpen(false);
  };

  return (
    <>
      <button type="button" onClick={() => setIsDialogOpen(true)} className={className}>
        <FileDown className="h-5 w-5 mr-2 group-hover:animate-bounce" />
        {label}
      </button>

      {isDialogOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 backdrop-blur-sm"
          onClick={() => setIsDialogOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            className="glass-effect w-full max-w-md rounded-2xl border border-accent-primary/20 bg-dark-100/95 p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDialogOpen(false)}
                className="absolute right-0 top-0 z-10 rounded-full border border-white/10 p-2 text-gray-300 transition-colors hover:text-white"
                aria-label="Close resume language dialog"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-primary/80">
                  Resume Download
                </p>
                <h3 id={dialogTitleId} className="mt-4 text-2xl font-semibold text-white">
                  Choose your resume language
                </h3>
              </div>
            </div>

            <form
              className="mt-8 space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                handleDownload();
              }}
            >
              <fieldset>
                <legend className="sr-only">Resume language</legend>
                <div className="space-y-3">
                  {(['en', 'fr'] as ResumeLanguage[]).map((language) => {
                    const checked = selectedLanguage === language;

                    return (
                      <label
                        key={language}
                        className={`flex cursor-pointer items-center justify-between rounded-xl border px-4 py-4 transition-all duration-300 ${
                          checked
                            ? 'border-accent-primary bg-accent-primary/10 text-white'
                            : 'border-white/10 bg-dark-300/80 text-gray-300 hover:border-accent-primary/40'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          {resumeFlags[language]}
                          <span className="text-base font-medium leading-tight">{resumeLabels[language]}</span>
                        </span>
                        <span className="flex items-center gap-3">
                          <span className="text-xs uppercase tracking-[0.2em] text-accent-primary/80">
                            {language}
                          </span>
                          <input
                            type="radio"
                            name="resume-language"
                            value={language}
                            checked={checked}
                            onChange={() => setSelectedLanguage(language)}
                            className="h-4 w-4 border-gray-500 bg-dark-300 text-accent-primary focus:ring-accent-primary"
                          />
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="flex flex-col-reverse gap-3 pt-4 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setIsDialogOpen(false)}
                  className="inline-flex items-center justify-center rounded-md border border-white/10 px-4 py-3 text-sm font-medium text-gray-200 transition-colors hover:bg-white/5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn justify-center bg-accent-primary hover:bg-accent-secondary"
                >
                  <FileDown className="mr-2 h-5 w-5" />
                  Download Resume
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}