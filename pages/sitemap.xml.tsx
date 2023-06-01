
import { recordToSlug, apiQueryAll, allDistricts, primarySubdomain } from "/lib/utils";
import { AllNewsDocument, AllProjectsDocument, AllAboutsDocument } from "/graphql";

const staticPaths = ['', 'aktuellt', 'kontakt', 'om', 'projekt']

function SiteMap() { }

function generateSiteMap(subdomain: string, posts: { path: string, updated: string }[]) {
  const baseUrl = `https://${subdomain === primarySubdomain ? 'www' : subdomain}.konstframjandet.se`;

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     
      ${staticPaths
      .map((path) =>
        `<url>
           <loc>${`${baseUrl}/${path}`}</loc>
        </url>`
      ).join('')}

     ${posts
      .map(({ path, updated }) =>
        `<url>
          <loc>${`${baseUrl}${path}`}</loc>
          <lastmod>${updated}</lastmod>
        </url>`
      ).join('')}
   </urlset>
 `;
}

export async function getServerSideProps({ res, locale: subdomain }) {

  const district = (await allDistricts()).find(d => d.subdomain === subdomain);
  const variables = { districtId: district.id };
  const [{ news }, { projects }, { abouts }] = await Promise.all([apiQueryAll(AllNewsDocument, { variables }), apiQueryAll(AllProjectsDocument, { variables }), apiQueryAll(AllAboutsDocument, { variables })]);

  const posts = news.concat(abouts).map(p => ({ path: recordToSlug(p), updated: p._updatedAt }));

  projects.forEach(p => {
    posts.push({ path: `${recordToSlug(p)}`, updated: p._updatedAt });
    p.subpage.forEach(sp => posts.push({ path: `${recordToSlug(p)}/${sp.slug}`, updated: sp._updatedAt }));
  })

  const sitemap = generateSiteMap(district.subdomain, posts);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;