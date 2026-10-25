// "Take a look": photos and videos of what each place looks like, and whether it's worth a visit.
// Keyed by a spot's id from My spots (e.g. fistral), or by a wave pool on the Learn tab (surfabudhabi).
// Each place can have:
//   worth: the "Worth a visit?" line, in my own words
//   items: the photos and videos, in the order they show. Each one is
//     { type: 'photo', file: 'surfabudhabi-1.jpg' }                          (files live in images/look/)
//     { type: 'video', file: 'surfabudhabi-clip.mp4', poster: 'surfabudhabi-clip.jpg', length: '0:18' }
//     { type: 'youtube', youtube: 'VIDEO_ID', length: '2:10' }               (the id from the YouTube link)
//   plus, on any item: title (a short label, shown under wave pool pictures), caption (under the label and in
//   the viewer), taken (e.g. 'November 2025', shown in the viewer), alt (what's in the picture, for screen readers)
//   and focus (where the square or landscape thumbnail is centred on a tall picture, e.g. '65%' = lower down).
window.SURF_MEDIA = {
  surfabudhabi: {
    // Claude's draft for Antonia to rewrite
    worth: "Yes, if you're in the UAE or passing through. The waves are perfectly shaped and reliable, with something for every level, from first stand-ups in End Bay to barrels on Kelly's Wave. Book ahead and arrive an hour before your session.",
    // Antonia's photos and clip from 15 November 2025 (labels and captions drafted by Claude)
    items: [
      { type: 'video', file: 'surfabudhabi-clip.mp4', poster: 'surfabudhabi-clip.jpg', length: '0:28', focus: '55%',
        title: 'The wave', caption: 'A surfer on the main wave at sunset', taken: 'November 2025',
        alt: 'A surfer riding the wave across the pool at sunset, filmed from the wooden deck' },
      { type: 'photo', file: 'surfabudhabi-deck.jpg', focus: '66%',
        title: 'The deck', caption: 'Loungers right beside the wave', taken: 'November 2025',
        alt: 'Shaded loungers on a wooden deck beside the wave pool, with a surfer carrying a blue board along the jetty' },
      { type: 'photo', file: 'surfabudhabi-sunset.jpg', focus: '62%',
        title: 'Sunset', caption: 'The pool from under a parasol', taken: 'November 2025',
        alt: 'The wave pool and jetty at sunset, seen from under a parasol on the deck' },
      { type: 'photo', file: 'surfabudhabi-club.jpg', focus: '48%',
        title: 'The surf club', caption: 'The clubhouse and pool at dusk', taken: 'November 2025',
        alt: 'The two-storey surf club building, with a swimming pool and loungers in front, at dusk' }
    ]
  }
};
