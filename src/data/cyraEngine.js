export const TOPICS = {
  password: {
    label: "Password & Account Security",
    keywords: ["password", "passwords", "passphrase", "passcode", "2fa", "two factor", "two-factor", "mfa", "authenticator", "account security", "login", "log in", "hacked account", "account hacked", "password manager", "secure my account", "email account", "my account", "secure account", "account"],
    answers: {
      how: "To create a strong password: use a passphrase of 12–16+ characters, mix uppercase, lowercase, numbers and symbols, and avoid personal details like your name or birthday. Example style: \"Blue#Mango!Train42\". A password manager can generate and store unique passwords for you.",
      why: "A strong password is the first lock on your digital life. Weak or reused passwords can be guessed or cracked in seconds, and one leaked password can unlock your email, banking and social accounts. Strong, unique passwords stop attackers from moving from one account to another.",
      when: "Change your password immediately if you suspect a breach, notice unknown logins, shared it with someone, or used it on a public device. Otherwise, a strong unique password with 2FA does not need frequent changes — update it when a service reports a leak.",
      can: "Yes, passwords can be hacked through phishing, data breaches, guessing, malware or brute-force attacks. You can greatly reduce the risk by using long unique passwords, enabling two-factor authentication (2FA) and never entering your password on links received in messages.",
      what: "A strong password is long (12+ characters), unique to one account, hard to guess, and contains a mix of letters, numbers and symbols. It avoids dictionary words, keyboard patterns like \"qwerty\" and personal information such as names, birthdays or phone numbers.",
      where: "Use unique passwords everywhere, but especially on your email, banking and UPI apps, social media, shopping sites and cloud storage. Your email password is the most critical — it can be used to reset all your other accounts.",
    },
  },
  otp: {
    label: "OTP Safety",
    keywords: ["otp", "one time password", "one-time password", "verification code", "sms code", "security code", "6 digit code", "pin code"],
    answers: {
      how: "To keep OTPs safe: never share them with anyone, read the full SMS to check what the OTP is for, and enter it only on the official app or website you started the action on. If you receive an OTP you didn't request, ignore it and change your password.",
      why: "An OTP is the final key that approves a login or payment. Anyone who has your OTP can access your account or complete a transaction in your name. That's why banks and companies will never ask you for it.",
      when: "You should only use an OTP when you yourself initiated a login, payment or verification. If someone calls or messages asking for an OTP — even claiming to be from a bank, delivery company or support team — that is the moment to stop and refuse.",
      can: "No genuine bank, government office or company employee will ever ask for your OTP. If someone asks, it is a scam. Yes, OTPs can be misused if shared, so treat them like your ATM PIN.",
      what: "An OTP (One-Time Password) is a temporary code, usually 4–8 digits, sent by SMS, email or an app. It is valid for a short time and is used to verify that you are the person logging in or approving a transaction.",
      where: "Enter OTPs only inside the official app or website where you started the action. Never type an OTP into a link received by SMS, WhatsApp or email, and never read it out on a phone call.",
    },
  },
  upi: {
    label: "UPI & Online Payments",
    keywords: ["upi", "payment", "payments", "pay", "gpay", "google pay", "phonepe", "paytm", "bhim", "transaction", "qr", "qr code", "collect request", "refund", "upi pin", "money", "bank", "transfer", "wallet", "customer care", "net banking", "card", "cvv"],
    answers: {
      how: "To pay safely with UPI: verify the recipient's name before confirming, scan QR codes only from trusted merchants, keep your UPI PIN secret and use only official payment apps. Set a daily transaction limit and enable app lock for extra protection.",
      why: "UPI payments are instant and usually cannot be reversed easily. If money is sent to a fraudster, recovery is difficult — so verifying every payment request and keeping your PIN private is essential.",
      when: "Enter your UPI PIN only when you are sending money. You never need a UPI PIN or QR scan to receive money. If someone says \"scan this to receive a refund/prize\", it's a scam.",
      can: "Yes, UPI fraud can happen through fake collect requests, QR code scams, screen-sharing apps or fake customer care numbers. You can stay safe by declining unknown requests, never sharing your PIN, and calling 1930 immediately if money is lost.",
      what: "UPI (Unified Payments Interface) is India's real-time payment system that links your bank account to apps like BHIM, Google Pay or PhonePe. You send money using a UPI ID, phone number or QR code, and authorise it with a secret UPI PIN.",
      where: "Use only official UPI apps downloaded from Google Play Store or Apple App Store. Get customer support only from inside the app or the bank's official website — never from search results, social media comments or random numbers.",
    },
  },
  phishing: {
    label: "Phishing & Fake Emails",
    keywords: ["phishing", "phish", "fake email", "fake mail", "email", "emails", "mail", "spam", "sender", "inbox", "attachment", "attachments", "scam message", "fake message", "smishing", "vishing"],
    answers: {
      how: "To spot a phishing email: check the actual sender address (not just the name), look for urgent or threatening language, hover over links to see the real URL, and watch for spelling errors or unexpected attachments. When in doubt, contact the company through its official website.",
      why: "Phishing works by tricking people rather than hacking systems. Attackers create fear or excitement so you act quickly — clicking a link, entering a password or opening an infected file. Recognising it protects your accounts, money and data.",
      when: "Be extra careful when an email asks you to act urgently — \"account suspended\", \"KYC expiring\", \"you won a prize\" or \"unpaid bill\". Also be cautious during sales, tax season and festivals, when phishing campaigns increase.",
      can: "Yes, a phishing email can steal your login details, install malware through attachments or lead to financial fraud. Simply opening an email is usually safe, but clicking links or downloading attachments can be dangerous.",
      what: "Phishing is a cyber attack where criminals pretend to be trusted organisations — banks, delivery services, employers or government — to trick you into sharing passwords, OTPs, card details or installing harmful files.",
      where: "Phishing appears in email, SMS (smishing), phone calls (vishing), WhatsApp, social media DMs and even fake ads. Report phishing emails using your email provider's \"Report phishing\" option and report fraud at cybercrime.gov.in.",
    },
  },
  links: {
    label: "Suspicious Links",
    keywords: ["link", "links", "url", "urls", "website", "site", "click", "clicked", "short link", "shortened", "bit.ly", "domain", "https", "fake website"],
    answers: {
      how: "To check a link: hover over it or long-press to preview the real URL, look for misspellings like \"amaz0n\" or extra words in the domain, and avoid shortened links from unknown senders. Instead of clicking, type the official website address yourself.",
      why: "Suspicious links can lead to fake login pages that steal passwords, pages that download malware, or payment pages that capture card details. One click is often all a scammer needs to start an attack.",
      when: "Be cautious whenever a link arrives unexpectedly — in an SMS, WhatsApp forward, email or social media message — especially if it promises rewards, refunds, jobs or warns about account blocking.",
      can: "Yes, clicking a malicious link can harm you. If you clicked one, don't enter any information, close the page, run a security scan, and change passwords if you entered any. If money was involved, call 1930.",
      what: "A suspicious link is a web address that looks unusual or comes from an untrusted source — for example misspelled domains, random characters, unknown shortened URLs, or a link text that doesn't match the actual address.",
      where: "Suspicious links commonly appear in SMS, WhatsApp forwards, emails, QR codes, social media comments, pop-up ads and fake job or lottery messages. Always verify the domain before trusting any page.",
    },
  },
  mobile: {
    label: "Mobile & App Safety",
    keywords: ["mobile", "phone", "smartphone", "app", "apps", "application", "permission", "permissions", "android", "iphone", "ios", "apk", "play store", "app store", "wifi", "wi-fi", "bluetooth", "screen sharing", "anydesk", "update", "malware", "virus"],
    answers: {
      how: "To keep your phone safe: install apps only from official stores, check permissions before granting them, keep the system and apps updated, use a screen lock and enable 'Find My Device'. Remove apps you no longer use.",
      why: "Your phone holds banking apps, OTPs, photos and contacts. A malicious app or unsecured phone can give attackers access to all of it — including the ability to read OTP messages or control your screen.",
      when: "Review app permissions when installing a new app, after major updates and every few months. Be extra cautious when someone asks you to install an app — especially screen-sharing apps — over a call.",
      can: "Yes, apps can steal data if they have excessive permissions or come from unofficial sources like APK files sent on WhatsApp. Even official-looking apps can be fake, so check the developer name, reviews and download count.",
      what: "App permissions are rights an app requests to access features like camera, microphone, contacts, location, SMS and storage. A safe app asks only for permissions it genuinely needs — a calculator does not need your contacts.",
      where: "Download apps only from Google Play Store, Apple App Store or the company's official website. Avoid APK files from chats, links or third-party sites, and avoid banking on public Wi-Fi networks.",
    },
  },
  social: {
    label: "Social Media Privacy",
    keywords: ["social media", "social", "instagram", "facebook", "whatsapp", "twitter", "x.com", "snapchat", "linkedin", "telegram", "youtube", "profile", "post", "posts", "followers", "friend request", "dm", "story", "stories", "tag"],
    answers: {
      how: "To protect your social media: set your profile to private, limit who can see your posts and contact you, enable 2FA, avoid sharing your location in real time, and review tagged photos. Accept requests only from people you know.",
      why: "Information you share publicly — birthdays, school, location, family names — can be used for identity theft, account recovery attacks, impersonation and targeted scams. Privacy settings reduce how much strangers can learn about you.",
      when: "Review your privacy settings when creating an account, after platform updates and every few months. Be cautious when you're travelling, celebrating events or posting about children — these moments reveal a lot.",
      can: "Yes, social media accounts can be hacked or cloned. Scammers create fake profiles of real people and ask their friends for money. If you notice this, report the fake profile and warn your contacts.",
      what: "Social media privacy means controlling who can see your profile, posts, friends list, contact details and activity. It includes settings for visibility, tagging, messaging and how your data is used for ads.",
      where: "You'll find privacy controls in Settings → Privacy (or Account Centre) on platforms like Instagram, Facebook, WhatsApp and X. Check profile visibility, story audience, last-seen status and who can add you to groups.",
    },
  },
  privacy: {
    label: "Personal Data & Privacy",
    keywords: ["privacy", "personal data", "personal information", "data", "aadhaar", "aadhar", "pan", "identity", "identity theft", "kyc", "information", "leak", "leaked", "breach", "data breach", "documents", "address", "photos"],
    answers: {
      how: "To protect your personal data: share ID details only on official platforms, use masked Aadhaar where possible, shred printed documents, limit app permissions, and avoid filling unknown forms or surveys. Check privacy policies before signing up.",
      why: "Personal data such as Aadhaar, PAN, phone number and bank details can be misused for loans in your name, SIM swaps, fake KYC and targeted fraud. Protecting it keeps your identity and finances safe.",
      when: "Be careful whenever you're asked for ID documents — during KYC, job applications, rentals, hotel check-ins or online forms. Always ask why it's needed and how it will be stored.",
      can: "Yes, personal data can leak through data breaches, fake websites, careless sharing or malicious apps. If your data is exposed, change passwords, inform your bank, lock biometrics in mAadhaar and report misuse at cybercrime.gov.in.",
      what: "Personal data is any information that identifies you — name, phone number, address, Aadhaar, PAN, bank details, photos, location and even browsing habits. Sensitive data needs extra protection.",
      where: "Share personal data only on official government portals, verified company websites and trusted apps. Avoid sharing it on social media, unknown WhatsApp groups, unverified links or with unknown callers.",
    },
  },
};

