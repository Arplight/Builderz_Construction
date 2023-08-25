export function getElementsByHandler(root, handler) {
  let results = [];
  for (var i = 0; i < root.childNodes.length; i++) {
    const child = root.childNodes[i];
    try {
      if (handler(child)) {
        results.push(child);
      }
    }
    catch (err) {}
    results = results.concat(getElementsByHandler(child, handler));
  }
  return results;
}


export function parseAttributes(attrsRaw) {
  const attributes = {};

  while (attrsRaw.match(/([^\s]*)="(.*)"/)) {
    const match = attrsRaw.match(/([^\s]*)="(.*)"/);

    const [ attrName, attrValue ] = match.slice(1);

    attributes[attrName] = attrValue;

    attrsRaw = attrsRaw.substring(match.index + match[0].length);


  }

  return attributes;
}
