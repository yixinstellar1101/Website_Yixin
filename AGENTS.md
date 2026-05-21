# Workspace Rules

The workspace root is this repository only.

Allowed:
- Read and modify files only inside this repository.
- Create assets, exports, and generated files only inside this repository.
- Use git only inside this repository.

Forbidden:
- Do not access parent directories.
- Do not scan Desktop, Documents, Downloads, or Home directory.
- Do not modify files outside this repository.
- Do not change global shell configs or system settings.
- Do not run destructive commands outside this repo.
- Do not delete files unless explicitly instructed.

Safety:
- Ask for confirmation before any destructive operation:
  - rm
  - git reset --hard
  - force overwrite
  - deleting folders
  - changing package managers
  - rewriting configs

Project Notes:
- This is a personal portfolio website.
- Preserve the existing visual style unless instructed otherwise.
- Keep important project content as HTML text, not one giant image.
- Project assets should live under public/images/projects/.
- Figma exports, PDF exports, and slide images may be used as assets.
- Prefer reusable React components and responsive layouts.

Frontend Rules:
- Use React + Tailwind where possible.
- Avoid unnecessary dependencies.
- Prefer reusable components over duplicated layouts.
- Keep code readable and modular.

Portfolio Rules:
- Preserve SEO-friendly HTML text.
- Optimize image loading where reasonable.
- Keep project detail pages visually polished but lightweight.