const INTENTS = [
  { id: "how", patterns: [/\bhow\b/, /\bsteps?\b/, /\bways?\b/, /\btips?\b/, /\bprotect\b/, /\bcreate\b/, /\bmake\b/, /\bkeep\b/, /\bavoid\b/, /\bprevent\b/, /\bidentify\b/, /\bspot\b/, /\bcheck\b/] },
  { id: "why", patterns: [/\bwhy\b/, /\bimportant\b/, /\bimportance\b/, /\breason\b/, /\bmatter/] },
  { id: "when", patterns: [/\bwhen\b/, /\bhow often\b/, /\bwhat time\b/] },
  { id: "where", patterns: [/\bwhere\b/, /\bwhich (app|site|website|place)s?\b/] },
  { id: "can", patterns: [/^(can|could|is|are|will|would|should|do|does|am)\b/, /\bpossible\b/, /\bsafe\b/, /\brisk/] },
  { id: "what", patterns: [/\bwhat\b/, /\bmeaning\b/, /\bmeans?\b/, /\bdefine\b/, /\bexplain\b/, /\btell me\b/] },
];

const weight = (kw) => (kw.includes(" ") ? 3 : kw.length <= 3 ? 2.5 : 2);

export const detectTopic = (text) => {
  let best = null;
  let bestScore = 0;
  for (const [id, t] of Object.entries(TOPICS)) {
    const score = t.keywords.reduce((s, kw) => {
      const re = new RegExp(`(^|[^a-z0-9])${kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-z0-9]|$)`);
      return re.test(text) ? s + weight(kw) : s;
    }, 0);
    if (score > bestScore) { best = id; bestScore = score; }
  }
  return best;
};

