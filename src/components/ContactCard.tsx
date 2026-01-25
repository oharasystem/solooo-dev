'use client';

import React, { useState } from 'react';
import { Check, Copy, ExternalLink } from 'lucide-react';

interface ContactCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  isEmail?: boolean;
}

export default function ContactCard({ icon, label, value, href, isEmail = false }: ContactCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent bubbling/default if necessary
    e.stopPropagation(); // Stop click from reaching the link overlay

    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 hover:border-blue-200">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-slate-50 rounded-full text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
          {icon}
        </div>

        <div className="flex-grow min-w-0">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-0.5">
            {label}
          </h3>
          <p className="text-lg font-medium text-slate-900 break-all">
            {value}
          </p>
          {/* Main Link Overlay */}
          <a
            href={href}
            target={isEmail ? undefined : '_blank'}
            rel={isEmail ? undefined : 'noopener noreferrer'}
            className="absolute inset-0 z-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label={`${label}: ${value}`}
          >
            <span className="sr-only">Open {label}</span>
          </a>
        </div>

        <div className="relative z-10 flex items-center">
          {isEmail ? (
            <button
              onClick={handleCopy}
              className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors relative"
              title="Copy to clipboard"
            >
              {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}

              {/* Tooltip feedback */}
              <span
                className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded shadow transition-opacity duration-200 pointer-events-none whitespace-nowrap ${
                  copied ? 'opacity-100' : 'opacity-0'
                }`}
              >
                Copied!
              </span>
            </button>
          ) : (
            <ExternalLink size={20} className="text-gray-300 group-hover:text-blue-400 transition-colors" />
          )}
        </div>
      </div>
    </div>
  );
}
