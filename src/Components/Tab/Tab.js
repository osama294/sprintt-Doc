import React, { useEffect, useState } from 'react'
import TabButton from './TabButton'
import c1 from '../../images/c1.png'
import c2 from '../../images/c2.png'
import c3 from '../../images/c3.png'
import g1 from '../../images/g1.png'
import g2 from '../../images/g2.png'
import g3 from '../../images/g3.png'
import './Tab.css'

function Tab({ setTab, tab, actives, sendDataToParent }) {
  const [active, setActive] = useState("details")
  useEffect(() => {
    setTab(tab)
  }, [tab])

  return (
    <>
      <div className='tab-row'>
        {/* <div className='line'> </div> */}
        {tab == "details" ? <TabButton name="Item Details"color="#D3BC8C" icon={c1} setActive={setTab} state="details" /> : <TabButton name="Item Details" color="black" icon={g1} setActive={setTab} onClick={()=>{setTab("details")}} state="details" />}
        {tab == "customer" ? <TabButton name="Customer"color="#D3BC8C" icon={c2} setActive={setTab} state="customer" /> : <TabButton name="Customer"color="black" icon={g2} setActive={setTab} state="customer" />}
        {tab == "installer" ? <TabButton name="Installer Details" color="#D3BC8C"icon={c3} setActive={setTab} state="installer" /> : <TabButton color="black" name="Installer Details" icon={g3} state="installer" setActive={setTab} />}
      </div>
    </>
  )
}

export default Tab