export const detectIntent = (text) => {
  if (/^\s*(how often)/.test(text)) return "when";
  if (/what (happens|if)|\bi clicked\b/.test(text)) return "can";
  const firstWord = text.trim().split(/\s+/)[0];
  const direct = INTENTS.find((i) => i.id === firstWord);
  if (direct) return direct.id;
  if (/^(can|could|is|are|will|would|should|do|does|am)$/.test(firstWord)) return "can";
  const hit = INTENTS.find((i) => i.patterns.some((p) => p.test(text)));
  return hit ? hit.id : "what";
};

const REPORT = "If you've experienced cybercrime or financial fraud, act quickly:\n\n1. Call the Cyber Crime Helpline 1930 immediately (especially for money fraud).\n2. File a complaint on the National Cyber Crime Reporting Portal: cybercrime.gov.in\n3. Contact your bank to block cards or UPI.\n4. Keep screenshots, transaction IDs and messages as evidence.";
const NON_ENGLISH = "I can only respond in English. Please type your question in English — for example: \"How can I keep my OTP safe?\"";
const FALLBACK = "I'm not sure about that one yet. I can help with Passwords, OTP Safety, UPI & Payments, Phishing Emails, Suspicious Links, Mobile & App Safety, Social Media Privacy and Personal Data. Try asking something like \"Why is OTP sharing dangerous?\"";

