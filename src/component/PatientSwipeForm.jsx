import React, { useRef, useState } from "react";

// PatientSwipeForm.jsx
// A mobile-first, swipeable multi-step patient information form using Tailwind CSS.
// - Uses CSS scroll-snap so users can swipe between steps on touch devices
// - Also provides Next / Prev controls, progress dots and per-step validation
// - Fits the visual theme you shared (rounded white cards, soft shadows, dark-blue accents)

export default function PatientSwipeForm() {
  const steps = [
    { id: 0, title: "Patient Info" },
    { id: 1, title: "Contact" },
    { id: 2, title: "Medical" },
    { id: 3, title: "Insurance" },
    { id: 4, title: "Review" },
  ];

  const [current, setCurrent] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef(null);
  const stepRefs = useRef([]);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    mobile: "",
    email: "",
    address: "",
    symptoms: "",
    history: "",
    allergies: "",
    insuranceProvider: "",
    insuranceId: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
  });

  function scrollToStep(index) {
    const el = stepRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", inline: "center" });
      setCurrent(index);
    }
  }

  function handleNext() {
    if (!validateStep(current)) return;
    if (current < steps.length - 1) scrollToStep(current + 1);
  }

  function handlePrev() {
    if (current > 0) scrollToStep(current - 1);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function validateStep(index) {
    // Basic required-field validation per step
    if (index === 0) {
      if (!form.firstName.trim() || !form.lastName.trim()) {
        alert("Please enter patient's first and last name.");
        return false;
      }
      if (!form.age || Number(form.age) <= 0) {
        alert("Please enter a valid age.");
        return false;
      }
    }

    if (index === 1) {
      if (!form.mobile.trim()) {
        alert("Please enter a mobile number.");
        return false;
      }
      // rudimentary email check
      if (form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
        alert("Please enter a valid email address.");
        return false;
      }
    }

    if (index === 2) {
      // no strict requirement here; allow empty medical details
      return true;
    }

    if (index === 3) {
      // insurance optional — no hard validation
      return true;
    }

    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    // validate final step before submit
    if (!validateStep(0) || !validateStep(1)) return;

    // Simulate submit
    console.log("Submitting patient data:", form);
    setSubmitted(true);
  }

  // small helper to programmatically set refs when mapping
  function setStepRef(el, i) {
    stepRefs.current[i] = el;
  }

  if (submitted) {
    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-2xl shadow-md text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-semibold text-gray-800">Patient Registered</h3>
        <p className="mt-2 text-gray-500">Patient information saved successfully.</p>
        <pre className="mt-4 text-xs text-left bg-gray-50 p-3 rounded">{JSON.stringify(form, null, 2)}</pre>
      </div>
    );
  }

  return (
    <form className="max-w-4xl mx-auto mt-8 px-4" onSubmit={handleSubmit}>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold text-[#293653]">Patient Registration</h2>
        <p className="text-sm text-gray-500 mt-1">Swipe left/right or use controls to navigate</p>
      </div>

      {/* horizontal swipe container */}
      <div
        ref={containerRef}
        className="flex gap-6 px-2 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth touch-pan-x"
      >
        {/* Step cards */}
        <section
          ref={(el) => setStepRef(el, 0)}
          className="snap-start flex-shrink-0 w-[280px] md:w-[380px] lg:w-[420px] bg-white rounded-2xl shadow p-6"
        >
          <h3 className="text-lg font-medium text-gray-800 mb-4">Patient Info</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600">First name</label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-200 rounded-md p-2 text-sm"
                placeholder="John"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600">Last name</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-200 rounded-md p-2 text-sm"
                placeholder="Doe"
              />
            </div>

            <div className="flex gap-2">
              <div className="w-1/2">
                <label className="block text-sm text-gray-600">Age</label>
                <input
                  name="age"
                  type="number"
                  value={form.age}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md p-2 text-sm"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm text-gray-600">Gender</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md p-2 text-sm"
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={(el) => setStepRef(el, 1)}
          className="snap-start flex-shrink-0 w-[280px] md:w-[380px] lg:w-[420px] bg-white rounded-2xl shadow p-6"
        >
          <h3 className="text-lg font-medium text-gray-800 mb-4">Contact</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600">Mobile</label>
              <input
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-200 rounded-md p-2 text-sm"
                placeholder="+91 98xxxxxxx"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Email (optional)</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-200 rounded-md p-2 text-sm"
                placeholder="name@example.com"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Address</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-200 rounded-md p-2 text-sm"
                rows={3}
                placeholder="House / Street / City"
              />
            </div>
          </div>
        </section>

        <section
          ref={(el) => setStepRef(el, 2)}
          className="snap-start flex-shrink-0 w-[280px] md:w-[380px] lg:w-[420px] bg-white rounded-2xl shadow p-6"
        >
          <h3 className="text-lg font-medium text-gray-800 mb-4">Medical</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600">Symptoms</label>
              <textarea
                name="symptoms"
                value={form.symptoms}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-200 rounded-md p-2 text-sm"
                rows={3}
                placeholder="Brief description"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Medical history</label>
              <textarea
                name="history"
                value={form.history}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-200 rounded-md p-2 text-sm"
                rows={3}
                placeholder="Surgeries, chronic conditions, etc."
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Allergies</label>
              <input
                name="allergies"
                value={form.allergies}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-200 rounded-md p-2 text-sm"
                placeholder="e.g. Penicillin"
              />
            </div>
          </div>
        </section>

        <section
          ref={(el) => setStepRef(el, 3)}
          className="snap-start flex-shrink-0 w-[280px] md:w-[380px] lg:w-[420px] bg-white rounded-2xl shadow p-6"
        >
          <h3 className="text-lg font-medium text-gray-800 mb-4">Insurance & Emergency</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600">Insurance provider (optional)</label>
              <input
                name="insuranceProvider"
                value={form.insuranceProvider}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-200 rounded-md p-2 text-sm"
                placeholder="Provider name"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Insurance ID (optional)</label>
              <input
                name="insuranceId"
                value={form.insuranceId}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-200 rounded-md p-2 text-sm"
                placeholder="Policy / ID"
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <label className="block text-sm text-gray-600">Emergency contact</label>
              <input
                name="emergencyContactName"
                value={form.emergencyContactName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-200 rounded-md p-2 text-sm"
                placeholder="Name"
              />
              <input
                name="emergencyContactPhone"
                value={form.emergencyContactPhone}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-200 rounded-md p-2 text-sm"
                placeholder="Phone"
              />
            </div>
          </div>
        </section>

        <section
          ref={(el) => setStepRef(el, 4)}
          className="snap-start flex-shrink-0 w-[280px] md:w-[380px] lg:w-[420px] bg-white rounded-2xl shadow p-6"
        >
          <h3 className="text-lg font-medium text-gray-800 mb-4">Review & Submit</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <div>
              <strong>Name: </strong>
              {form.firstName} {form.lastName}
            </div>
            <div>
              <strong>Age & Gender: </strong>
              {form.age} / {form.gender}
            </div>
            <div>
              <strong>Mobile: </strong>
              {form.mobile}
            </div>
            <div>
              <strong>Email: </strong>
              {form.email || "—"}
            </div>
            <div>
              <strong>Address: </strong>
              {form.address || "—"}
            </div>
            <div>
              <strong>Symptoms: </strong>
              {form.symptoms || "—"}
            </div>
            <div>
              <strong>History: </strong>
              {form.history || "—"}
            </div>
            <div>
              <strong>Allergies: </strong>
              {form.allergies || "—"}
            </div>
            <div>
              <strong>Insurance: </strong>
              {form.insuranceProvider || "—"} ({form.insuranceId || "—"})
            </div>
            <div>
              <strong>Emergency: </strong>
              {form.emergencyContactName || "—"} — {form.emergencyContactPhone || "—"}
            </div>
          </div>
        </section>
      </div>

      {/* controls */}
      <div className="mt-6 flex items-center justify-between max-w-[440px] mx-auto">
        <button
          type="button"
          onClick={handlePrev}
          disabled={current === 0}
          className={`px-3 py-2 rounded-full border ${
            current === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-50"
          }`}
        >
          Prev
        </button>

        <div className="flex items-center gap-2">
          {steps.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => scrollToStep(i)}
              className={`w-2 h-2 rounded-full ${i === current ? "bg-[#293653]" : "bg-gray-300"}`}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>

        {current < steps.length - 1 ? (
          <button
            type="button"
            onClick={handleNext}
            className="px-3 py-2 rounded-full bg-[#293653] text-white"
          >
            Next
          </button>
        ) : (
          <button type="submit" className="px-4 py-2 rounded-full bg-[#293653] text-white">
            Submit
          </button>
        )}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </form>
  );
}
