const imageImports = {
  ...import.meta.glob('../../public/images/**/*.{png,jpg,jpeg,webp,JPG,JPEG,PNG,WEBP}', { as: 'url', eager: true }),
  ...import.meta.glob('../../src/images/**/*.{png,jpg,jpeg,webp,JPG,JPEG,PNG,WEBP}', { as: 'url', eager: true }),
};

function normalizeAlt(name) {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\.[^/.]+$/, '')
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim();
}

const galleries = Object.entries(imageImports).reduce((groups, [path, url]) => {
  const normalizedPath = path.replace(/\\/g, '/');
  const match = normalizedPath.match(/(?:^|\/)images\/(.+?)\/([^/]+)$/);

  if (!match) {
    return groups;
  }

  const folder = match[1];
  const fileName = match[2];
  groups[folder] = groups[folder] || [];
  groups[folder].push({ url, name: fileName });
  return groups;
}, {});

Object.keys(galleries).forEach((folder) => {
  galleries[folder].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, {
      numeric: true,
      sensitivity: 'base',
    }),
  );
});

export function getGalleryImages(folder) {
  return (galleries[folder] || []).map((item) => ({
    src: item.url,
    alt: `${normalizeAlt(item.name)} · Rangel Shot`,
  }));
}
