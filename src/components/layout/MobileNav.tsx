'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '@/assets/logo.jpg';
import {
  LOCATIONS_NAV,
  DETAILING_NAV,
  VALETING_NAV,
  CENTRE_NAV_LINKS,
  PHONE_TEL,
  PHONE_DISPLAY,
} from './nav-data';

type OpenSection = 'manchester' | 'stockport' | 'wilmslow' | 'warrington' | 'detailing' | 'valeting' | null;

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<OpenSection>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    setOpenSection(null);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => firstFocusRef.current?.focus());
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) close();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, close]);

  useEffect(() => {
    if (!isOpen || !overlayRef.current) return;
    const el = overlayRef.current;
    const focusable = el.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    el.addEventListener('keydown', trap);
    return () => el.removeEventListener('keydown', trap);
  }, [isOpen, openSection]);

  const toggleSection = (section: OpenSection) =>
    setOpenSection((prev) => (prev === section ? null : section));

  // Map location names to section keys
  const locationKey = (name: string): OpenSection => {
    const map: Record<string, OpenSection> = {
      Manchester: 'manchester', Stockport: 'stockport',
      Wilmslow: 'wilmslow', Warrington: 'warrington',
    };
    return map[name] ?? null;
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-overlay"
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors duration-150"
      >
        <Menu className="w-6 h-6" aria-hidden />
      </button>

      <div
        id="mobile-nav-overlay"
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-[280ms] ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-[280ms] ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={close}
          aria-hidden
        />

        {/* Panel slides up from bottom */}
        <div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`
            absolute bottom-0 inset-x-0 bg-white rounded-t-2xl
            max-h-[92dvh] flex flex-col overflow-hidden
            transition-transform ease-[cubic-bezier(0.32,0.72,0,1)]
            ${isOpen ? 'duration-[280ms] translate-y-0' : 'duration-[220ms] translate-y-full'}
          `}
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between h-14 px-4 border-b border-zinc-100 flex-shrink-0">
            <Link href="/" onClick={close} aria-label="SRV Detailing — home">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-md overflow-hidden">
                  <Image src={logo} alt="SRV Detailing" width={32} height={32} className="w-full h-full object-cover" />
                </div>
                <span className="font-heading font-bold text-base text-foreground">
                  SRV <span className="text-primary">Detailing</span>
                </span>
              </div>
            </Link>
            <button
              ref={firstFocusRef}
              onClick={close}
              aria-label="Close navigation menu"
              className="flex items-center justify-center w-10 h-10 rounded-lg text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100 transition-colors duration-150"
            >
              <X className="w-5 h-5" aria-hidden />
            </button>
          </div>

          {/* Scrollable content */}
          <div className="overflow-y-auto flex-1 pb-2">

            {/* ── Book Now strip ── highest CRO element at top ── */}
            <div className="px-4 pt-4 pb-3">
              <Link
                href="/booking"
                onClick={close}
                className="flex items-center justify-center gap-2 w-full h-14 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-base transition-colors duration-150 active:scale-[0.98]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Book Your Service — It&rsquo;s Free
              </Link>
            </div>

            <div className="h-px bg-zinc-100 mx-4 mb-1" />

            {/* ── Section label ── */}
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-4 pt-3 pb-1">
              Your Area
            </p>

            {/* ── Locations — one accordion per city ── */}
            {LOCATIONS_NAV.map((loc) => {
              const key = locationKey(loc.name);
              return (
                <div key={loc.href}>
                  <button
                    onClick={() => toggleSection(key)}
                    aria-expanded={openSection === key}
                    className="flex items-center justify-between w-full h-13 min-h-[52px] px-4 text-sm font-semibold text-zinc-800 hover:text-primary transition-colors duration-150"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary/70 flex-shrink-0" aria-hidden />
                      <span>{loc.name}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${openSection === key ? 'rotate-180' : ''}`}
                      aria-hidden
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-[max-height] duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                    style={{ maxHeight: openSection === key ? '500px' : '0px' }}
                    aria-hidden={openSection !== key}
                  >
                    {/* City overview link */}
                    <Link
                      href={loc.href}
                      onClick={close}
                      tabIndex={openSection === key ? 0 : -1}
                      className="flex items-center h-11 px-8 text-sm font-medium text-primary hover:bg-primary/5 transition-colors duration-120"
                    >
                      All {loc.name} Services →
                    </Link>
                    {loc.subLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={close}
                        tabIndex={openSection === key ? 0 : -1}
                        className="flex items-center h-11 px-8 text-sm text-zinc-600 hover:text-primary hover:bg-primary/5 transition-colors duration-120"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="h-px bg-zinc-100 mx-4 my-1" />

            {/* ── Section label ── */}
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-4 pt-3 pb-1">
              Our Services
            </p>

            {/* Car Detailing accordion */}
            <MobileAccordionSection
              title="Car Detailing"
              links={DETAILING_NAV.links}
              isOpen={openSection === 'detailing'}
              onToggle={() => toggleSection('detailing')}
              onLinkClick={close}
            />

            {/* Car Valeting accordion */}
            <MobileAccordionSection
              title="Car Valeting"
              links={VALETING_NAV.links}
              isOpen={openSection === 'valeting'}
              onToggle={() => toggleSection('valeting')}
              onLinkClick={close}
            />

            <div className="h-px bg-zinc-100 mx-4 my-1" />

            {/* Quick links */}
            <div className="flex flex-wrap gap-x-5 gap-y-0 px-4 py-3">
              {CENTRE_NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="text-sm font-medium text-zinc-600 hover:text-primary py-2 transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/gallery" onClick={close} className="text-sm font-medium text-zinc-600 hover:text-primary py-2 transition-colors duration-150">Gallery</Link>
              <Link href="/faq" onClick={close} className="text-sm font-medium text-zinc-600 hover:text-primary py-2 transition-colors duration-150">FAQ</Link>
            </div>

            <div className="h-px bg-zinc-100 mx-4" />

            {/* Call CTA */}
            <div className="p-4 space-y-2 pb-4">
              <a
                href={PHONE_TEL}
                className="flex items-center justify-center gap-2 w-full h-12 border-2 border-primary/30 hover:border-primary rounded-xl font-semibold text-sm text-primary transition-colors duration-150"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call {PHONE_DISPLAY}
              </a>

              <Link
                href="/admin"
                onClick={close}
                className="flex items-center justify-center gap-1.5 w-full py-2 text-xs font-medium text-zinc-400 hover:text-zinc-600 transition-colors duration-150"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                Admin Panel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface AccordionSectionProps {
  title: string;
  links: { label: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
  onLinkClick: () => void;
}

function MobileAccordionSection({ title, links, isOpen, onToggle, onLinkClick }: AccordionSectionProps) {
  const panelId = `mobile-acc-${title.toLowerCase().replace(/\s+/g, '-')}`;
  return (
    <div>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex items-center justify-between w-full h-13 min-h-[52px] px-4 text-sm font-semibold text-zinc-800 hover:text-primary transition-colors duration-150"
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>
      <div
        id={panelId}
        className="overflow-hidden transition-[max-height] duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ maxHeight: isOpen ? '600px' : '0px' }}
        aria-hidden={!isOpen}
      >
        <ul className="pb-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onLinkClick}
                tabIndex={isOpen ? 0 : -1}
                className="flex items-center h-11 min-h-[44px] px-8 text-sm text-zinc-600 hover:text-primary hover:bg-primary/5 transition-colors duration-120"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
