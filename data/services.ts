export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: 'land-clearing',
    title: 'Land Clearing',
    shortDescription: 'Prepare wooded or overgrown property for access, construction, pasture, or a fresh start.',
    description: 'Rhino Siteworks clears unwanted trees, brush, and debris while planning around access, drainage, and your end goal.',
    benefits: ['Construction and pasture preparation', 'Access and sightline improvement', 'A cleaner, more usable property'],
  },
  {
    slug: 'forestry-mulching',
    title: 'Forestry Mulching',
    shortDescription: 'Turn brush and unwanted vegetation into ground-covering mulch with less hauling.',
    description: 'Forestry mulching is an efficient, lower-disturbance option for reclaiming overgrown areas and opening trails or views.',
    benefits: ['Less hauling and burning', 'Reduced ground disturbance', 'Mulch left to help protect soil'],
  },
  {
    slug: 'grading-dirt-work',
    title: 'Grading & Dirt Work',
    shortDescription: 'Shape, level, and stabilize sites for pads, yards, roads, drainage, and landscaping.',
    description: 'Good grading creates a dependable base and moves water in the right direction. We shape the site around its intended use.',
    benefits: ['Building and equipment pads', 'Yard leveling and sod preparation', 'Positive drainage and smoother access'],
  },
  {
    slug: 'drainage',
    title: 'Drainage Solutions',
    shortDescription: 'Correct runoff, standing water, erosion, and washouts with practical site drainage.',
    description: 'We evaluate how water enters, crosses, and exits the property, then build a solution suited to the terrain.',
    benefits: ['Swales and water routing', 'Erosion and washout correction', 'Culvert and driveway drainage'],
  },
  {
    slug: 'gravel-driveways',
    title: 'Gravel Driveways',
    shortDescription: 'Build, repair, and regrade gravel driveways and access roads for dependable use.',
    description: 'From the base and crown to drainage and finish stone, we focus on a driveway that performs through Alabama weather.',
    benefits: ['New driveway construction', 'Regrading and pothole repair', 'Access-road improvement'],
  },
  {
    slug: 'property-reclamation',
    title: 'Property Reclamation',
    shortDescription: 'Restore neglected land so it is safer, cleaner, and useful again.',
    description: 'We combine clearing, mulching, grading, and cleanup to bring difficult or long-neglected sites back into use.',
    benefits: ['Overgrowth removal', 'Access restoration', 'Multi-step site improvement'],
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
