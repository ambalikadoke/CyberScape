import { Smartphone, Wallet, Mail, Users, ShoppingBag } from "lucide-react";

export const ZONES = [
  {
    id: "mobile",
    name: "Mobile World",
    Icon: Smartphone,
    color: "#22d3ee",
    tagline: "Your pocket-sized gateway to everything online.",
    overview:
      "A smartphone is a personal computer, camera, wallet and identity card in one. Apps run on top of the operating system and request access to hardware and data, while networks like mobile data and Wi-Fi connect them to the internet.",
    flow: ["You install an app", "App requests permissions", "OS grants access to data", "App syncs with its servers"],
    elements: [
      { title: "Apps", text: "Software from app stores that provides services — each app is built and maintained by a developer or company." },
      { title: "Permissions", text: "Access rights such as camera, contacts, location, SMS or microphone that an app asks the operating system for." },
      { title: "Wi-Fi & Mobile Data", text: "Networks that carry your data between the phone and the internet; public Wi-Fi is shared by many strangers." },
      { title: "Device Data", text: "Photos, messages, contacts, location history and saved logins stored on the device or in the cloud." },
    ],
    fact: "An average smartphone user has 80+ apps installed, but uses only around 9 daily.",
  },
  {
    id: "payments",
    name: "Payments World",
    Icon: Wallet,
    color: "#60a5fa",
    tagline: "Money that moves at the speed of a tap.",
    overview:
      "Digital payments move money between bank accounts electronically. In India, UPI (Unified Payments Interface) links your bank account to a payment app so you can send or receive money instantly using a UPI ID, phone number or QR code.",
    flow: ["You enter recipient / scan QR", "Amount is confirmed", "You authorise with UPI PIN", "Bank transfers funds instantly"],
    elements: [
      { title: "UPI ID & QR", text: "A unique address (like name@bank) or a QR code that identifies who receives the money." },
      { title: "Recipient", text: "The person or merchant whose name the app displays before you confirm a payment." },
      { title: "UPI PIN", text: "A secret number that authorises money leaving your account. It is only needed to send, never to receive." },
      { title: "Collect Request", text: "A request someone sends asking you to pay them — accepting it debits your account." },
    ],
    fact: "UPI processes over 15 billion transactions every month across India.",
  },
  {
    id: "email",
    name: "Email World",
    Icon: Mail,
    color: "#a78bfa",
    tagline: "The digital post office of the internet.",
    overview:
      "Email is how organisations and people send official messages, receipts, password resets and documents. Every email has visible parts you read and hidden technical details that show where it really came from.",
    flow: ["Sender writes message", "Mail server sends it", "Your inbox filters it", "You read, click or reply"],
    elements: [
      { title: "Sender", text: "The display name and the actual email address — they can be different, and the address matters most." },
      { title: "Subject", text: "A one-line summary designed to get your attention and decide whether you open the message." },
      { title: "Links", text: "Clickable text or buttons that lead to a web address, which may differ from what the text shows." },
      { title: "Attachments", text: "Files like PDFs, documents, images or archives that open on your device when downloaded." },
    ],
    fact: "Over 340 billion emails are sent every day worldwide.",
  },
  {
    id: "social",
    name: "Social Media World",
    Icon: Users,
    color: "#c084fc",
    tagline: "Where your online identity lives and grows.",
    overview:
      "Social media platforms let you build a public or private profile, share moments and connect with people. Algorithms decide what appears in your feed based on what you and your network interact with.",
    flow: ["You create a profile", "You post & share content", "Algorithm distributes it", "Audience views & interacts"],
    elements: [
      { title: "Profiles", text: "Your name, photo, bio and details — the identity others see and interact with." },
      { title: "Posts & Stories", text: "Photos, videos and text you publish, which can be saved, screenshotted or reshared." },
      { title: "Privacy Settings", text: "Controls for who sees your posts, who can message you and who can find your account." },
      { title: "Sharing & Tags", text: "How content spreads — through reshares, mentions, tags and location stamps." },
    ],
    fact: "People spend an average of about 2.5 hours per day on social media.",
  },
  {
    id: "shopping",
    name: "Shopping World",
    Icon: ShoppingBag,
    color: "#2dd4bf",
    tagline: "A global marketplace open 24/7.",
    overview:
      "Online shopping connects buyers with sellers through websites and marketplace apps. A single order involves the platform, an independent seller, a payment gateway and a delivery partner working together.",
    flow: ["Browse & choose product", "Seller & platform confirm", "Payment gateway processes", "Courier delivers order"],
    elements: [
      { title: "Products & Listings", text: "Descriptions, photos, ratings and reviews created by sellers and buyers." },
      { title: "Sellers", text: "Businesses or individuals who list items — marketplaces host thousands of independent sellers." },
      { title: "Payments", text: "Card, UPI, wallet, net banking or cash on delivery, processed through a payment gateway." },
      { title: "Delivery", text: "Logistics partners who ship orders and send tracking updates by SMS, email or app." },
    ],
    fact: "India has more than 250 million online shoppers, and the number keeps rising.",
  },
];
