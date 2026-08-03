export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  image?: string;
  imageAlt?: string;
};

export const services: Service[] = [
  {
    slug: 'land-clearing',
    title: 'Land Clearing',
    shortDescription: 'Prepare wooded or overgrown property for access, construction, pasture, or a fresh start.',
    description: 'Rhino Landworks clears unwanted trees, brush, and debris while planning around access, drainage, firebreaks, firelanes, and your end goal.',
    benefits: ['Construction and pasture preparation', 'Access and sightline improvement', 'Firebreak and firelane construction', 'A cleaner, more usable property'],
    image: '/media/excavator-land-clearing.webp',
    imageAlt: 'Excavator clearing trees and brush from an East Alabama property',
  },
  {
    slug: 'forestry-mulching',
    title: 'Forestry Mulching',
    shortDescription: 'Turn brush and unwanted vegetation into ground-covering mulch with less hauling.',
    description: 'Forestry mulching is an efficient, lower-disturbance option for reclaiming overgrown areas and opening trails or views.',
    benefits: ['Less hauling and burning', 'Reduced ground disturbance', 'Mulch left to help protect soil'],
    image: '/media/forestry-mulching-jobsite.webp',
    imageAlt: 'Tracked forestry mulching equipment reclaiming an overgrown property',
  },
  {
    slug: 'grading-dirt-work',
    title: 'Grading & Dirt Work',
    shortDescription: 'Shape, level, and stabilize sites for pads, yards, roads, drainage, and landscaping.',
    description: 'Good grading creates a dependable base and moves water in the right direction. We shape the site around its intended use.',
    benefits: ['Building and equipment pads', 'Yard leveling and sod preparation', 'Positive drainage and smoother access'],
    image: '/media/dozer-site-grading.webp',
    imageAlt: 'Dozer grading soil for site preparation and dirt work',
  },
  {
    slug: 'drainage',
    title: 'Drainage Solutions',
    shortDescription: 'Correct runoff, standing water, erosion, and washouts with practical site drainage.',
    description: 'We evaluate how water enters, crosses, and exits the property, then build a solution suited to the terrain.',
    benefits: ['Swales and water routing', 'Erosion and washout correction', 'Culvert and driveway drainage'],
    image: '/media/culvert-drainage-installation.webp',
    imageAlt: 'Large culvert pipe being installed to improve property drainage',
  },
  {
    slug: 'gravel-driveways',
    title: 'Gravel Driveways',
    shortDescription: 'Build, repair, and regrade gravel driveways and access roads for dependable use.',
    description: 'From the base and crown to drainage and finish stone, we focus on a driveway that performs through Alabama weather.',
    benefits: ['New driveway construction', 'Regrading and pothole repair', 'Access-road improvement'],
    image: '/media/gravel-driveway-installation.webp',
    imageAlt: 'Freshly installed gravel driveway on a rural property',
  },
  {
    slug: 'bush-hogging',
    title: 'Bush Hogging',
    shortDescription: 'Control tall grass, weeds, saplings, and light brush across fields, pastures, trails, and vacant land.',
    description: 'Rhino Landworks provides bush hogging for rural properties that need dependable vegetation control without full clearing. We help restore access, improve sightlines, and keep open ground manageable through seasonal or one-time cutting.',
    benefits: ['Fields, pastures, trails, and vacant lots', 'Seasonal property maintenance', 'Tall grass, weeds, and light-brush control', 'Improved access and visibility'],
  },
  {
    slug: 'hunting-land-maintenance',
    title: 'Hunting Land Maintenance',
    shortDescription: 'Maintain hunting property access, trails, lanes, food-plot areas, drainage, and overgrowth throughout the year.',
    description: 'Good hunting land needs practical access and consistent upkeep. Rhino Landworks combines clearing, grading, bush hogging, and drainage work to maintain trails, shooting lanes, food-plot areas, firebreaks, and firelanes around the way you use the property.',
    benefits: ['Trail and access-road maintenance', 'Shooting-lane and food-plot area preparation', 'Firebreak and firelane maintenance', 'Brush control and drainage improvement'],
    image: '/media/dozer-road-grading.webp',
    imageAlt: 'Dozer maintaining an access road through wooded hunting land',
  },
  {
    slug: 'property-reclamation',
    title: 'Property Reclamation',
    shortDescription: 'Restore neglected land so it is safer, cleaner, and useful again.',
    description: 'We combine clearing, mulching, grading, and cleanup to bring difficult or long-neglected sites back into use.',
    benefits: ['Overgrowth removal', 'Access restoration', 'Multi-step site improvement'],
    image: '/media/brush-clearing-excavator.webp',
    imageAlt: 'Excavator removing thick brush during property reclamation',
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
