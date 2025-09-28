
import React from 'react'
import hospitalIcon from "../assets/hospitalIcon.png"
import hotelIcon from "../assets/hotelIcon.png"
import roomIcon from "../assets/roomIcon.png"
import ambulanceIcon from "../assets/ambulanceIcon.png"
import emergencyIcon from "../assets/emergencyIcon.png"
import doctorIcon from "../assets/doctorIcon.png"
import homeIcon from "../assets/homeIcon.png"
import admissionIcon from "../assets/admissionIcon.png"
import labIcon from "../assets/labIcon.png"
import patientIcon from "../assets/patientIcon.png"
import Allopathy from "../assets/Allopathy.png"
import Homeopathy from "../assets/Homeopathy.png"
import Ayurvedic from "../assets/Ayurvedic.png"
import Card from './Card'
import PillButton from './PillButton'
import PatientSwipeForm from './PatientSwipeForm'
import PatientFormOffline from './PatientFormOffline'
import PatientFormOnline from './PatientFormOnline'
import HomeLabTestForm from './HomeLabTestForm'
import HospitalLabTestForm from './HospitalLabTestForm'

export default function HealthcareDashboard() {

  const categories = [
    { id: 1, title1: 'Find', title2: 'Hospitals', icon: hospitalIcon },
    { id: 2, title1: 'Find', title2: 'Hotels', icon: hotelIcon },
    { id: 3, title1: 'Find', title2: 'Rooms', icon: roomIcon },
    { id: 4, title1: 'Book', title2: 'Ambulance', icon: ambulanceIcon },
    { id: 5, title1: 'Emergency', title2: 'Services', icon: emergencyIcon },
    { id: 6, title1: 'Doctor', title2: 'Consultation', icon: doctorIcon },
    { id: 7, title1: 'Home Care', title2: 'Services', icon: homeIcon },
    { id: 8, title1: 'Hospital', title2: 'Admission', icon: admissionIcon },
    { id: 9, title1: 'Lab', title2: 'Test', icon: labIcon },
    { id: 10, title1: 'Add Patient', title2: 'Details', icon: patientIcon },
  ]


  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="font-semibold text-4xl md:text-5xl letter-spacing:-5% text-[#293653]">Everything You Need</h1>
        {/* <h2 className="font-light text-2xl md:text-3xl text-[#293653] mt-1">All In One Place</h2> */}
        <h2 className="font-semibold text-4xl md:text-5xl letter-spacing:-5% text-[#293653]">All In One Place</h2>
        <HospitalLabTestForm/>
        <HomeLabTestForm/>
        <PatientFormOffline/>
        <PatientFormOnline/>
        
        <PatientSwipeForm/>
        <div className="mt-8 flex items-center justify-center gap-4">
          <PillButton label="Allopathy" img = {Allopathy}/>
          <PillButton label="Homeopathy" img = {Homeopathy}/>
          <PillButton label="Ayurvedic" img = {Ayurvedic}/>
        </div>

        <div className="mt-12 overflow-x-auto no-scrollbar">
  <div className="flex gap-6 px-1">
    {categories.map((c) => (
      <div key={c.id} className="flex-shrink-0 min-w-[260px]">
        <Card title1={c.title1} title2={c.title2} img={c.icon} />
      </div>
    ))}
  </div>
</div>

<style>{`
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`}</style>
      </div>
    </div>
  )
}