export const getReply = (raw) => {
  const text = raw.toLowerCase().trim();
  if (!text) return { text: FALLBACK };
  const letters = text.replace(/[\s\d\p{P}\p{S}]/gu, "");
  const latin = letters.replace(/[^a-z]/g, "");
  if (letters.length && latin.length / letters.length < 0.5) return { text: NON_ENGLISH };
  if (/^(hi|hello|hey|hii+|good (morning|afternoon|evening)|namaste)\b/.test(text) && text.split(/\s+/).length <= 4)
    return { text: "Hello! I'm CYRA, your Cyber Assistant. Ask me anything about passwords, OTPs, UPI payments, phishing, suspicious links, app safety, social media privacy or personal data." };
  if (/\b(thank|thanks|thx)\b/.test(text)) return { text: "You're welcome! Stay alert and stay safe online. Ask me anything else anytime." };
  if (/\b(report|1930|complaint|scammed|cheated|lost money|fraud happened|been hacked|cyber ?crime|helpline)\b/.test(text)) return { text: REPORT, topic: "report" };
  const topic = detectTopic(text);
  if (!topic && /\b(who are you|your name|what can you do|help)\b/.test(text))
    return { text: "I'm CYRA, an offline rule-based cyber awareness assistant. I understand the topic and type of your question (how, why, when, can, what, where) and give a focused answer. Pick a topic chip below to get started." };
  if (!topic) return { text: FALLBACK };
  const intent = detectIntent(text);
  return { text: TOPICS[topic].answers[intent], topic, intent };
};

export const SUGGESTIONS = {
  password: ["How can I create a strong password?", "Why is a strong password important?", "When should I change my password?", "Can my password be hacked?", "What makes a password strong?", "Where should I use unique passwords?"],
  otp: ["What is an OTP?", "Why should I never share my OTP?", "Can a bank ask for my OTP?", "Where should I enter an OTP?"],
  upi: ["How can I pay safely with UPI?", "When do I need my UPI PIN?", "Can UPI fraud happen?", "Where should I find customer care?"],
  phishing: ["How can I spot a phishing email?", "What is phishing?", "Why does phishing work?", "Can opening a fake email harm me?"],
  links: ["How can I check if a link is safe?", "What happens if I clicked a suspicious link?", "Where do suspicious links appear?"],
  mobile: ["How can I keep my phone safe?", "What are app permissions?", "Where should I download apps?", "Can apps steal my data?"],
  social: ["How can I make my social media private?", "Why does social media privacy matter?", "Can my social media account be cloned?"],
  privacy: ["How can I protect my personal data?", "What is personal data?", "Can my Aadhaar details be misused?"],
};
