# 🚨 Fix Cloudflare 403 Forbidden Error on UAE Landing Page

**Problem**: `https://uae.internationalschooling.org` returns **403 Forbidden** instead of serving content

**Impact**:
- ❌ Meta Pixel tracking is broken
- ❌ Google Bots can't crawl (SEO impact)
- ❌ Third-party integrations fail (Calendly, Zoho, etc.)
- ❌ Form submissions may fail

---

## 🔍 Root Cause: Cloudflare WAF Blocking

The Cloudflare Web Application Firewall (WAF) is too aggressive and blocking legitimate requests. This happens when:
- Bot requests are blocked (Meta Pixel, Google, Bing bots)
- Rate limiting is too strict
- Security rules are overly aggressive

---

## ✅ IMMEDIATE FIX (5 minutes)

### Step 1: Check Cloudflare WAF Rules

1. Go to **Cloudflare Dashboard**
2. Select your domain: `internationalschooling.org`
3. Navigate to **Security → WAF**
4. Look for these **Managed Rules** that might be blocking:
   - `Cloudflare Managed Ruleset` 
   - `OWASP ModSecurity Core Rule Set`
   - Any custom rules

### Step 2: Whitelist Legitimate Bots

In Cloudflare **Security → WAF → Custom rules**, add these exceptions:

```
(cf.bot_management.score < 30 and http.user_agent contains "Meta" and http.request.uri.path eq "/")
(cf.threat_score < 10 and http.user_agent contains "facebookexternalhit")
(cf.bot_management.score < 30 and http.user_agent contains "Googlebot")
(cf.bot_management.score < 30 and http.user_agent contains "bingbot")
```

**Action**: ✅ **Allow**

### Step 3: Temporarily Disable WAF for Testing

1. Go to **Security → WAF**
2. Find **WAF Sensitivity**
3. Set to **"Essentially Off"** or **"Low"**
4. Test: `curl https://uae.internationalschooling.org`

Expected response: **200 OK** (not 403)

### Step 4: Check Rate Limiting

1. Go to **Security → Rate Limiting**
2. Look for rules limiting requests from same IP
3. Check if your IPs are blocked:
   ```
   curl -I https://uae.internationalschooling.org
   curl -I -H "User-Agent: facebookexternalhit" https://uae.internationalschooling.org
   ```

---

## 🔧 Advanced Fixes (If Step 1-4 doesn't work)

### Check Vercel Deployment Status

```bash
# In Vercel Dashboard
1. Go to Deployments
2. Verify latest deployment is "READY" ✅
3. If deployment failed, click "Redeploy"
4. Check build logs for errors
```

### Check Security Headers

Verify that Cloudflare isn't blocking due to CORS or CSP:

```bash
curl -I https://uae.internationalschooling.org

# Look for these headers:
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Content-Security-Policy: ...
```

If CSP is blocking third parties, update it in **Cloudflare → Security → Content Security Policy**.

### Test with Different User Agents

```bash
# Test with different bots
curl -H "User-Agent: Mozilla/5.0" https://uae.internationalschooling.org
curl -H "User-Agent: facebookexternalhit" https://uae.internationalschooling.org
curl -H "User-Agent: Googlebot" https://uae.internationalschooling.org
curl -H "User-Agent: bingbot" https://uae.internationalschooling.org
```

If any returns 403, add to whitelist.

---

## 📊 Performance Issues (Secondary)

Current metrics:
- **TTFB**: 3.82s (Target: <0.8s)
- **SSL/TLS**: 2.53s (Target: <0.5s)

### Fixes:

1. **Enable Cloudflare Caching**
   - Security → Bot Management
   - Enable "Definitely Automated"

2. **Use Cloudflare Workers for Edge Caching**
   - Reduces SSL/TLS overhead

3. **Enable Vercel Edge Middleware**
   ```javascript
   // middleware.ts
   export const config = {
     matcher: ['/((?!_next/static|favicon.ico).*)'],
   };
   export function middleware(request) {
     // Add caching headers
     const response = NextResponse.next();
     response.headers.set('Cache-Control', 'public, max-age=3600');
     return response;
   }
   ```

---

## 📋 Verification Checklist

After applying fixes, verify:

- [ ] `curl https://uae.internationalschooling.org` returns **200 OK**
- [ ] `curl -H "User-Agent: facebookexternalhit" ...` returns **200 OK**
- [ ] `curl -H "User-Agent: Googlebot" ...` returns **200 OK**
- [ ] Meta Pixel tracking shows requests in Facebook Events Manager
- [ ] Google Search Console shows site as "Crawlable"
- [ ] TTFB < 1.5s in Lighthouse
- [ ] SSL/TLS < 1.0s in PageSpeed Insights

---

## 🚀 Quick Command to Test All Bots

```bash
#!/bin/bash
echo "Testing different user agents..."

for ua in \
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" \
  "facebookexternalhit" \
  "Googlebot/2.1" \
  "bingbot/2.0"
do
  echo "UA: $ua"
  curl -s -o /dev/null -w "Status: %{http_code}\n" \
    -H "User-Agent: $ua" \
    https://uae.internationalschooling.org
done
```

---

## 📞 Support Resources

- **Cloudflare Docs**: https://developers.cloudflare.com/waf/
- **Vercel Docs**: https://vercel.com/docs/edge-middleware
- **Meta Pixel Issues**: https://developers.facebook.com/docs/facebook-pixel/troubleshooting

---

## 🎯 Priority Timeline

| Priority | Task | Timeline |
|----------|------|----------|
| 🔴 P0 | Fix 403 error (WAF) | TODAY |
| 🔴 P0 | Whitelist Meta/Google bots | TODAY |
| 🟡 P1 | Optimize TTFB | This Week |
| 🟡 P1 | Enable Edge caching | This Week |
| 🟢 P2 | Monitor performance | Ongoing |

---

**Need Help?** Contact Cloudflare Support or Vercel Support with details from this document.
