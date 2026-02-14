# Post-Mortem: React Native Oyster App

## Project Overview

An educational oyster-browsing mobile app built with React Native and Expo. Users can explore oyster varieties by region, swipe through oyster facts, and view detailed oyster profiles. The app features five screens: Welcome, Intro (About Us), Search (card swiper), Details (locations), and Profiles.

---

## Timeline

### Phase 1 — Initial Build (Jan 1 – Jan 18, 2022)

**~30 commits** covering the core app creation and feature buildout.

- **Jan 1**: Bootstrapped a new Expo app, ported code from a previous version, added custom fonts and image assets.
- **Jan 2–4**: Built out all five screens with navigation (`react-navigation/stack`). Added SectionList to DetailsScreen, region buttons, and oyster profile rendering via FlatList.
- **Jan 5–11**: Built the data layer — created `new_data.json` with 80+ oyster entries. Implemented region-based filtering, flavor profile rendering, and scroll fixes.
- **Jan 11–13**: Added swipeable oyster fact cards using `react-native-deck-swiper`, connected to a Heroku-hosted API for random facts. Styled card UI.
- **Jan 14–18**: Added custom font (`Original Surfer`) across all screens, deployed via Expo, and updated `app.json` for publishing.

**Key decisions in Phase 1:**
- Used a Heroku API endpoint for oyster facts (would later become a liability).
- Used `react-native-deck-swiper` for the card swipe UI.
- Used `expo-app-loading` for font loading splash state.
- Used `react-native-safe-area-context` and `@react-native-community/masked-view` (both later deprecated/renamed).

### Phase 2 — README & Documentation (Jan 18 – Mar 4, 2022)

**~30+ commits**, almost entirely `Update README.md`. Added screenshots, project description, and MIT license. Also uploaded additional screenshot images via GitHub UI.

**Observation:** This phase has a very high commit count relative to substance — suggests frequent small edits directly on GitHub rather than batched local changes.

### Phase 3 — Dormancy (Mar 2022 – Feb 2025)

**~3 years with no commits.** The app sat untouched.

**Impact of dormancy:**
- Expo SDK went from 44 to 54 (10 major versions).
- React went from 17.0.1 to 19.1.0.
- React Native went from 0.64.3 to 0.81.5.
- The Heroku free tier was shut down (Nov 2022), killing the oyster facts API.
- Several dependencies were deprecated or renamed.

### Phase 4 — Modernization Revival (Jan 31 – Feb 1, 2026)

**4 commits** that brought the app back to life.

#### Commit 1: `097de0c` — Migrate to modern React Native dependencies

The largest and most impactful change. Touched all 6 source files + package config.

| Area | Before | After |
|------|--------|-------|
| Expo SDK | 44 | 54 |
| React | 17.0.1 | 19.1.0 |
| React Native | 0.64.3 | 0.81.5 |
| Font loading | `expo-app-loading` | `ActivityIndicator` |
| Oyster facts API | Heroku endpoint (dead) | Local fallback array |
| Card swiper | `react-native-deck-swiper` | Custom `PanResponder` implementation |
| Masked view | `@react-native-community/masked-view` | `@react-native-masked-view/masked-view` |
| Lock file | `yarn.lock` | `package-lock.json` |

**Removed packages:** `react-native-deck-swiper`, `react-native-swiper`, `react-native-material-bottom-navigation`, `react-native-view-overflow`, `react-native-paper`.

**Notable:** Original code was left as comments in all modified files for reference.

#### Commit 2: `654e6da` — Update .gitignore

Added IDE folders (`.idea/`, `.vscode/`) and native build directories (`ios/`, `android/`) to `.gitignore`.

#### Commit 3: `5e3cb96` — Fix oyster fact card not showing after initial boot

Added `useFocusEffect` hook to reset card visibility and position when SearchScreen regains focus. Also configured iOS bundle identifier and `expo-font` plugin in `app.json`.

#### Commit 4: `53d811e` — Fix background image positioning and overlay color

Updated ProfileScreen layout to use centered background image with absolutely positioned FlatList overlay. Unified the color scheme by switching the fact card background from a dark overlay to `cadetblue`.

---

## What Went Well

- **Clean screen architecture**: Five well-separated screens with clear responsibilities, all wired through React Navigation stack.
- **Rich local dataset**: 80+ oyster entries in `new_data.json` with region, species, flavor profiles — no external dependency for core data.
- **Successful major version migration**: Jumping 10 Expo SDK versions, 2 major React versions, and 17 RN minor versions in a single commit without breaking the app is non-trivial.
- **Replacing the dead API gracefully**: The Heroku shutdown was handled by embedding facts locally, keeping the feature alive.
- **Custom PanResponder replacement**: Rather than hunting for another third-party swiper, a custom gesture implementation was built, reducing dependency count.

## What Could Be Improved

- **Commented-out original code**: The migration left old code as comments throughout all files. This adds noise and should be cleaned up — git history preserves the originals.
- **No tests**: Zero test files exist. The migration was done without a safety net.
- **No CI/CD**: No GitHub Actions, no automated builds. Changes are verified manually.
- **README churn**: 30+ commits just for README edits suggests a workflow issue — either use a preview tool or batch edits locally.
- **Dead dependency remnants**: `react-native-deck-swiper-renewed` is listed in `package.json` but the actual implementation uses a custom `PanResponder` — this unused dependency should be removed.
- **Heroku dependency was a single point of failure**: Core feature data should not have relied on a free-tier external service. The local fallback should have been the original design.
- **No TypeScript**: The entire codebase is plain JavaScript with no type safety.
- **Navigation v6**: React Navigation 6 is now outdated (v7 is current). Another migration will eventually be needed.

## Risk Areas Going Forward

1. **Expo SDK 54 will age**: The same dormancy pattern could repeat. Consider setting up Dependabot or Renovate.
2. **Commented-out code debt**: Every screen file contains blocks of dead code that will confuse future contributors.
3. **No error boundaries**: If the data file is corrupted or a screen crashes, there's no graceful fallback.
4. **Font loading race conditions**: The switch from `AppLoading` to `ActivityIndicator` works but is a simpler mechanism — worth verifying on slow devices.

---

## Summary

| Metric | Value |
|--------|-------|
| Total commits | ~70 |
| Active development period | ~2 months (Jan–Mar 2022) |
| Dormancy period | ~3.8 years |
| Modernization effort | 4 commits, Jan 31 – Feb 1, 2026 |
| Files changed (lifetime) | 30 |
| Lines added (lifetime) | ~13,048 |
| Lines removed (lifetime) | ~5,471 |
| Screens | 5 |
| Oyster data entries | 80+ |
| Test coverage | 0% |
