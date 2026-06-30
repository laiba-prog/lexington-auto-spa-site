export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  body: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "summer-working-against-your-paint",
    title: "Summer Is Working Against Your Paint Right Now",
    date: "June 11, 2026",
    excerpt: "UV rays, heat, and road grime are attacking your vehicle's finish every single day this summer. Here's what you need to know.",
    imageUrl: "https://ucarecdn.com/8985335a-a47b-4e86-bc27-b71a1d682bd8/",
    body: `The summer sun in Kentucky is relentless. UV radiation breaks down your car's clear coat faster than almost any other environmental factor, and once that protection is gone, the damage to your paint accelerates dramatically. What looks like a minor fade today can turn into oxidation and peeling within just a few seasons.

Heat compounds the problem in ways most drivers don't think about. Hot asphalt releases tar and petroleum byproducts that stick to your lower panels and wheel wells. Bird droppings — already acidic — become exponentially more damaging when baked on by 90-degree heat. Every day you wait to wash, the damage gets harder to reverse.

The good news is that regular washing with a quality wax treatment creates a barrier against all of it. Our Ultimate Shine package includes Armor All Professional Wax and Extreme Shine Wax with Carnauba — a combination that provides real UV protection and heat resistance. Come in before summer does any more damage to your finish.`,
  },
  {
    slug: "spring-kentucky-rough-on-car-finish",
    title: "Spring in Kentucky is Rough on Your Car's Finish",
    date: "April 14, 2026",
    excerpt: "Pollen, rain, and road salt residue from winter make spring one of the toughest seasons for your vehicle's exterior.",
    imageUrl: "https://ucarecdn.com/bb7b16e4-ab8b-45ff-8c6a-4c0d23e62139/",
    body: `If you think winter is the only season that's hard on your car, spring in Kentucky will change your mind quickly. The combination of tree pollen, spring rain, and leftover road salt creates a chemical cocktail that attacks your paint, chrome, and undercarriage simultaneously.

Pollen is the sneaky one. It looks harmless — just yellow dust — but pollen is actually acidic when it gets wet. Spring rain activates the pollen that's settled on your hood and roof, creating a mild acid wash that slowly etches into your clear coat. If you're parking under trees, this is happening every morning.

The undercarriage is where the real winter damage shows up in spring. Salt that accumulated in wheel wells and under the frame all winter starts to accelerate rust once temperatures rise and moisture returns. Our Works Exterior and all full-service packages include an Undercarriage + Rust Inhibitor treatment that flushes out that salt and lays down a protective coating. It's one of the most important services we offer — and one of the most overlooked.`,
  },
  {
    slug: "full-service-car-washing-makes-difference",
    title: "Why Full-Service Car Washing Still Makes All the Difference",
    date: "March 23, 2026",
    excerpt: "Automated exterior washes are convenient, but full-service car washing delivers results that machines simply can't match.",
    imageUrl: "https://ucarecdn.com/8597e7af-7eb1-410f-8cdd-0f416a00693c/",
    body: `There's a reason full-service car washes still exist in a world of automated everything: they work better. A machine can spray water and soap on the outside of your car. It cannot vacuum your floor mats, wipe down your dashboard, clean your cup holders, or hand-apply tire dressing with the attention to detail that makes a real difference.

The interior is where most cars actually accumulate damage over time. Dust and grit ground into your seats and carpets act like sandpaper, slowly degrading the fibers. Crumbs and spills left in cup holders and door pockets create odors that become permanent if ignored long enough. Wiping down your dash and console prevents the UV cracking that turns a nice interior into a rough-looking one.

At Lexington Auto Spa, our full-service packages include real human hands at every step — from the prep work to the hand towel dry to the tire dressing. Our Ultimate Shine package takes it all the way with professional wax and interior dressing that leaves your car looking like it just came from a detailer. That's something no automated tunnel can replicate.`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
