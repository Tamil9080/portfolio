## SEO Configuration Guide

### What I've Added:

1. **Enhanced Metadata** - Comprehensive title, description, and keywords
2. **Open Graph Tags** - Better social media sharing (Facebook, LinkedIn)
3. **Twitter Cards** - Optimized Twitter previews
4. **Structured Data (JSON-LD)** - Helps Google understand your portfolio
5. **Robots.txt** - Tells search engines they can crawl your site
6. **Sitemap** - Helps search engines find all your pages

### Next Steps to Make Your Portfolio Discoverable:

#### 1. Update Your Domain URLs
In `app/layout.tsx`, replace:
- `https://tamilselvan-portfolio.vercel.app` with your actual domain

#### 2. Update Your Social Profiles
In `app/layout.tsx` (jsonLd section), add your real URLs:
- GitHub: `https://github.com/yourusername`
- LinkedIn: `https://linkedin.com/in/yourusername`
- Twitter: `https://twitter.com/yourusername`

Also update the Twitter creator handle:
- `creator: '@yourtwitterhandle'`

#### 3. Create an OG Image
Create a 1200x630px image (`public/og-image.png`) with:
- Your name: "TAMILSELVAN"
- Your title: "AI & Data Science Developer"
- Use a professional design

#### 4. Add University Name
In `app/layout.tsx`, update:
```typescript
alumniOf: {
  '@type': 'EducationalOrganization',
  name: 'Your University Name', // Add your actual university
},
```

#### 5. Submit to Search Engines

**Google Search Console:**
1. Go to https://search.google.com/search-console
2. Add your property (your domain)
3. Verify ownership
4. Submit your sitemap: `https://yourdomain.com/sitemap.xml`
5. Copy the verification code and add it to `layout.tsx` in the `verification.google` field

**Bing Webmaster Tools:**
1. Go to https://www.bing.com/webmasters
2. Add your site
3. Submit your sitemap

#### 6. Deploy and Wait
- Push your changes to production
- Search engines typically index new sites within 1-2 weeks
- Check indexing status in Google Search Console

#### 7. Speed Up Indexing
- Share your portfolio on social media (LinkedIn, Twitter)
- Add your portfolio link to your GitHub profile
- Link to it from your resume/CV
- Request indexing manually in Google Search Console

### Testing Your SEO

Test before deploying:
- **Rich Results Test**: https://search.google.com/test/rich-results
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/

### Expected Results

When people search for:
- "TAMILSELVAN portfolio"
- "Tamil Selvan AI developer"
- "TAMILSELVAN data science"

Your portfolio should appear in search results with:
- ✅ Your name as the title
- ✅ A description of who you are
- ✅ A preview image when shared on social media
