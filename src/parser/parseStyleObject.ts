//@ts-nocheck

export function parseStyleObject(style, oStyle) {
  let attr, value;
  for (const prop in style) {
    if (style[prop] === undefined) {
      continue;
    }

    attr = prop.toLowerCase();
    value = style[prop];

    oStyle[attr] = value;
  }
}
