function replaceText(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    // Replace "San Francisco Mayor Lurie" with "Mayor Jeans of Jeans Town"
    node.textContent = node.textContent.replace(
      /\bSan\s+Francisco\s+Mayor\s+Lurie\b/g,
      "Mayor Jeans of Jeans Town"
    );

    // Replace "Mayor Lurie of San Francisco" with "Mayor Jeans of Jeans Town"
    node.textContent = node.textContent.replace(
      /\bMayor\s+Lurie\s+of\s+San\s+Francisco\b/g,
      "Mayor Jeans of Jeans Town"
    );

    // Replace "Mayor Daniel Lurie" with "Mayor Jeans"
    node.textContent = node.textContent.replace(
      /\bMayor\s+Daniel\s+Lurie(’s|s’)?\b/gi,
      (match, suffix) => {
        if (suffix === "’s" || suffix === "s’") return `Mayor Jeans’`;
        return `Mayor Jeans`;
      }
    );

    // Replace "Daniel Lurie" with "Mayor Jeans"
    node.textContent = node.textContent.replace(
      /\bDaniel\s+Lurie(’s|s’)?\b/g,
      (match, suffix) => {
        if (suffix === "’s" || suffix === "s’") return `Mayor Jeans’`;
        return `Mayor Jeans`;
      }
    );

    // Replace "Lurie" preceded by "Mayor"
    node.textContent = node.textContent.replace(
      /\bMayor\s+Lurie(’s|s’)?\b/g,
      (match, suffix) => {
        if (suffix === "’s" || suffix === "s’") return `Mayor Jeans’`;
        return `Mayor Jeans`;
      }
    );

    // Replace standalone "Lurie" with "Mayor Jeans"
    node.textContent = node.textContent.replace(
      /\bLurie(’s|s’)?\b/gi,
      (match, suffix) => {
        if (suffix === "’s" || suffix === "s’") return `Mayor Jeans’`;
        return `Mayor Jeans`;
      }
    );
  } else {
    0;
    node.childNodes.forEach(replaceText);
  }
}

document.body.childNodes.forEach(replaceText);

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "childList") {
      mutation.addedNodes.forEach(replaceText);
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
