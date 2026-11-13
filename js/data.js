// --- SVG ICONS LIBRARY ---
    const ICONS = {
      bookOpen: '<svg aria-hidden="true" focusable="false" class="icon" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
      trophy: '<svg aria-hidden="true" focusable="false" class="icon" viewBox="0 0 24 24"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
      mapPin: '<svg aria-hidden="true" focusable="false" class="icon" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
      cpu: '<svg aria-hidden="true" focusable="false" class="icon" viewBox="0 0 24 24"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>',
      award: '<svg aria-hidden="true" focusable="false" class="icon icon-sm" style="color:#e2a8ab" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
      search: '<svg aria-hidden="true" focusable="false" class="icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
      rocket: '<svg aria-hidden="true" focusable="false" class="icon" viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
      arrowRight: '<svg aria-hidden="true" focusable="false" class="icon icon-sm" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
      chevronLeft: '<svg aria-hidden="true" focusable="false" class="icon icon-sm" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>',
      shieldCheck: '<svg aria-hidden="true" focusable="false" class="icon icon-sm" style="color:#047857" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
      shieldCheckLg: '<svg aria-hidden="true" focusable="false" class="icon icon-lg" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
      dollarSign: '<svg aria-hidden="true" focusable="false" class="icon" style="color:#a5313a" viewBox="0 0 24 24"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
      users: '<svg aria-hidden="true" focusable="false" class="icon" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      download: '<svg aria-hidden="true" focusable="false" class="icon icon-sm" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>',
      smartphone: '<svg aria-hidden="true" focusable="false" class="icon" viewBox="0 0 24 24"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>',
      landmark: '<svg aria-hidden="true" focusable="false" class="icon" style="color:#a5313a" viewBox="0 0 24 24"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>',
      building2: '<svg aria-hidden="true" focusable="false" class="icon" style="color:#9333ea" viewBox="0 0 24 24"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>',
      copy: '<svg aria-hidden="true" focusable="false" class="icon icon-sm" viewBox="0 0 24 24"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
      checkCircle: '<svg aria-hidden="true" focusable="false" class="icon icon-xl" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
      share2: '<svg aria-hidden="true" focusable="false" class="icon" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>',
      info: '<svg aria-hidden="true" focusable="false" class="icon" style="color:#3b82f6" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
      helpCircle: '<svg aria-hidden="true" focusable="false" class="icon icon-lg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>',
      sun: '<svg aria-hidden="true" focusable="false" class="icon icon-sm" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
      moon: '<svg aria-hidden="true" focusable="false" class="icon icon-sm" viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
      menu: '<svg aria-hidden="true" focusable="false" class="icon" viewBox="0 0 24 24"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
      x: '<svg aria-hidden="true" focusable="false" class="icon" viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>'
    };

    // --- MOCK DATA FOR PROJECTS ---
    const PROJECTS_DATA = [
      {
        id: 'study-room',
        title: {
          it: 'Aula Studio Campus 24/7 Sostenibile e Inclusiva',
          en: 'Sustainable & Inclusive 24/7 Campus Study Space'
        },
        category: { it: 'Vita Studentesca', en: 'Campus Life' },
        icon: ICONS.bookOpen,
        tags: ['Campus H24', 'Design Inclusivo'],
        bannerImg: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
        alt: {
          it: 'Studenti universitari che collaborano in un’aula studio luminosa',
          en: 'University students collaborating in a bright study room'
        },
        shortDesc: {
          it: 'Creazione di uno spazio studio autogestito dagli studenti, aperto giorno e notte, con arredi rigenerati.',
          en: 'Creation of a 24/7 self-managed study space with recycled furniture and secure access.'
        },
        fullDesc: {
          it: 'L’Aula Studio 24/7 risponde al bisogno essenziale di spazi per lo studio serale e notturno in sicurezza. Il progetto prevede l’allestimento con arredi certificati ecosostenibili, sistema di badge elettronico e torrette di ricarica ad alimentazione solare per i dispositivi degli studenti.',
          en: 'The 24/7 Study Hall fulfills the crucial need for safe night study spaces. Equipped with eco-friendly furniture, electronic access badges, and solar charging towers for student devices, creating a safe hub for late-night learners.'
        },
        goal: 8000,
        raised: 6400,
        backers: 310,
        daysLeft: 5,
        matchedFunding: true,
        team: [
          { name: 'Associazione Studentesca', role: { it: 'Rappresentanti degli Studenti', en: 'Student Representatives' } }
        ],
        budgetBreakdown: [
          { name: { it: 'Arredi Riciclati', en: 'Recycled Furniture' }, percentage: 50, color: 'bg-blue-600' },
          { name: { it: 'Sicurezza & Badge', en: 'Security & Badges' }, percentage: 30, color: 'bg-red-600' },
          { name: { it: 'Ricarica Solare', en: 'Solar Charging' }, percentage: 20, color: 'bg-emerald-500' }
        ],
        rewards: [
          { id: 1, amount: 5, title: { it: 'Ringraziamento Digitale', en: 'Digital Shoutout' } },
          { id: 2, amount: 15, title: { it: 'Borraccia UniTO', en: 'UniTO Flask' } }
        ]
      },
      {
        id: 'sports-team',
        title: {
          it: 'Trasferta Europea Squadra Sportiva Universitaria',
          en: 'University Sports Team European Tournament'
        },
        category: { it: 'Sport Universitario', en: 'University Sports' },
        icon: ICONS.trophy,
        tags: ['Sport', 'Competizione Internazionale'],
        bannerImg: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1200&q=80',
        alt: {
          it: 'Squadra sportiva universitaria in campo durante una competizione',
          en: 'University sports team on the field during a competition'
        },
        shortDesc: {
          it: 'Supporta i nostri atleti universitari per la partecipazione al campionato europeo universitario a Madrid.',
          en: 'Support our university athletes in participating in the European University Championship in Madrid.'
        },
        fullDesc: {
          it: 'La nostra squadra universitaria si è qualificata per le finali europee! I fondi copriranno le spese di viaggio, l\'alloggio per i 15 atleti e l\'iscrizione ufficiale al torneo. Aiutaci a portare i colori del nostro Ateneo sul gradino più alto del podio internazionale.',
          en: 'Our university team has qualified for the European finals! Funds will cover travel expenses, accommodation for the 15 athletes, and official tournament registration fees. Help us bring our University colors to the top of the international podium.'
        },
        goal: 5000,
        raised: 2100,
        backers: 85,
        daysLeft: 12,
        matchedFunding: false,
        team: [
          { name: 'Centro Sportivo Universitario', role: { it: 'Allenatori e Direttivo', en: 'Coaches and Board' } }
        ],
        budgetBreakdown: [
          { name: { it: 'Volo e Trasporti', en: 'Flights & Transport' }, percentage: 45, color: 'bg-blue-600' },
          { name: { it: 'Alloggio (5 Notti)', en: 'Accommodation' }, percentage: 35, color: 'bg-amber-500' },
          { name: { it: 'Quota Iscrizione', en: 'Registration Fee' }, percentage: 20, color: 'bg-purple-500' }
        ],
        rewards: [
          { id: 1, amount: 10, title: { it: 'Video Saluto da Madrid', en: 'Video Greeting from Madrid' } },
          { id: 2, amount: 30, title: { it: 'Maglia Ufficiale Team', en: 'Official Team Jersey' } }
        ]
      },
      {
        id: 'green-park',
        title: {
          it: 'Riqualificazione Orto Botanico per il Quartiere',
          en: 'Botanical Garden Renewal for the Local Community'
        },
        category: { it: 'Impatto Locale', en: 'Local Community' },
        icon: ICONS.mapPin,
        tags: ['Verde Urbano', 'Inclusione'],
        bannerImg: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
        alt: {
          it: 'Viale alberato e vegetazione curata nell’orto botanico universitario',
          en: 'Tree-lined path and greenery in the university botanical garden'
        },
        shortDesc: {
          it: 'Creazione di percorsi sensoriali per ipovedenti e nuove aree relax aperte a tutti i cittadini del quartiere.',
          en: 'Creation of sensory paths for the visually impaired and new relax areas open to all local citizens.'
        },
        fullDesc: {
          it: 'Un intervento concreto per la biodiversità urbana. Il progetto trasformerà un\'area chiusa dell\'Orto Botanico universitario in uno spazio accessibile alla cittadinanza, con tappe didattiche, flora protetta e percorsi tattili-olfattivi progettati per l\'inclusività.',
          en: 'A tangible urban biodiversity intervention. Transforming a closed area of the university Botanical Garden into an inclusive space for citizens, featuring educational stops, protected flora, and tactile-olfactory paths designed for accessibility.'
        },
        goal: 12000,
        raised: 11500,
        backers: 210,
        daysLeft: 3,
        matchedFunding: true,
        team: [
          { name: 'Dipartimento di Scienze della Terra', role: { it: 'Ricercatori e Docenti', en: 'Researchers and Faculty' } }
        ],
        budgetBreakdown: [
          { name: { it: 'Alberi e Piante', en: 'Trees & Plants' }, percentage: 40, color: 'bg-emerald-600' },
          { name: { it: 'Percorso Tattile', en: 'Tactile Path' }, percentage: 40, color: 'bg-amber-600' },
          { name: { it: 'Panchine Accessibili', en: 'Accessible Benches' }, percentage: 20, color: 'bg-blue-500' }
        ],
        rewards: [
          { id: 1, amount: 20, title: { it: 'Invito Inaugurazione', en: 'Inauguration Invite' } },
          { id: 2, amount: 50, title: { it: 'Adotta un Albero', en: 'Adopt a Tree' } }
        ]
      },
      {
        id: 'bio-plastics',
        title: {
          it: 'Bioplastiche dagli Scarti delle Mense Universitarie',
          en: 'Bio-plastics from University Canteen Waste'
        },
        category: { it: 'Tecnologia & Ricerca', en: 'Tech & Research' },
        icon: ICONS.cpu,
        tags: ['Economia Circolare', 'Biotecnologie'],
        bannerImg: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
        alt: {
          it: 'Ricercatore al lavoro con provette in un laboratorio di chimica verde',
          en: 'Researcher working with test tubes in a green chemistry lab'
        },
        shortDesc: {
          it: 'Sviluppo di polimeri biodegradabili recuperando gli scarti organici delle mense del nostro campus.',
          en: 'Development of biodegradable polymers by recovering organic waste from our campus canteens.'
        },
        fullDesc: {
          it: 'Questo progetto di ricerca applicata punta a chiudere il ciclo dei rifiuti all\'interno del campus. Estraendo composti bioattivi dagli scarti alimentari delle mense, il nostro team svilupperà prototipi di packaging 100% compostabili, riducendo l\'impronta ecologica dell\'Ateneo.',
          en: 'This applied research project aims to close the waste loop within the campus. By extracting bioactive compounds from canteen food waste, our team will develop 100% compostable packaging prototypes, significantly reducing the University\'s ecological footprint.'
        },
        goal: 25000,
        raised: 6250,
        backers: 45,
        daysLeft: 30,
        matchedFunding: true,
        team: [
          { name: 'Laboratorio di Chimica Verde', role: { it: 'Dottorandi e Assegnisti', en: 'PhD Students and Post-docs' } }
        ],
        budgetBreakdown: [
          { name: { it: 'Reagenti di Laboratorio', en: 'Lab Reagents' }, percentage: 50, color: 'bg-purple-600' },
          { name: { it: 'Borsa di Studio (6 mesi)', en: 'Research Grant (6mo)' }, percentage: 35, color: 'bg-blue-600' },
          { name: { it: 'Test di Compostabilità', en: 'Compostability Tests' }, percentage: 15, color: 'bg-emerald-500' }
        ],
        rewards: [
          { id: 1, amount: 25, title: { it: 'Report Scientifico', en: 'Scientific Report Preview' } },
          { id: 2, amount: 100, title: { it: 'Menzione Pubblicazione', en: 'Mention in Publication' } }
        ]
      }
    ];

    // --- TEXT DICTIONARY ---
    const T = {
      nav: {
        home: { it: 'Home', en: 'Home' },
        explore: { it: 'Esplora Progetti', en: 'Explore Projects' },
        howItWorks: { it: 'Come Funziona', en: 'How it Works' },
        propose: { it: 'Proponi Idea', en: 'Propose Idea' },
        faq: { it: 'FAQ', en: 'FAQ' },
        privacy: { it: 'Privacy', en: 'Privacy' }
      },
      hero: {
        badge: { it: 'Piattaforma Ufficiale Ateneo', en: 'Official University Platform' },
        title: { it: 'Sostieni il Futuro del Nostro Campus', en: 'Support the Future of Our Campus' },
        subtitle: { 
          it: 'Dalla vita studentesca alla ricerca innovativa, fino all\'impatto sul quartiere. Scopri i progetti della nostra comunità universitaria e contribuisci a realizzarli.', 
          en: 'From student life to innovative research and local community impact. Discover projects from our university community and help make them a reality.' 
        },
        btnExplore: { it: 'Scopri i Progetti', en: 'Discover Projects' },
        btnPropose: { it: 'Candida un Progetto', en: 'Submit a Project' }
      },
      stats: {
        raised: { it: 'Fondi Raccolti', en: 'Total Raised' },
        projects: { it: 'Progetti Finanziati', en: 'Funded Projects' },
        donors: { it: 'Donatori Attivi', en: 'Active Donors' },
        transparency: { it: 'Trasparenza Fondi', en: 'Fund Transparency' }
      },
      explore: {
        title: { it: 'Esplora le Iniziative', en: 'Explore Initiatives' },
        filterAll: { it: 'Tutti', en: 'All' },
        btnDetails: { it: 'Scopri di più', en: 'Learn More' },
        btnDonate: { it: 'Sostieni', en: 'Support' }
      },
      projectDetail: {
        verified: { it: 'Progetto Verificato dall\'Ateneo', en: 'University Verified Project' },
        downloadB2B: { it: 'Kit Fiscale Aziende (PDF)', en: 'Corporate Tax Kit (PDF)' },
        raisedStr: { it: 'Raccolti di', en: 'Raised of' },
        donorsStr: { it: 'Sostenitori', en: 'Backers' },
        daysLeftStr: { it: 'Giorni Rimasti', en: 'Days Left' },
        quickDonate: { it: 'Donazione Rapida', en: 'Quick Donate' },
        budgetTitle: { it: 'Trasparenza Costi (Budget Breakdown)', en: 'Cost Transparency (Budget Breakdown)' },
        teamTitle: { it: 'Team Proponente', en: 'Proposing Team' },
        rewardsTitle: { it: 'Scegli la tua Ricompensa', en: 'Choose your Reward' }
      },
      checkout: {
        title: { it: 'Completa la tua Donazione', en: 'Complete your Donation' },
        amount: { it: 'Importo Selezionato', en: 'Selected Amount' },
        selectMethod: { it: 'Seleziona Metodo di Pagamento', en: 'Select Payment Method' },
        methodGuest: { it: 'Wallet / Ospite', en: 'Wallet / Guest' },
        methodGuestSub: { it: 'Apple/Google Pay, No Login', en: 'Apple/Google Pay, No Login' },
        methodBank: { it: 'Bonifico Bancario', en: 'Bank Transfer' },
        methodBankSub: { it: 'Metodo Tradizionale', en: 'Traditional Method' },
        methodB2B: { it: 'Aziendale (CSR)', en: 'Corporate (CSR)' },
        methodB2BSub: { it: 'Con Ricevuta Fiscale', en: 'With Tax Receipt' },
        emailLabel: { it: 'Email per la ricevuta', en: 'Email for receipt' },
        btnConfirmWallet: { it: 'Dona con 1-Click', en: 'Donate with 1-Click' },
        bankInstructions: { it: 'Coordinate per il Bonifico Tradizionale:', en: 'Traditional Bank Transfer Details:' },
        copyIban: { it: 'Copia IBAN', en: 'Copy IBAN' },
        causalLabel: { it: 'Causale Obbligatoria:', en: 'Mandatory Payment Reason:' },
        btnConfirmBank: { it: 'Ho effettuato il bonifico', en: 'I have completed the transfer' },
        b2bInstructions: { it: 'Inserisci i dati aziendali per l\'emissione del certificato di deducibilità fiscale.', en: 'Enter corporate details for the issuance of the tax deductibility certificate.' },
        companyName: { it: 'Ragione Sociale', en: 'Company Name' },
        vatNumber: { it: 'Partita IVA / VAT', en: 'VAT Number' },
        btnConfirmB2B: { it: 'Conferma Donazione Aziendale', en: 'Confirm Corporate Donation' }
      },
      success: {
        title: { it: 'Grazie di Cuore!', en: 'Thank You So Much!' },
        desc: { 
          it: 'Il tuo contributo fa la differenza per la nostra comunità universitaria. Riceverai a breve un\'email con la ricevuta ufficiale.', 
          en: 'Your contribution makes a difference for our university community. You will receive an email shortly with your official receipt.' 
        },
        shareBtn: { it: 'Condividi', en: 'Share' },
        homeBtn: { it: 'Torna alla Home', en: 'Back to Home' }
      },
      faq: {
        title: { it: 'Domande Frequenti', en: 'Frequently Asked Questions' },
        q1: { it: 'Chi può donare sulla piattaforma?', en: 'Who can donate on the platform?' },
        a1: { 
          it: 'Chiunque! Studenti, cittadini, ex-alunni (Alumni) e aziende. Non è obbligatorio registrarsi, puoi usare il checkout ospite rapido.', 
          en: 'Anyone! Students, citizens, Alumni, and companies. Registration is not mandatory, you can use our quick guest checkout.' 
        },
        q2: { it: 'Come funziona la deducibilità fiscale per le imprese?', en: 'How does corporate tax deductibility work?' },
        a2: { 
          it: 'Tutte le donazioni all\'Ateneo sono fiscalmente deducibili. Le aziende possono scaricare il "Corporate Tax Kit" da ogni progetto e ricevere regolare certificazione.', 
          en: 'All donations to the University are tax-deductible. Companies can download the "Corporate Tax Kit" from any project and receive official certification.' 
        },
        q3: { it: 'Cosa succede se il progetto non raggiunge l\'obiettivo?', en: 'What happens if a project does not reach its goal?' },
        a3: { 
          it: 'Usiamo la formula "Tutto o Niente". Se il traguardo non viene raggiunto entro la scadenza, tutte le donazioni vengono integralmente rimborsate in automatico.', 
          en: 'We use an "All or Nothing" model. If the goal is not met by the deadline, all donations are fully refunded automatically.' 
        },
        q4: { it: 'Posso donare tramite bonifico bancario tradizionale?', en: 'Can I donate via traditional bank transfer?' },
        a4: { 
          it: 'Certamente. Al momento del pagamento puoi selezionare "Bonifico Bancario". Ti forniremo un IBAN e una causale specifica da utilizzare dal tuo home banking.', 
          en: 'Absolutely. At checkout, select "Bank Transfer". We will provide an IBAN and a specific payment reason to use from your home banking.' 
        }
      },
      privacy: {
        title: { it: 'Privacy & Trasparenza Fondi', en: 'Privacy & Fund Transparency' },
        p1: { 
          it: 'La tutela dei tuoi dati è per noi fondamentale (GDPR EU 2016/679). I dati inseriti durante il "Guest Checkout" (es. Email) vengono utilizzati ESCLUSIVAMENTE per inviarti la ricevuta della donazione e un (1) aggiornamento finale a progetto concluso. Non verrai iscritto a newsletter generiche senza il tuo esplicito consenso.',
          en: 'Protecting your data is fundamental to us (GDPR EU 2016/679). Data entered during "Guest Checkout" (e.g. Email) is used EXCLUSIVELY to send your donation receipt and one (1) final update when the project concludes. You will not be subscribed to generic newsletters without explicit consent.'
        },
        p2: {
          it: 'Trasparenza dei Fondi: Ogni progetto presenta un "Budget Breakdown" (Ripartizione dei Costi) vincolante. I fondi raccolti vengono versati su un conto dedicato dell\'Ateneo e sbloccati al team di progetto solo dietro presentazione di giustificativi di spesa approvati dall\'amministrazione universitaria. Questo garantisce che il 100% dei fondi sia usato esattamente come promesso.',
          en: 'Fund Transparency: Every project features a binding "Budget Breakdown". Raised funds are deposited into a dedicated University account and released to the project team only upon submission of expense receipts approved by the university administration. This guarantees 100% of funds are used exactly as promised.'
        }
      },
      howItWorks: {
        title: { it: 'Come Funziona il Crowdfunding di Ateneo', en: 'How University Crowdfunding Works' },
        steps: [
          { 
            title: { it: '1. Candidatura', en: '1. Proposal' }, 
            desc: { it: 'Studenti, docenti o staff propongono un\'idea con impatto per il campus o la città.', en: 'Students, faculty, or staff propose an idea with impact for the campus or city.' }
          },
          { 
            title: { it: '2. Verifica', en: '2. Verification' }, 
            desc: { it: 'L\'Ateneo valuta la fattibilità economica e la trasparenza del budget.', en: 'The University evaluates economic feasibility and budget transparency.' }
          },
          { 
            title: { it: '3. Raccolta', en: '3. Campaign' }, 
            desc: { it: 'La community (cittadini, aziende, alumni) dona in modo sicuro per raggiungere il target.', en: 'The community (citizens, companies, alumni) donates securely to hit the target.' }
          },
          { 
            title: { it: '4. Realizzazione', en: '4. Realization' }, 
            desc: { it: 'A target raggiunto, i fondi vengono sbloccati. I donatori ricevono aggiornamenti e ricompense.', en: 'Upon hitting the target, funds are unlocked. Donors receive updates and rewards.' }
          }
        ]
      },
      propose: {
        title: { it: 'Proponi la tua Iniziativa', en: 'Propose your Initiative' },
        subtitle: { it: 'Hai un\'idea per migliorare il campus o la ricerca? Inizia da qui.', en: 'Have an idea to improve the campus or research? Start here.' },
        step1: { it: 'Informazioni Generali', en: 'General Information' },
        step2: { it: 'Piano Finanziario', en: 'Financial Plan' },
        step3: { it: 'Invio', en: 'Submit' },
        projTitle: { it: 'Titolo del Progetto', en: 'Project Title' },
        budgetReq: { it: 'Budget Richiesto (€)', en: 'Requested Budget (€)' },
        btnNext: { it: 'Avanti', en: 'Next' },
        btnBack: { it: 'Indietro', en: 'Back' },
        btnSubmit: { it: 'Invia Candidatura Ufficiale', en: 'Submit Official Proposal' }
      }
    };