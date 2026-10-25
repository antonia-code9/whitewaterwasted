// My surf camps: one for each spot outside the UK, shown in a "My surf camp" box on that spot's card.
// Each camp can have:
//   name, website (full link), location (e.g. "Ericeira, Portugal"), stayed (e.g. "May 2024"),
//   rating (out of 5, halves allowed, e.g. 4.5),
//   photos: [{ file: "ericeira-1.jpg", alt: "what's in the photo" }]  (files live in images/camps/)
// null means the details haven't been added yet ("Details coming soon").
window.SURF_CAMPS = {
  biarritz: { name: 'Surf Hostel Biarritz', website: 'https://www.surfhostelbiarritz.com/', location: 'Biarritz, France' },
  ericeira: { name: 'The Salty Pelican', website: 'https://www.thesalty.co/ericeira-home/', location: 'Ericeira, Portugal' },
  taghazout: { name: 'Surf Berbere', website: 'https://surfberbere.com/', location: 'Taghazout, Morocco' },
  fuerteventura: { name: 'Nomad Surf Camp & Surf School', website: 'https://www.nomadsurfcamp.com/', location: 'Corralejo, Fuerteventura' },
  arugam: { name: 'Safa Surf House', website: 'https://safaarugambay.com/', location: 'Arugam Bay, Sri Lanka' },
  popoyo: null,
  macumba: { name: 'Surf Inn', website: 'https://www.visitsurfinn.com/', location: 'Rio de Janeiro, Brazil' }
};
