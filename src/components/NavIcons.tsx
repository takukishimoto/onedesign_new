import React from "react";

type Props = {
  className?: string;
};

export const NavIcons = {
  Feature: ({ className = "" }: Props) => (
    <svg viewBox="0 0 577 275" className={className} fill="currentColor">
      <g>
        <path d="M123.6 186.9c4.2 0 30.9 6.9 30.9 27.6 0 10.5-5.1 16.5-11.7 16.5-5.1 0-5.7-1.8-10.8-18.3-2.4-8.4-4.2-12-10.2-21.9-.3-.6-1.2-2.1-.6-3 .3-.9 1.5-.9 2.4-.9z"/>
        <path d="M221.1 166.8c-7.8 0-8.7 2.7-8.7 22.2 0 9 .9 49.2.9 57.3 0 27.3-21 27.3-24.3 27.3-5.7 0-6.3-2.1-7.8-7.5-1.8-6.9-6.6-9.6-13.2-12.3-7.5-3.3-8.4-3.6-8.4-4.8 0-.9 2.4-1.2 3.3-1.2 3 0 16.5.6 19.2.6 6 0 12 0 12-13.5 0-9-.9-54.3-.9-56.1 0-6.6 0-12-8.4-12z"/>
      </g>
    </svg>
  ),

  Price: ({ className = "" }: Props) => (
    <svg viewBox="0 0 576 276" className={className} fill="currentColor">
      <g>
        <path d="M174.3 67.5c-5.7 0-9-6.6-11.4-11.1-4.8-9.3-7.8-12-17.7-21.3-1.5-1.5-1.8-1.8-1.8-2.7 0-.9.6-.9 2.1-.9.9 0 37.2 5.7 37.2 24.6 0 1.2 0 10.2-8.4 10.2z"/>
        <path d="M171.6 142.8c-6.3 0-7.2-3.6-9.3-10.5-1.5-5.4-12.3-25.2-20.4-33.3-1.5-1.5-3-2.7-3-3.9 0-.9 1.2-1.2 1.8-1.2 4.8 0 40.8 15.3 40.8 36.6 0 12-8.4 12.3-9.9 12.3z"/>
      </g>
    </svg>
  ),

  Work: ({ className = "" }: Props) => (
    <svg viewBox="0 0 500 200" className={className} fill="currentColor">
      <text x="0" y="150" fontSize="140">制作</text>
    </svg>
  ),

  About: ({ className = "" }: Props) => (
    <svg viewBox="0 0 500 200" className={className} fill="currentColor">
      <text x="0" y="150" fontSize="140">私</text>
    </svg>
  ),

  Blog: ({ className = "" }: Props) => (
    <svg viewBox="0 0 500 200" className={className} fill="currentColor">
      <text x="0" y="150" fontSize="140">日記</text>
    </svg>
  ),
};