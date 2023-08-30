import { useEffect, useMemo, useState } from "react";

export function makeUpLabel(key) {
  let newTitle = key.charAt(0).toUpperCase() + key.slice(1);
  console.log(
    "🚀 ~ file: index.js:18 ~ getCategoryTitle ~ newTitle:",
    newTitle
  );

  return newTitle.replace(/-(.)/g, function (match, group) {
    return " " + group.toUpperCase();
  });
}

export default function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      ),
    [ref]
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
}
