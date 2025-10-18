const fs = require("fs");

// Helper functions
const randomChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const randomFloat = (min, max) =>
  (Math.random() * (max - min) + min).toFixed(1);

// Data arrays
const organizations = [
  "Lendsqr",
  "Irorun",
  "Lendstar",
  "PayStack",
  "Flutterwave",
  "Kuda",
  "PiggyVest",
];
const statuses = ["Active", "Inactive", "Pending", "Blacklisted"];
const firstNames = [
  "Grace",
  "Tosin",
  "Debby",
  "Adedeji",
  "Chidi",
  "Amaka",
  "Emeka",
  "Ngozi",
  "Tunde",
  "Bola",
  "Yemi",
  "Femi",
  "Kemi",
  "Ola",
  "Seun",
  "Damilola",
  "Bukola",
  "Funke",
  "Sade",
  "Tolu",
];
const lastNames = [
  "Effiom",
  "Dokunmu",
  "Ogana",
  "Adeyemi",
  "Okafor",
  "Mensah",
  "Babatunde",
  "Johnson",
  "Williams",
  "Okonkwo",
  "Adeleke",
  "Ibrahim",
  "Mohammed",
  "Akinwande",
  "Olaleye",
];
const genders = ["Male", "Female"];
const maritalStatuses = ["Single", "Married", "Divorced", "Widowed"];
const residenceTypes = [
  "Parent's Apartment",
  "Rented Apartment",
  "Own House",
  "Company Quarters",
];
const educationLevels = ["B.Sc", "M.Sc", "HND", "OND", "Ph.D", "MBA"];
const employmentStatuses = [
  "Employed",
  "Self-Employed",
  "Unemployed",
  "Student",
];
const sectors = [
  "FinTech",
  "Technology",
  "Healthcare",
  "Education",
  "Agriculture",
  "Real Estate",
  "Manufacturing",
];
const relationships = [
  "Sister",
  "Brother",
  "Friend",
  "Colleague",
  "Parent",
  "Cousin",
];

// Generate phone number
const generatePhone = () => {
  const prefixes = [
    "0803",
    "0806",
    "0813",
    "0816",
    "0703",
    "0706",
    "0805",
    "0807",
  ];
  return randomChoice(prefixes) + randomInt(1000000, 9999999);
};

// Generate date
const generateDate = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = randomChoice(months);
  const day = randomInt(1, 28);
  const year = randomInt(2018, 2023);
  const hour = randomInt(8, 18);
  const minute = randomInt(0, 59);
  return `${month} ${day}, ${year} ${hour}:${minute
    .toString()
    .padStart(2, "0")} ${hour >= 12 ? "PM" : "AM"}`;
};

// Generate email
const generateEmail = (firstName, lastName, org) => {
  const domain = org.toLowerCase() + ".com";
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
};

// Generate username
const generateUsername = (firstName, lastName) => {
  return Math.random() > 0.5 ? `${firstName} ${lastName}` : firstName;
};

// Generate user ID
const generateUserId = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "LSQF";
  for (let i = 0; i < 6; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
};

// Generate balance
const generateBalance = () => {
  const amount = randomInt(50000, 5000000);
  return `₦${amount.toLocaleString()}.00`;
};

// Generate income range
const generateIncome = () => {
  const ranges = [
    "₦50,000.00 - ₦100,000.00",
    "₦100,000.00 - ₦200,000.00",
    "₦200,000.00 - ₦400,000.00",
    "₦400,000.00 - ₦600,000.00",
    "₦600,000.00 - ₦1,000,000.00",
  ];
  return randomChoice(ranges);
};

// Generate social handle
const generateSocialHandle = (firstName, lastName) => {
  return `@${firstName.toLowerCase()}_${lastName.toLowerCase()}`;
};

// Generate users and userDetails
const users = [];
const userDetails = [];

for (let i = 1; i <= 500; i++) {
  const firstName = randomChoice(firstNames);
  const lastName = randomChoice(lastNames);
  const organization = randomChoice(organizations);
  const username = generateUsername(firstName, lastName);
  const email = generateEmail(firstName, lastName, organization);
  const phoneNumber = generatePhone();
  const gender = randomChoice(genders);
  const fullName = `${firstName} ${lastName}`;

  // Create user
  const user = {
    id: i,
    organization,
    username,
    email,
    phoneNumber,
    dateJoined: generateDate(),
    status: randomChoice(statuses),
  };

  // Create guarantors
  const numGuarantors = randomInt(1, 2);
  const guarantors = [];
  for (let j = 0; j < numGuarantors; j++) {
    const gFirstName = randomChoice(firstNames);
    const gLastName = randomChoice(lastNames);
    guarantors.push({
      fullName: `${gFirstName} ${gLastName}`,
      phoneNumber: generatePhone(),
      email: `${gFirstName.toLowerCase()}@gmail.com`,
      relationship: randomChoice(relationships),
    });
  }

  // Create user details
  const userDetail = {
    id: i,
    name: fullName,
    userId: generateUserId(),
    rating: parseFloat(randomFloat(1, 5)),
    tier: randomInt(1, 3),
    balance: generateBalance(),
    bankAccount: `${randomInt(1000000000, 9999999999)}/Providus Bank`,
    personalInfo: {
      fullName,
      phoneNumber,
      email: `${firstName.toLowerCase()}@gmail.com`,
      bvn: phoneNumber,
      gender,
      maritalStatus: randomChoice(maritalStatuses),
      children: randomChoice(["None", "1", "2", "3", "4"]),
      typeOfResidence: randomChoice(residenceTypes),
    },
    education: {
      levelOfEducation: randomChoice(educationLevels),
      employmentStatus: randomChoice(employmentStatuses),
      sectorOfEmployment: randomChoice(sectors),
      durationOfEmployment: `${randomInt(1, 10)} years`,
      officeEmail: email,
      monthlyIncome: generateIncome(),
      loanRepayment: `${randomInt(10000, 100000).toLocaleString()}`,
    },
    socials: {
      twitter: generateSocialHandle(firstName, lastName),
      facebook: fullName,
      instagram: generateSocialHandle(firstName, lastName),
    },
    guarantors,
  };

  users.push(user);
  userDetails.push(userDetail);
}

// Create final object
const data = {
  users,
  userDetails,
};

// Write to file
fs.writeFileSync("db2.json", JSON.stringify(data, null, 2));
console.log("✅ Successfully generated 500 users and 500 user details!");
console.log("📁 File saved as: db.json");
