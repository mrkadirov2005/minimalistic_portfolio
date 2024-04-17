import React from "react";

interface BASICS {
  details: {
    responsive: boolean;
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
}

export default function Features({ details }: BASICS) {
  return (
    <div>
      <label htmlFor="responsive">responsive</label>
      <input
        readOnly
        id="responsive"
        type="checkbox"
        checked={details.desktop && details.mobile && details.tablet}
      />
      <label htmlFor="mobile">mobile</label>
      <input
        readOnly
        id="mobile"
        type="checkbox"
        checked={details.mobile}
      />
      <label htmlFor="tablet">tablet</label>
      <input
        readOnly
        id="tablet"
        type="checkbox"
        checked={details.tablet}
      />
      <label htmlFor="desktop">desktop</label>
      <input
        readOnly
        id="desktop"
        type="checkbox"
        checked={details.desktop}
      />
    </div>
  );
}
