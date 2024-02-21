import React from "react";
interface BASICS {
  details: {
      responsive: boolean;
      mobile:boolean,
      tablet:boolean,
      desktop:boolean,      
  };
}
export default function Features({details:details}:BASICS) {
  return <div>
    <label htmlFor="responsive">responsive</label>
    <input readOnly id="responsive" type="checkbox"  title="responsive" checked={ details.desktop &&details.mobile && details.tablet?true:false}  />
    <label  htmlFor="mobile">mobile</label>
    <input readOnly  id="mobile" type="checkbox"   title="mobile" checked={details.mobile?true:false}  />
    <label   htmlFor="tablet">tablet</label>
    <input readOnly  id="tablet" type="checkbox"  title="tablet" checked={details.tablet?true:false}  />
    <label htmlFor="desktop">desktop</label>
    <input readOnly  id="desktop" type="checkbox"  title="desktop"  checked={details.desktop?true:false}  />
  </div>;
}
