A) Post কীভাবে করবেন (EN + BN)
1) নতুন পোস্ট তৈরি (command)

PowerShell → myblog ফোল্ডারে:

English post
cd "$env:USERPROFILE\Desktop\myblog"
hugo new en/posts/my-first-post.md
বাংলা post
hugo new bn/posts/amar-prothom-post.md
2) পোস্ট লিখবেন কোথায়

ফাইলগুলো পাবেন:

content/en/posts/my-first-post.md

content/bn/posts/amar-prothom-post.md

ওগুলো Notepad / VS Code দিয়ে খুলে লিখুন।

3) Publish করার নিয়ম (Draft false)

ফাইলের উপরে front matter থাকে। Draft publish করতে:

---
title: "My First Post"
date: 2026-02-21
description: "Short SEO description."
tags: ["blog"]
draft: false
---

draft: true থাকলে live এ যাবে না।

4) Local preview
hugo server -D
5) Live publish (Git push)
git add .
git commit -m "Add new post"
git push

Cloudflare auto-deploy করবে। ✅

B) Design “কি হবে” (PaperMod customization)

PaperMod-এর ডিজাইন কনফিগ দিয়ে নিয়ন্ত্রণ হবে। আপনার hugo.toml এ params এ এগুলো দিলে প্রফেশনাল look হবে:

[params]
defaultTheme = "auto"     # auto / light / dark
ShowReadingTime = true
ShowShareButtons = true
ShowPostNavLinks = true
ShowBreadCrumbs = true
ShowCodeCopyButtons = true

# Home layout: profile mode (clean)
profileMode = true
profileModeTitle = "EdTechBD"
profileModeSubtitle = "Fast bilingual blog (English + বাংলা)"
profileModeButton1Name = "English"
profileModeButton1URL = "/en/"
profileModeButton2Name = "বাংলা"
profileModeButton2URL = "/bn/"

# Social (optional)
socialIcons = [
  { name = "facebook", url = "https://facebook.com/..." },
  { name = "youtube",  url = "https://youtube.com/..." }
]

এগুলো সেট করে:

git add hugo.toml
git commit -m "Update design settings"
git push
Extra: Blog thumbnails / featured image

PaperMod এ আপনি পোস্টে cover image দিতে পারেন:

---
title: "..."
date: 2026-02-21
cover:
  image: "images/post1.jpg"
  alt: "..."
  caption: "..."
  relative: true
---

তারপর ছবিটা রাখুন:

static/images/post1.jpg



1) ProfileMode config (EN + BN buttons)
[params]
env = "production"
description = "EdTechBD — Fast bilingual blog (English + বাংলা)."

defaultTheme = "auto"     # auto | light | dark
ShowReadingTime = true
ShowShareButtons = true
ShowPostNavLinks = true
ShowBreadCrumbs = true
ShowCodeCopyButtons = true

profileMode = true
profileModeTitle = "EdTechBD"
profileModeSubtitle = "Fast bilingual blog (English + বাংলা)"

profileModeButton1Name = "English"
profileModeButton1URL  = "/en/"

profileModeButton2Name = "বাংলা"
profileModeButton2URL  = "/bn/"

# Optional social icons (edit URLs or remove this block)
socialIcons = [
  { name = "facebook", url = "https://facebook.com/" },
  { name = "youtube",  url = "https://youtube.com/" }
]

socialIcons না চাইলে ওই blockটা delete করবেন।

2) Save → Push (publish)

PowerShell (myblog folder) থেকে:

cd "$env:USERPROFILE\Desktop\myblog"
git add hugo.toml
git commit -m "Enable ProfileMode homepage"
git push

Cloudflare auto-deploy হবে।

3) (Recommended) Profile image যোগ করুন

একটা ছবি রাখুন:
static/images/profile.jpg

তারপর hugo.toml এ ProfileMode block এ যোগ করুন:

profileModeImageURL = "images/profile.jpg"
profileModeImageTitle = "EdTechBD"
profileModeImageWidth = 180
profileModeImageHeight = 180

তারপর আবার:

git add .
git commit -m "Add profile image"
git push
