import React, { Ref, RefObject, useState } from "react";

const useOnClickScroll = (ref:RefObject<any>) => {
  const [canScrollStart, setCanScrollStart] = useState(false);
  const [canScrollEnd, setCanScrollEnd] = useState(true);
  const calculateScrollValue = () => {
    const portions = Math.ceil(
      ref.current?.scrollWidth / ref.current?.clientWidth
    );
    return Math.ceil(ref.current?.scrollWidth / portions);
  };
  const scrollToEnd = () => {
    const scrollValue = ref.current.scrollLeft + calculateScrollValue();
    ref.current.scrollLeft = scrollValue;

    isScrollHandler(Math.round(scrollValue));
  };
  const scrollToStart = () => {
    const scrollValue = ref.current.scrollLeft - calculateScrollValue();
    ref.current.scrollLeft = scrollValue;

    isScrollHandler(scrollValue);
  };
  const isScrollHandler = (scrollValue) => {
    let maxScrollWidth = ref.current?.scrollWidth - ref.current?.clientWidth;
    scrollValue > 0 ? setCanScrollStart(true) : setCanScrollStart(false);
    maxScrollWidth > scrollValue
      ? setCanScrollEnd(true)
      : setCanScrollEnd(false);
  };

  return {
    scrollToStart,
    scrollToEnd,
    canScroll: { start: canScrollStart, end: canScrollEnd },
  };
};

export default useOnClickScroll;
