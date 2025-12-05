<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1EZipoHrmmGgADcwDXBOBEKaH4fJb-4q8

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Demo sample image

- Put your image in `public/demo-images/` with the exact name `Gemini_Generated_Image_njz6xynjz6xynjz6.png` to replace the demo feed.
- The UI first tries that local file and will fall back to the hosted sample if it’s missing: `https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1200&q=80`.
- Want a different filename? Drop it in `public/demo-images/` and update `LOCAL_PLACEHOLDER` in `components/DemoSection.tsx`.
