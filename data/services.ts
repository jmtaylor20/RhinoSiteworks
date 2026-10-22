export type ServiceSection = {
  heading: string;
  /** One paragraph per entry. */
  body: string[];
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  /** Search-result copy for the service page. Aim for 140 to 160 characters. */
  metaDescription: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  image?: string;
  imageAlt?: string;
  /**
   * Long-form landing page content. Pages that run paid traffic need real
   * depth: Google rates a thin page as a below average landing page
   * experience and it costs money on every click. Services without this
   * fall back to the short layout.
   */
  sections?: ServiceSection[];
  /** Service-specific questions. Distinct per page, so each can carry FAQPage schema. */
  faqs?: ServiceFaq[];
  /** Real job photos for the landing page. Label what the photo shows, not what we wish it showed. */
  gallery?: { src: string; alt: string; label: string }[];
};

export const services: Service[] = [
  {
    slug: 'land-clearing',
    title: 'Land Clearing',
    metaDescription: 'Land clearing for wooded and overgrown property across East Alabama. Access roads, pasture and construction prep, firebreaks, and firelanes. Free estimates.',
    shortDescription: 'Prepare wooded or overgrown property for access, construction, pasture, or a fresh start.',
    description: 'Rhino Landwork clears unwanted trees, brush, and debris while planning around access, drainage, firebreaks, firelanes, and your end goal.',
    benefits: ['Construction and pasture preparation', 'Access and sightline improvement', 'Firebreak and firelane construction', 'A cleaner, more usable property'],
    image: '/media/excavator-land-clearing.webp',
    imageAlt: 'Excavator clearing trees and brush from an East Alabama property',
  },
  {
    slug: 'forestry-mulching',
    title: 'Forestry Mulching',
    metaDescription: 'Forestry mulching across East Alabama turns brush and small trees into ground cover with less hauling and less disturbance. Free on-site estimates.',
    shortDescription: 'Turn brush and unwanted vegetation into ground-covering mulch with less hauling.',
    description: 'Forestry mulching is an efficient, lower-disturbance option for reclaiming overgrown areas and opening trails or views.',
    benefits: ['Less hauling and burning', 'Reduced ground disturbance', 'Mulch left to help protect soil'],
    image: '/media/forestry-mulching-jobsite.webp',
    imageAlt: 'Tracked forestry mulching equipment reclaiming an overgrown property',
  },
  {
    slug: 'grading-dirt-work',
    title: 'Grading & Dirt Work',
    metaDescription: 'Grading and dirt work contractor in East Alabama. Excavation, land leveling, building pads, access roads, and drainage that moves water. Free estimates.',
    shortDescription: 'Excavation, grading, and land leveling for building pads, yards, roads, drainage, and site preparation.',
    description: 'Rhino Landwork is a grading and dirt work contractor serving Tuskegee, Auburn, Opelika, and the surrounding East Alabama counties. We handle excavation, land leveling, building and equipment pads, access roads, and the drainage that keeps all of it working. Good grading creates a dependable base and moves water in the right direction, so we shape the site around what it has to do.',
    benefits: ['Building and equipment pads', 'Land leveling and sod preparation', 'Excavation and site preparation', 'Positive drainage and smoother access'],
    image: '/media/dozer-site-grading.webp',
    imageAlt: 'Dozer grading soil for site preparation and dirt work in East Alabama',
    gallery: [
      { src: '/media/dozer-site-grading.webp', alt: 'Dozer cutting and shaping soil during site grading', label: 'Site grading' },
      { src: '/media/finished-site-grading.webp', alt: 'Finish grading completed on a cleared East Alabama property', label: 'Finish grading' },
      { src: '/media/dozer-road-grading.webp', alt: 'Dozer shaping and crowning a new access road', label: 'Access road' },
    ],
    sections: [
      {
        heading: 'What a dirt work contractor actually does here',
        body: [
          'Most of what people call grading is really several jobs stacked together: excavation to cut the high ground, fill and compaction to build the low ground up, land leveling to get a consistent surface, and drainage so the finished site sheds water instead of holding it. Doing one without the others is how a pad ends up holding water a year later.',
          'We work from what the site has to support. A pad under a shop building gets built and compacted differently than a yard going to sod. A driveway cut across a slope needs the water handled before the stone goes down. We would rather talk through the end use first than grade something twice.',
        ],
      },
      {
        heading: 'What is included',
        body: [
          'Site walk and a written scope before anything starts. Excavation, cut and fill, and hauling as the job needs it. Land leveling and finish grading to the contour the site calls for. Building, shop, and equipment pads built and compacted. Access roads and driveway bases shaped and crowned. Swales, ditches, and culvert work so water leaves the property the right way. Final cleanup and a pass to make sure the grade drains the way we said it would.',
          'If the job needs material brought in or taken off, we say so in the estimate rather than adding it later.',
        ],
      },
      {
        heading: 'What moves the price',
        body: [
          'Grading and excavation are priced on the dirt, not the square footage. How much material has to move, whether it can stay on site or has to be hauled, how far equipment has to travel across the property, and what is in the ground all matter. Rock, old fill, stumps, and buried debris change a job quickly.',
          'Ground conditions matter as much as scope. Dirt work goes faster and finishes better when the site is not saturated, which is why we schedule around weather rather than through it. The estimate is free and we will tell you if waiting two weeks gets you a better result for the same money.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you build pads for shops, barns, and houses?',
        answer: 'Yes. Building and equipment pads are a regular part of the work: cut, fill, compact, and shape to the footprint and elevation the build needs, with drainage worked out around it. Bring us the plan or the footprint and the finished floor elevation if you have them, and we will work from that.',
      },
      {
        question: 'Can you fix a yard that holds water?',
        answer: 'Usually, though the fix is rarely just adding dirt to the low spot. We look at where water enters the property, where it crosses, and where it is supposed to leave. Sometimes it is regrading for positive fall, sometimes it is a swale or a culvert, and sometimes the real problem is a neighbor\u2019s runoff. We will tell you which one you have.',
      },
      {
        question: 'How soon after grading can I put down sod or build?',
        answer: 'That depends on compaction and weather more than on a calendar. A properly compacted pad is ready when it is compacted, and we will tell you what we achieved rather than guessing. For sod, we finish grade to the contour you need and leave the surface ready for topsoil and planting.',
      },
      {
        question: 'Do you work on rural acreage as well as in town?',
        answer: 'Both. We run from Tuskegee across Macon and Lee County and the surrounding area, on everything from established lots in Auburn and Opelika to rural tracts well off the pavement. Access is a factor we price in, not a reason to turn a job down.',
      },
    ],
  },
  {
    slug: 'drainage',
    title: 'Drainage Solutions',
    metaDescription: 'Drainage solutions for East Alabama property: swales, water routing, culverts, and erosion repair. We fix standing water at the source. Free estimates.',
    shortDescription: 'Correct runoff, standing water, erosion, and washouts with practical site drainage.',
    description: 'We evaluate how water enters, crosses, and exits the property, then build a solution suited to the terrain.',
    benefits: ['Swales and water routing', 'Erosion and washout correction', 'Culvert and driveway drainage'],
    image: '/media/culvert-drainage-installation.webp',
    imageAlt: 'Large culvert pipe being installed to improve property drainage',
  },
  {
    slug: 'gravel-driveways',
    title: 'Gravel Driveways',
    metaDescription: 'Gravel driveway construction, regrading, and pothole repair across East Alabama. Proper base, crown, and drainage so it holds up to Alabama weather.',
    shortDescription: 'Build, repair, and regrade gravel driveways and access roads for dependable use.',
    description: 'From the base and crown to drainage and finish stone, we focus on a driveway that performs through Alabama weather.',
    benefits: ['New driveway construction', 'Regrading and pothole repair', 'Access-road improvement'],
    image: '/media/gravel-driveway-installation.webp',
    imageAlt: 'Freshly installed gravel driveway on a rural property',
  },
  {
    slug: 'bush-hogging',
    title: 'Bush Hogging',
    metaDescription: 'Bush hogging for fields, pastures, trails, and vacant land across East Alabama. Seasonal or one-time cutting for tall grass, weeds, and light brush.',
    shortDescription: 'Control tall grass, weeds, saplings, and light brush across fields, pastures, trails, and vacant land.',
    description: 'Rhino Landwork provides bush hogging for rural properties that need dependable vegetation control without full clearing. We help restore access, improve sightlines, and keep open ground manageable through seasonal or one-time cutting.',
    benefits: ['Fields, pastures, trails, and vacant lots', 'Seasonal property maintenance', 'Tall grass, weeds, and light-brush control', 'Improved access and visibility'],
    image: '/media/forestry-mulching-jobsite.webp',
    imageAlt: 'Open grass field and pine tree line on an East Alabama property worked by Rhino Landwork',
    gallery: [
      { src: '/media/forestry-mulching-jobsite.webp', alt: 'Open grass field and pine tree line on an East Alabama property', label: 'Open field' },
      { src: '/media/brush-clearing-excavator.webp', alt: 'Field with brush cut back and open ground restored', label: 'Brush cut back' },
    ],
    sections: [
      {
        heading: 'What bush hogging actually handles',
        body: [
          'A bush hog is a heavy rotary cutter pulled behind a tractor. It is built to knock down tall grass, weeds, briars, broomsedge, and small saplings across open ground, then leave the cuttings on the field to break down. It is the right tool for land that is simply overgrown, not land that is wooded.',
          'Once stems get much past an inch or two, or the ground underneath is full of stumps, rock, or old fence wire, a rotary cutter is the wrong tool and we will tell you so. That property needs forestry mulching or clearing instead, and we do both, so the recommendation is not a sales pitch for the only service we own.',
        ],
      },
      {
        heading: 'What it costs and what moves the price',
        body: [
          'Bush hogging is usually priced by the acre, and the honest answer is that the per-acre number depends on the field. We walk it or look at photos before quoting, and the estimate is free.',
          'Five things move the price: how many acres, how tall and thick the growth has gotten, whether the ground is smooth pasture or broken with stumps, ditches, and debris, how easily a tractor and cutter can get through the gate and around the property, and how long it has been since the last cut. A field cut every year is quick work. A field that has not been touched in three years is a different job, and sometimes it takes two passes.',
        ],
      },
      {
        heading: 'When to cut',
        body: [
          'Most properties around Macon and Lee County get cut one to three times through the growing season, roughly April through October. One cut a year keeps a field from turning into brush. Two or three keeps it looking maintained.',
          'Some cuts are about a deadline rather than a schedule. Hunting land gets cut in late summer and early fall so trails, shooting lanes, and food-plot edges are ready before the season. Property going on the market gets cut before photos. Firebreaks and firelanes get maintained before things dry out. If you have a date you are working toward, tell us and we will schedule around it.',
        ],
      },
      {
        heading: 'Bush hogging or forestry mulching',
        body: [
          'These get confused constantly, and picking wrong wastes money. Bush hogging cuts standing vegetation on open ground and leaves it lying in the field. It is faster and cheaper per acre, and it is maintenance: the roots are still there and it grows back.',
          'Forestry mulching grinds brush and small trees down into mulch and takes the material with it. It costs more per acre but it reclaims ground that has gone past mowing. A simple rule: if you can still see the field under the growth, you probably want bush hogging. If it has turned into a thicket, you want mulching.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How tall can the grass be before a bush hog will not cut it?',
        answer: 'Tall grass and weeds are not usually the problem, thickness is. A rotary cutter handles heavy growth fine, though very tall or very thick fields may need a second pass at a lower height. What stops a bush hog is woody stems, not height. If the field has grown up in saplings thicker than an inch or two, forestry mulching is the better call.',
      },
      {
        question: 'Do you need me to be there while you cut?',
        answer: 'No. Most bush hogging gets done without the owner on site. What we do need beforehand is gate access, a heads-up on anything hidden in the field such as stumps, well heads, septic lids, old fence wire, or survey pins, and a clear idea of where you want us to stop cutting.',
      },
      {
        question: 'Will bush hogging get rid of the weeds for good?',
        answer: 'No, and nobody should tell you otherwise. Cutting removes the top growth, it does not kill the root. That is why it is maintenance rather than a one-time fix. Cutting on a regular schedule does weaken the weeds and favors the grass over time, so a field that gets cut every year looks better each season.',
      },
      {
        question: 'How small or large a field will you take?',
        answer: 'We work everything from small vacant lots up to large rural tracts and hunting property. Call with the location and rough acreage and we will tell you straight whether it is a fit, and if it is not, we will usually know somebody better suited to it.',
      },
    ],
  },
  {
    slug: 'hunting-land-maintenance',
    title: 'Hunting Land Maintenance',
    metaDescription: 'Hunting land maintenance across East Alabama: trails, access roads, shooting lanes, food-plot areas, firebreaks, and firelanes. Book before the season.',
    shortDescription: 'Maintain hunting property access, trails, lanes, food-plot areas, drainage, and overgrowth throughout the year.',
    description: 'Good hunting land needs practical access and consistent upkeep. Rhino Landwork combines clearing, grading, bush hogging, and drainage work to maintain trails, shooting lanes, food-plot areas, firebreaks, and firelanes around the way you use the property.',
    benefits: ['Trail and access-road maintenance', 'Shooting-lane and food-plot area preparation', 'Firebreak and firelane maintenance', 'Brush control and drainage improvement'],
    image: '/media/dozer-road-grading.webp',
    imageAlt: 'Dozer maintaining an access road through wooded hunting land',
  },
  {
    slug: 'property-reclamation',
    title: 'Property Reclamation',
    metaDescription: 'Property reclamation across East Alabama. Clearing, mulching, grading, and cleanup that bring neglected land back into safe, usable condition.',
    shortDescription: 'Restore neglected land so it is safer, cleaner, and useful again.',
    description: 'We combine clearing, mulching, grading, and cleanup to bring difficult or long-neglected sites back into use.',
    benefits: ['Overgrowth removal', 'Access restoration', 'Multi-step site improvement'],
    image: '/media/brush-clearing-excavator.webp',
    imageAlt: 'Excavator removing thick brush during property reclamation',
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
