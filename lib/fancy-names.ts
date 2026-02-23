// Fancy name generator inspired by Netlify, Heroku, Docker, etc.

const adjectives = [
  'amazing', 'awesome', 'blazing', 'brilliant', 'charming', 'clever', 'cosmic',
  'dazzling', 'delightful', 'dynamic', 'eager', 'elegant', 'epic', 'excited',
  'fabulous', 'fancy', 'fearless', 'fierce', 'flying', 'friendly', 'funky',
  'generous', 'gentle', 'gigantic', 'glorious', 'golden', 'graceful', 'grand',
  'happy', 'harmless', 'heroic', 'humble', 'infinite', 'jolly', 'joyful',
  'keen', 'kind', 'lively', 'lovely', 'lucky', 'magical', 'majestic', 'marvelous',
  'merry', 'mighty', 'neat', 'noble', 'optimistic', 'peaceful', 'pleasant',
  'polite', 'proud', 'radiant', 'rapid', 'relaxed', 'robust', 'shiny', 'sleek',
  'smooth', 'snappy', 'sparkling', 'splendid', 'stellar', 'super', 'swift',
  'tranquil', 'upbeat', 'vast', 'vibrant', 'victorious', 'vigorous', 'vivid',
  'wild', 'wise', 'witty', 'wonderful', 'zany', 'zealous', 'zippy'
];

const nouns = [
  'albatross', 'beaver', 'butterfly', 'cheetah', 'dolphin', 'eagle', 'elephant',
  'falcon', 'flamingo', 'gazelle', 'giraffe', 'hawk', 'hummingbird', 'jaguar',
  'kangaroo', 'leopard', 'lion', 'lynx', 'meerkat', 'narwhal', 'octopus',
  'otter', 'owl', 'panda', 'panther', 'parrot', 'peacock', 'pelican', 'penguin',
  'phoenix', 'platypus', 'puffin', 'raven', 'seahorse', 'seal', 'shark',
  'sparrow', 'squirrel', 'starfish', 'swan', 'tiger', 'toucan', 'turtle',
  'unicorn', 'vulture', 'walrus', 'whale', 'wolf', 'zebra',
  // Tech/Space themed
  'comet', 'galaxy', 'meteor', 'nebula', 'orbit', 'planet', 'pulsar',
  'quasar', 'rocket', 'satellite', 'starship', 'supernova', 'voyager',
  // Nature themed
  'aurora', 'cascade', 'crystal', 'horizon', 'meadow', 'mountain',
  'ocean', 'peak', 'river', 'summit', 'thunder', 'valley', 'wave'
];

/**
 * Generate a fancy, memorable name for panorama links
 * Format: adjective-noun-number (e.g., "flying-falcon-42")
 */
export function generateFancyName(): string {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const number = Math.floor(Math.random() * 1000);
  
  return `${adjective}-${noun}-${number}`;
}

/**
 * Generate a unique fancy name by checking against existing names
 */
export async function generateUniqueFancyName(
  checkExists: (name: string) => Promise<boolean>
): Promise<string> {
  let attempts = 0;
  const maxAttempts = 10;
  
  while (attempts < maxAttempts) {
    const name = generateFancyName();
    const exists = await checkExists(name);
    
    if (!exists) {
      return name;
    }
    
    attempts++;
  }
  
  // Fallback to UUID-like if all attempts fail
  return `${generateFancyName()}-${Date.now().toString(36)}`;
}

/**
 * Validate a fancy name format
 */
export function isValidFancyName(name: string): boolean {
  const pattern = /^[a-z]+-[a-z]+-\d+$/;
  return pattern.test(name);
}
