[build]
  command = "npm run build-without-ts"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"
  NEXT_IGNORE_ESLINT = "1"
  NODE_OPTIONS = "--max-old-space-size=4096"

[[plugins]]
  package = "@netlify/plugin-nextjs"
