import React,{ useState } from "react";
import { VendorContractTable } from '@components/organisms/VendorContractsTable/VendorContractTable'


export default function TableTabs () {

  const [tab, setTab] = useState(1);
  // const [content, setContent] = useState(1);

  const action = (index) => {
    setTab(index)
    console.log(index);
  }

  return (
    <>

 <div className="tabs">
  <div onClick={()=>action(1)} className={`${tab === 1 ? 'tab active_tab' : 'tab' }`}>Ongoing Projects</div>
  <div onClick={()=>action(2)} className={`${tab === 2 ? 'tab active_tab' : 'tab' }`}>Finished Projects</div>
  <div onClick={()=>action(3)} className={`${tab === 3 ? 'tab active_tab' : 'tab' }`}>All Projects</div>
 </div>

 <div className="contents">
  <div className={`${tab === 1 ? 'content active_content' : 'content' }`}><VendorContractTable /></div>
  <div className={`${tab === 2 ? 'content active_content' : 'content' }`}><VendorContractTable /></div>
  <div className={`${tab === 3 ? 'content active_content' : 'content' }`}><VendorContractTable /></div>
 </div>

    </>
  );
}

