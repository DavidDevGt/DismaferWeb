# Security Deployment Guide - DismaferWeb

This guide ensures DismaferWeb is deployed securely to production.

---

## Pre-Deployment Checklist

### 1. Security Headers ✅
- [ ] `vercel.json` present in root (for Vercel)
- [ ] `_headers` present in root (for Netlify)
- [ ] Headers include:
  - `Strict-Transport-Security` (HSTS)
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Content-Security-Policy`
  - `Referrer-Policy`
  - `Permissions-Policy`

### 2. Privacy & Legal ✅
- [ ] `SECURITY.md` exists with vulnerability reporting process
- [ ] `/privacidad` page accessible
- [ ] Privacy policy covers:
  - Data collection methods
  - Data usage
  - User rights
  - Contact information
  - GDPR compliance (if applicable)

### 3. Code Security ✅
- [ ] No hardcoded secrets (API keys, passwords)
- [ ] No exposed credentials in git history
- [ ] `.env` file in `.gitignore`
- [ ] Dependencies audited: `pnpm audit`
- [ ] ESLint passing: `pnpm lint`
- [ ] TypeScript check passing: `pnpm check`

### 4. Form Security ✅
- [ ] Contact form validates input client-side
- [ ] Privacy policy checkbox required
- [ ] WhatsApp link uses `rel="noopener,noreferrer"`
- [ ] Form does NOT store data server-side
- [ ] Form redirects to WhatsApp (safe)

### 5. Testing
- [ ] Run `pnpm test` (unit tests)
- [ ] Run `pnpm test:e2e` (end-to-end tests)
- [ ] Build succeeds: `pnpm build`
- [ ] Preview builds locally: `pnpm preview`

---

## Deployment Platforms

### ✅ Vercel Deployment

**Configuration:**
- Uses `vercel.json` for security headers
- Automatic HTTPS/SSL
- Automatic deployment from main branch

**Steps:**
1. Push code to main branch
2. Vercel auto-deploys via GitHub integration
3. Verify deployment at dismafer.shop
4. Test security headers at https://securityheaders.com

**Required settings in Vercel Dashboard:**
- Environment: Production
- Domain: dismafer.shop
- Auto-deploy: Enabled for main branch
- Build command: `pnpm build`
- Output directory: `dist`

### ✅ Netlify Deployment

**Configuration:**
- Uses `_headers` file for security headers
- Automatic HTTPS/SSL
- Automatic deployment from main branch

**Steps:**
1. Connect GitHub repository
2. Build command: `pnpm build`
3. Publish directory: `dist`
4. Deploy to production
5. Verify at dismafer.shop

**netlify.toml Configuration:**
```toml
[build]
  command = "pnpm build"
  publish = "dist"

[[headers]]
  for = "/*"
  [headers.values]
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
```

---

## Post-Deployment Verification

### 1. Security Headers Check

**Manual Check:**
```bash
curl -I https://dismafer.shop
```

**Should see:**
```
Strict-Transport-Security: max-age=31536000...
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Content-Security-Policy: ...
```

**Automated Tools:**
- https://securityheaders.com (paste dismafer.shop)
- https://observatory.mozilla.org (Mozilla security check)

### 2. SSL/TLS Verification

**Test SSL:**
- https://www.ssllabs.com/ssltest/
- https://www.globalsign.com/en/ssl-checker

**Expected: A+ rating**

### 3. Privacy Policy Accessible

**Verify:**
- [ ] https://dismafer.shop/privacidad loads
- [ ] Page renders properly
- [ ] Link from contact form works

### 4. Form Functionality

**Test Contact Form:**
- [ ] All fields validate
- [ ] Privacy checkbox required
- [ ] Clicking submit opens WhatsApp
- [ ] Message includes all fields
- [ ] WhatsApp link works

### 5. Performance Check

**Lighthouse Audit:**
- [ ] Performance score > 90
- [ ] Security score = 100
- [ ] Best Practices score > 90
- [ ] SEO score > 90

---

## Ongoing Security Maintenance

### Weekly
- [ ] Monitor Dependabot alerts
- [ ] Review any security notifications

### Monthly
- [ ] Run `pnpm audit` for vulnerabilities
- [ ] Test security headers again
- [ ] Review form submissions
- [ ] Check WhatsApp inbox for abuse

### Quarterly
- [ ] Full security audit
- [ ] Dependency updates review
- [ ] Performance review
- [ ] Privacy policy review

### Annually
- [ ] Professional security audit
- [ ] Penetration testing (optional)
- [ ] GDPR compliance review
- [ ] Update security policy

---

## Handling Security Incidents

### If you discover a vulnerability:

1. **DO NOT** post to GitHub issues
2. Follow process in [SECURITY.md](../../SECURITY.md)
3. Contact maintainer directly
4. Provide details:
   - Vulnerability description
   - Steps to reproduce
   - Potential impact
   - Your contact information

### Response timeline:
- Critical: 24-48 hours
- High: 1-2 weeks
- Medium: 2-4 weeks
- Low: 1 month

---

## Content Security Policy (CSP) Explained

The CSP headers prevent:
- ❌ Inline JavaScript execution
- ❌ Loading scripts from unknown sources
- ❌ XSS attacks
- ❌ Clickjacking (frame-ancestors: none)

**Current CSP allows:**
- ✅ Scripts from `dismafer.shop` (self)
- ✅ Tailwind CSS via CDN
- ✅ Google Fonts for typography
- ✅ Connection to WhatsApp API
- ❌ Everything else is blocked

**If you need to add external resources:**
1. Evaluate security risk
2. Use Subresource Integrity (SRI) hashes
3. Update CSP header to allow domain
4. Document why it's needed
5. Regular audit for necessity

---

## Rollback Procedure

**If something breaks in production:**

1. Revert the deployment:
   - Vercel: Click "Rollback" in Deployments
   - Netlify: Redeploy previous version

2. Check what broke:
   - Review last commit
   - Check security headers
   - Test locally: `pnpm build && pnpm preview`

3. Fix locally, commit, and redeploy:
   ```bash
   git reset --soft HEAD~1  # Keep changes unstaged
   # Fix the issue
   git add . && git commit -m "fix: ..."
   git push origin main
   ```

4. Verify deployment was successful

---

## Useful Commands

```bash
# Check for vulnerabilities
pnpm audit

# Run all security checks
pnpm lint && pnpm check && pnpm test

# Build locally to test
pnpm build

# Preview build locally
pnpm preview

# Full CI simulation
pnpm ci

# Update dependencies safely
pnpm up  # Interactive updates
```

---

## Contact & Support

For security questions or incidents:
- See [SECURITY.md](../../SECURITY.md)
- GitHub: [@DavidDevGt](https://github.com/DavidDevGt)

For deployment issues:
- Vercel support: vercel.com/support
- Netlify support: netlify.com/support

---

**Last updated:** June 10, 2026  
**By:** Claude Code CISO Security Audit
