export type ServiceAreaGroup = {
  county: string;
  blurb: string;
  towns: string[];
  primary?: boolean;
};

export const serviceAreaGroups: ServiceAreaGroup[] = [
  {
    county: 'Macon County',
    blurb:
      'Our home county. Rhino Landwork is based on Fletcher Segrest Road in Tuskegee, so Macon County properties get the shortest drive and the easiest scheduling.',
    towns: ['Tuskegee', 'Notasulga', 'Shorter', 'Franklin', 'Society Hill'],
    primary: true,
  },
  {
    county: 'Lee County',
    blurb:
      'Rural acreage, new construction pads, and established lots around the Auburn and Opelika corridor — clearing, grading, drainage, and driveway work.',
    towns: ['Auburn', 'Opelika', 'Loachapoka', 'Waverly', 'Salem', 'Beauregard', 'Smiths Station'],
    primary: true,
  },
  {
    county: 'Tallapoosa County',
    blurb: 'Lake lots, hunting tracts, and access roads north of the home base.',
    towns: ['Dadeville', 'Camp Hill', 'Alexander City'],
  },
  {
    county: 'Bullock & Russell Counties',
    blurb: 'Timber and hunting property east and south of Tuskegee, plus rural driveway and drainage work.',
    towns: ['Union Springs', 'Hurtsboro', 'Phenix City'],
  },
  {
    county: 'Elmore & Montgomery Counties',
    blurb: 'Larger clearing, mulching, and site-preparation projects west along the I-85 corridor.',
    towns: ['Wetumpka', 'Eclectic', 'Pike Road', 'Montgomery'],
  },
];

export const serviceAreaTowns = serviceAreaGroups.flatMap((group) => group.towns);
