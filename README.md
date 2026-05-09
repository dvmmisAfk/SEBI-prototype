# SEBI Investor Education Hub

An interactive, single-page financial learning experience built to help users explore the Indian securities market, SEBI regulations, candlestick patterns, risk profiling, and virtual trading in one animated dashboard.

## Overview

This project combines educational content and hands-on practice in a polished, modern interface. It is designed as a prototype for investor awareness and market literacy, with a strong focus on engaging visuals, guided learning, and practical experimentation.

## Key Features

- Interactive dashboard with learning progress, portfolio insights, and charts.
- Structured learning modules covering market basics, risk, portfolio building, candlestick patterns, SEBI law, and stock market concepts.
- SEBI regulation summaries and market impact explanations.
- Algorithmic trading and candlestick pattern learning section.
- Risk assessment tool that generates a profile and investment recommendations.
- Virtual trading platform with stock search, trade execution flow, and holdings tracking.
- Login, sign-up, profile modal, and progress tracking UI.
- Light/dark theme switching and animated background effects.
- Responsive, visually rich interface with hover effects and motion-driven sections.

## Tech Stack

- HTML5, CSS3, JavaScript
- React 18 via CDN
- Chart.js for visualizations
- GSAP for animation and scroll effects
- Font Awesome for icons
- Google Fonts for typography

## Project Structure

- [index.html](index.html) — Main application shell, all UI sections, styles, and app logic.
- [Aurora.js](Aurora.js) — Canvas 2D particle background component (React).
- [particles.css](particles.css) — Particle container layout styles.
- [GlareHover.css](GlareHover.css) — Hover-glare interaction styles.

## How To Run

This is a static front-end project with no build step.

1. Open the folder in VS Code or any editor.
2. Launch [index.html](index.html) in a browser, or use a local server extension such as Live Server.
3. Make sure your browser can load the external CDN assets used by the page.

## What You Can Explore

- Learn how SEBI protects investors and regulates markets.
- Browse interactive lessons and quizzes.
- Check your risk profile before taking investment decisions.
- Simulate trades and monitor a sample portfolio.
- Switch between themes and explore the animated interface.

## Customization Ideas

- Update lesson content inside [index.html](index.html).
- Tune particle behavior in [Aurora.js](Aurora.js).
- Adjust visual styling in [particles.css](particles.css) and [GlareHover.css](GlareHover.css).
- Replace the demo data, charts, and virtual trading values with your own data model to turn this into a production-ready product.

## Notes

- The app depends on external CDNs for React, Chart.js, GSAP, Font Awesome, and Google Fonts.
- Some features are demo-oriented and may need backend integration for real authentication, persistent storage, or live market data.

## License

No license file is currently included. Add one before publishing or sharing the project publicly.
