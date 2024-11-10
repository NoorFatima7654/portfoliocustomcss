import React from 'react'

export default function page() {
  return (
    <div>
    
   
    <div style={{ backgroundColor: "#2d2d2e" }}>
  <header
    style={{
      backgroundColor: "#6b7280",
      color: "white",
      fontFamily: "Arial, sans-serif",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "20px",
    }}
  >
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <a
        href="#"
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
          textDecoration: "none",
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS3uvSuDAm4janztLTjGf43Rs2tyBZ0ow46Q&s"
          alt="Noor Fatima Logo"
          style={{ width: "48px", borderRadius: "50%" }}
        />
        <span style={{ marginLeft: "10px", fontSize: "20px", fontWeight: "bold" }}>
          Noor Fatima
        </span>
      </a>
      <nav
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <a href="http://localhost:3000" style={{ color: "white", fontWeight: "bold", textDecoration: "none" }}>
          Home
        </a>
        <a href="http://localhost:3000/about" style={{ color: "white", fontWeight: "bold", textDecoration: "none" }}>
          About Us
        </a>
        <a href="http://localhost:3000/contact" style={{ color: "white", fontWeight: "bold", textDecoration: "none" }}>
          Contact Us
        </a>
        <a href="http://localhost:3000/privacypolicy" style={{ color: "white", fontWeight: "bold", textDecoration: "none" }}>
          Privacy Policy
        </a>
        <a href="http://localhost:3000/projects" style={{ color: "white", fontWeight: "bold", textDecoration: "none" }}>
          Projects
        </a>
      </nav>
      <button
        style={{
          backgroundColor: "#6366f1",
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  </header>
</div>
{/*hero section */}
<section style={{ color: "#d1d5db", fontFamily: "Arial, sans-serif", padding: "6rem 0", backgroundColor: "#1f2937" }}>
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 1.25rem",
    }}
  >
    {/* Image on the Left */}
    <div
      style={{
        flex: "1",
        display: "flex",
        justifyContent: "center",
        paddingRight: "2rem",
      }}
    >
      <img
        src="/images/noor.jpeg"
        alt="hero"
        style={{
          borderRadius: "50%",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          width: "20rem",
          height: "20rem",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </div>

    {/* Content on the Right */}
    <div
      style={{
        flex: "1",
        color: "white",
        paddingLeft: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "left",
      }}
    >
      <h1
        style={{
          color: "#f59e0b",
          fontSize: "2rem",
          marginBottom: "1rem",
          fontWeight: "600",
          fontFamily: "serif",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "0.5rem",
          borderRadius: "0.5rem",
        }}
      >
        Expertise in HTML, CSS, JavaScript, TypeScript
      </h1>

      <h2
        style={{
          fontWeight: "800",
          backgroundColor: "#f59e0b",
          color: "white",
          padding: "0.5rem",
          marginBottom: "1rem",
          borderRadius: "0.5rem",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
        }}
      >
        Web Developer, GIAIC Student Quarter 2
      </h2>

      <p
        style={{
          marginBottom: "2rem",
          fontWeight: "700",
          backgroundColor: "rgba(245, 158, 11, 0.8)",
          padding: "1rem",
          borderRadius: "0.5rem",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
        }}
      >
        My name is Noor Fatima, and my portfolio is a representation of all that I’ve learned and accomplished as an Information Technology student.
      </p>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <button
          style={{
            backgroundColor: "#1d4ed8",
            color: "white",
            border: "none",
            padding: "0.5rem 1.5rem",
            borderRadius: "0.25rem",
            fontSize: "1rem",
            cursor: "pointer",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
          }}
        >
          Subscribe Now
        </button>
      </div>
    </div>
  </div>
</section>
{/*Blog section */}

<section
  style={{
    background: 'linear-gradient(to right, #2d2d2d, #2d2d2d)',
    color: '#f1f1f1',
    padding: '6rem 0',
  }}
>
  <div
    style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.25rem',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1.5rem',
    }}
  >
    {/* Card 1 */}
    <div
      style={{
        background: '#1a1a1a',
        border: '1px solid #444',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        width: 'calc(33.333% - 1rem)',
      }}
    >
      <img
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGhRHK5LL1nx0ZojiHTgAxiNPn74P7GLciA&s"
        alt="Currency Converter"
      />
      <div style={{ padding: '1.5rem' }}>
        <h1 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
          Currency Converter
        </h1>
        <p style={{ marginBottom: '1rem', color: '#d1d1d1' }}>
          This is a CLI-based currency converter.
        </p>
        <a
          href="#"
          style={{
            color: '#4f83ff',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          Learn More
        </a>
      </div>
    </div>

    {/* card 2 */}
    <div
      style={{
        background: '#1a1a1a',
        border: '1px solid #444',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        width: 'calc(33.333% - 1rem)',
      }}
    >
      <img
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGhRHK5LL1nx0ZojiHTgAxiNPn74P7GLciA&s"
        alt="Currency Converter"
      />
      <div style={{ padding: '1.5rem' }}>
        <h1 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
          Currency Converter
        </h1>
        <p style={{ marginBottom: '1rem', color: '#d1d1d1' }}>
          This is a CLI-based currency converter.
        </p>
        <a
          href="#"
          style={{
            color: '#4f83ff',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          Learn More
        </a>
      </div>
      </div>
       {/* card 3*/}
    <div
      style={{
        background: '#1a1a1a',
        border: '1px solid #444',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        width: 'calc(33.333% - 1rem)',
      }}
    >
      <img
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGhRHK5LL1nx0ZojiHTgAxiNPn74P7GLciA&s"
        alt="Currency Converter"
      />
      <div style={{ padding: '1.5rem' }}>
        <h1 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
          Currency Converter
        </h1>
        <p style={{ marginBottom: '1rem', color: '#d1d1d1' }}>
          This is a CLI-based currency converter.
        </p>
        <a
          href="#"
          style={{
            color: '#4f83ff',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          Learn More
        </a>
 </div>
 </div>

    {/* Repeat the same structure for Card 2 and Card 3 */}
 
    </div>
 
</section>
{/* gallery */}

<section style={{ backgroundColor: '#4B5563', padding: '20px', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
  {/* Picture 1 */}
  <div style={{ flex: '1 1 calc(33.33% - 16px)', boxSizing: 'border-box' }}>
    <a href="https://example-link-1.com">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GqG8R5nBt41wv4cmB8ArhJEJeaaeLp6fkg&s" alt="Picture 1" style={{ width: '100%', borderRadius: '8px' }} />
    </a>
  </div>

  {/* Picture 2 */}
  <div style={{ flex: '1 1 calc(33.33% - 16px)', boxSizing: 'border-box' }}>
    <a href="https://example-link-2.com">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6PPjOR77DSfpwaaO_Ibe-rnCc0uO5l1ZPqw&s" alt="Picture 2" style={{ width: '100%', borderRadius: '8px' }} />
    </a>
  </div>

  {/* Picture 3 */}
  <div style={{ flex: '1 1 calc(33.33% - 16px)', boxSizing: 'border-box' }}>
    <a href="https://example-link-3.com">
      <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/06/getty_currency-exchange_062321.jpeg.jpg" alt="Picture 3" style={{ width: '100%', borderRadius: '8px' }} />
    </a>
  </div>

  {/* Picture 4 */}
  <div style={{ flex: '1 1 calc(33.33% - 16px)', boxSizing: 'border-box' }}>
    <a href="https://example-link-4.com">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7RSMkaeFlWmJ5GGMFg7HmG0zF0XUwDDS_Hg&s" alt="Picture 4" style={{ width: '100%', borderRadius: '8px' }} />
    </a>
  </div>

  {/* Picture 5 */}
  <div style={{ flex: '1 1 calc(33.33% - 16px)', boxSizing: 'border-box' }}>
    <a href="https://example-link-5.com">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Gw8VU6pnXuLbxBoCuP4xSnG7jkw_zIhAuA&s" alt="Picture 5" style={{ width: '100%', borderRadius: '8px' }} />
    </a>
  </div>

  {/* Picture 6 */}
  <div style={{ flex: '1 1 calc(33.33% - 16px)', boxSizing: 'border-box' }}>
    <a href="https://example-link-6.com">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7iog6zus7Q69y2QdUS878GMf2IwQ6rhkDJw&s" alt="Picture 6" style={{ width: '100%', borderRadius: '8px' }} />
    </a>
  </div>
</section>
{/* our Team */}
<section style={{ backgroundColor: '#4B5563', color: '#4B5563', padding: '48px 20px' }}>
  <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: '500', color: '#D97706', marginBottom: '16px' }}>Our Team</h1>
      <p style={{ maxWidth: '66%', margin: '0 auto', fontSize: '16px', fontWeight: '600', color: '#6B7280' }}>
        Here is My Zoom Live Class Team Members.
      </p>
    </div>

    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {/* Team Member 1 */}
      <div style={{ flex: '1 1 calc(33.33% - 16px)', border: '1px solid #D1D5DB', padding: '16px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
        <img
          alt="team"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtQ-qHfCrm9svO3WvHfmIdxyPnucFcmTSuPA&s"
          style={{ width: '64px', height: '64px', backgroundColor: '#F3F4F6', objectFit: 'cover', borderRadius: '50%', marginRight: '16px' }}
        />
        <div>
          <h2 style={{ color: '#D97706', fontWeight: '500', marginBottom: '4px' }}>Pashmeen Zia</h2>
          <p style={{ color: '#6B7280' }}>UI Designer</p>
        </div>
        </div>
      
      {/* Team Member 2 */}
      <div style={{ flex: '1 1 calc(33.33% - 16px)', border: '1px solid #D1D5DB', padding: '16px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
        <img
          alt="team"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRhbXit2OhSwmwYaW4fATX1omYqtXzNM2g2A&s"
          style={{ width: '64px', height: '64px', backgroundColor: '#F3F4F6', objectFit: 'cover', borderRadius: '50%', marginRight: '16px' }}
        />
        <div>
          <h2 style={{ color: '#D97706', fontWeight: '500', marginBottom: '4px' }}>Abdullah Kashif</h2>
          <p style={{ color: '#6B7280' }}>Developer</p>
        </div>
      </div>

      {/* Team Member 3 */}
      <div style={{ flex: '1 1 calc(33.33% - 16px)', border: '1px solid #D1D5DB', padding: '16px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
        <img
          alt="team"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtQ-qHfCrm9svO3WvHfmIdxyPnucFcmTSuPA&s"
          style={{ width: '64px', height: '64px', backgroundColor: '#F3F4F6', objectFit: 'cover', borderRadius: '50%', marginRight: '16px' }}
        />
        <div>
          <h2 style={{ color: '#D97706', fontWeight: '500', marginBottom: '4px' }}>Hafsa Kamali</h2>
          <p style={{ color: '#6B7280' }}>Developer</p>
        </div>
      </div>

      {/* Team Member 4 */}
      <div style={{ flex: '1 1 calc(33.33% - 16px)', border: '1px solid #D1D5DB', padding: '16px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
        <img
          alt="team"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRhbXit2OhSwmwYaW4fATX1omYqtXzNM2g2A&s"
          style={{ width: '64px', height: '64px', backgroundColor: '#F3F4F6', objectFit: 'cover', borderRadius: '50%', marginRight: '16px' }}
        />
        <div>
          <h2 style={{ color: '#D97706', fontWeight: '500', marginBottom: '4px' }}>Uzair Khijli</h2>
          <p style={{ color: '#6B7280' }}>DevOps</p>
        </div>
      </div>

      {/* Team Member 5 */}
      <div style={{ flex: '1 1 calc(33.33% - 16px)', border: '1px solid #D1D5DB', padding: '16px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
        <img
          alt="team"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtQ-qHfCrm9svO3WvHfmIdxyPnucFcmTSuPA&s"
          style={{ width: '64px', height: '64px', backgroundColor: '#F3F4F6', objectFit: 'cover', borderRadius: '50%', marginRight: '16px' }}
        />
        <div>
          <h2 style={{ color: '#D97706', fontWeight: '500', marginBottom: '4px' }}>Iqra Ikram</h2>
          <p style={{ color: '#6B7280' }}>Software Engineer</p>
        </div>
      </div>

      {/* Team Member 6 */}
      <div style={{ flex: '1 1 calc(33.33% - 16px)', border: '1px solid #D1D5DB', padding: '16px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
        <img
          alt="team"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtQ-qHfCrm9svO3WvHfmIdxyPnucFcmTSuPA&s"
          style={{ width: '64px', height: '64px', backgroundColor: '#F3F4F6', objectFit: 'cover', borderRadius: '50%', marginRight: '16px' }}
        />
        <div>
          <h2 style={{ color: '#D97706', fontWeight: '500', marginBottom: '4px' }}>Rija Zeeshan</h2>
          <p style={{ color: '#6B7280' }}>DevOps</p>
        </div>
      </div>

    </div>
  </div>
</section>
{/* contact us */}

<section className="relative text-gray-300 body-font">
  <div
    className="absolute inset-0 bg-gray-300"
    style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#E5E7EB' }}
  >
    <iframe
      width="100%"
      height="100%"
      title="map"
      src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
      style={{
        width: '100%',
        height: '100%',
        border: 'none'
      }}
    />
  </div>
  <div
    className="container px-5 py-12 mx-auto flex bg-yellow-600"
    style={{
      display: 'flex',
      flexDirection: 'row',
      padding: '3rem 0',
      backgroundColor: '#F59E0B',
      justifyContent: 'center'
    }}
  >
    <div
      className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
      style={{
        width: '100%',
        maxWidth: '500px',
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        padding: '2rem',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        position: 'relative'
      }}
    >
      <h2
        className="text-gray-900 text-lg mb-1 font-medium title-font"
        style={{
          color: '#1F2937',
          fontSize: '24px',
          fontWeight: '500',
          marginBottom: '1rem'
        }}
      >
        Feedback
      </h2>
      <p
        className="leading-relaxed mb-5 text-gray-600"
        style={{
          fontSize: '16px',
          color: '#4B5563',
          marginBottom: '1rem'
        }}
      >
        Please fill out this form if you have any queries, complaints, or if you have any messages for us.
      </p>
      <div
        className="relative mb-4"
        style={{
          marginBottom: '1rem'
        }}
      >
        <label
          htmlFor="email"
          className="leading-7 text-sm text-gray-600"
          style={{
            fontSize: '14px',
            color: '#374151',
            marginBottom: '0.5rem',
            display: 'block'
          }}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          style={{
            width: '100%',
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            padding: '10px',
            border: '1px solid #D1D5DB',
            fontSize: '16px',
            color: '#4B5563',
            outline: 'none'
          }}
        />
      </div>
      <div
        className="relative mb-4"
        style={{
          marginBottom: '1rem'
        }}
      >
        <label
          htmlFor="message"
          className="leading-7 text-sm text-gray-600"
          style={{
            fontSize: '14px',
            color: '#374151',
            marginBottom: '0.5rem',
            display: 'block'
          }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          style={{
            width: '100%',
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            padding: '10px',
            border: '1px solid #D1D5DB',
            fontSize: '16px',
            color: '#4B5563',
            resize: 'none',
            height: '120px',
            outline: 'none'
          }}
        />
      </div>
      <button
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        style={{
          backgroundColor: '#4F46E5',
          color: '#FFFFFF',
          padding: '12px 20px',
          borderRadius: '8px',
          border: 'none',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Submit
      </button>
      <p
        className="text-xs text-gray-500 mt-3"
        style={{
          fontSize: '12px',
          color: '#6B7280',
          marginTop: '1rem'
        }}
      >
        Read our Privacy policy for any issues.
      </p>
    </div>
  </div>
</section>
{/*footer*/}
<section>
    <div className=' py-6 text-center bg-accent bg-black'>
       <p className='text-white'> Noor Fatima |All rights reserved 2024.</p>
      
    </div>
</section>

  </div>
  )
}