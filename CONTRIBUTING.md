# Contributing to WIT Garden

Welcome! This guide walks you through making your first open source contribution.
By the end you'll have added yourself to the garden and shared a recommendation on the board.

---

## Setup (do this once)

### 1. Fork the repo
Click **Fork** in the top right corner of the GitHub page.
This creates your own copy of the repo under your account.

### 2. Clone your fork
```bash
git clone https://github.com/YOUR-USERNAME/wit-garden
cd wit-garden
```

### 3. Add the original repo as "upstream" (so you can stay in sync later)
```bash
git remote add upstream https://github.com/ORG-NAME/wit-garden
```

---

## Activity 1 — Join the Garden

### 4. Create a branch
Always work on a branch, never directly on `main`.
```bash
git checkout -b add-YOUR-NAME
```

### 5. Add your drawing
Draw anything — paper and phone camera, Excalidraw, Procreate, the Notes app, whatever.
Save/export it as a PNG or JPG and drop it into:
```
assets/members/yourname.png
```
Keep the filename lowercase with no spaces (e.g. `maya-chen.png`).

### 6. Add your entry to `data/members.js`
Open the file and copy the example block. Fill in your own info:

```js
{
  name: "Your Name",
  drawing: "yourname.png",    // must match the filename you added in step 5
  fun_fact: "Something interesting about you",
  learning: "Something you're currently learning",
  github: "your-github-username"   // optional, leave as "" to skip
},
```

### 7. Stage and commit your changes
```bash
git add .
git commit -m "add [your name] to garden"
```

### 8. Push to your fork
```bash
git push origin add-YOUR-NAME
```

### 9. Open a Pull Request
Go to your fork on GitHub. You'll see a prompt to open a PR — click it.
- Title: `add [your name] to garden`
- Leave a short description if you want!

---

## Activity 2 — Add to The Board

### 10. Add a recommendation to `data/resources.js`
Open the file and add an object for something you love — article, song, movie, recipe, tool, anything:

```js
{
  title: "Name of the thing",
  url: "https://...",
  tag: "article",     // pick one: article, blog, music, video, movie, recipe, tool, course, book, other
  description: "One or two sentences about why you're recommending it.",
  added_by: "Your Name"
},
```

### 11. Commit and push
```bash
git add data/resources.js
git commit -m "add [resource name] to board"
git push origin add-YOUR-NAME
```

Your PR will update automatically — no need to open a new one.

---

## Staying in sync with main

After other people's PRs get merged, your local copy will be behind. Here's how to catch up:

```bash
git checkout main
git pull upstream main          # pull in the new changes
git checkout add-YOUR-NAME
git rebase main                 # replay your commits on top of the updated main
```

---

## Undoing a mistake

Made a commit you want to undo? Don't delete it — revert it:

```bash
git revert HEAD       # creates a new commit that undoes the last one
```

This is the safe way. It preserves history rather than rewriting it.

---

## Quick reference

| Command | What it does |
|---|---|
| `git status` | see what's changed |
| `git add .` | stage all changes |
| `git commit -m "message"` | save a snapshot |
| `git push origin branch-name` | send to GitHub |
| `git pull upstream main` | get latest from the original repo |
| `git rebase main` | replay your commits on updated main |
| `git revert HEAD` | safely undo last commit |
| `git log --oneline` | see commit history |
