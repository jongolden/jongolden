function getIcon(icon) {
  if (icon.includes('-')) {
    return icon.split('-');
  }

  return icon;
}

export default getIcon;
