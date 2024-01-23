

export function clickOutside(callback, ref) {
   let handler = (e) => {
      if (!ref.current.contains(e.target)) {
        callback(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return ()=> {
      document.removeEventListener("mousedown", handler);
    }
}