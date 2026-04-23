const I = ({ children, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

export const Icons = {
  Brand: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="1" y="1" width="30" height="30" rx="9" fill="url(#bg)" stroke="currentColor" strokeOpacity=".08"/>
      <path d="M12 8h8v4h4v8h-4v4h-8v-4H8v-8h4z" fill="currentColor" fillOpacity=".14"/>
      <path d="M6 22c2.5 0 2.5-3 5-3s2.5 3 5 3 2.5-3 5-3 2.5 3 5 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0" stopColor="#fff"/>
          <stop offset="1" stopColor="#F1F5FB"/>
        </linearGradient>
      </defs>
    </svg>
  ),

  Phone:    () => <I><path d="M5 4h3l2 5-2 1a12 12 0 006 6l1-2 5 2v3a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/></I>,
  MapPin:   () => <I><path d="M12 21s-7-6-7-11a7 7 0 0114 0c0 5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></I>,
  Clock:    () => <I><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></I>,
  Calendar: () => <I><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></I>,
  Check:    () => <I><path d="M5 12l4 4 10-10"/></I>,
  Arrow:    () => <I><path d="M5 12h14M13 6l6 6-6 6"/></I>,
  Menu:     () => <I><path d="M4 7h16M4 12h16M4 17h16"/></I>,
  Close:    () => <I><path d="M6 6l12 12M18 6L6 18"/></I>,
  Star:     () => <I><path d="M12 3l2.6 5.6 6.1.7-4.5 4.1 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.3l6.1-.7L12 3z"/></I>,
  Quote:    () => <I><path d="M7 8h3v4H6v2a4 4 0 004-4V6H6a2 2 0 00-2 2v2"/><path d="M17 8h3v4h-4v2a4 4 0 004-4V6h-4a2 2 0 00-2 2v2" transform="translate(-2 0)"/></I>,
  Whatsapp: () => <I><path d="M20 12a8 8 0 11-3-6.2L20 4l-1.3 3.1A8 8 0 0120 12z"/><path d="M8.5 9c.3 2 2.5 4.2 4.5 4.5l1-1.2 2 1v1.2c-.1.7-1 1.5-1.8 1.5A7 7 0 017 9c0-.8.8-1.7 1.5-1.8h1.2l1 2z"/></I>,

  Pain:     () => <I><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2 2M16.4 16.4l2 2M5.6 18.4l2-2M16.4 7.6l2-2"/><circle cx="12" cy="12" r="3"/></I>,
  Stroke:   () => <I><path d="M4 18c2-6 6-6 8-3s6 3 8-3"/><circle cx="6" cy="8" r="2"/><path d="M20 8l-2 2 2 2"/></I>,
  Sports:   () => <I><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 019 9M3 12a9 9 0 019-9M12 21a9 9 0 01-9-9"/></I>,
  Teeth:    () => <I><path d="M6 4h12a2 2 0 012 2c0 4-1 6-2 9s-1 5-3 5-2-3-3-5h-.01C11 18 11 21 9 21s-2-2-3-5-2-5-2-9a2 2 0 012-2z"/></I>,
  Root:     () => <I><path d="M9 3h6l-1 5 2 5-2 3-2-1-2 1-2-3 2-5-1-5z"/></I>,
  Cosmetic: () => <I><path d="M12 3l1.8 4.5L18 9l-4.2 1.5L12 15l-1.8-4.5L6 9l4.2-1.5z"/><path d="M19 15l.9 2 2 .9-2 .9-.9 2-.9-2-2-.9 2-.9z"/></I>,

  Doctor:   () => <I><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/><path d="M12 15v3M10.5 16.5h3"/></I>,
  Gear:     () => <I><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/></I>,
  Heart:    () => <I><path d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z"/></I>,
};
