import Card from './Card';

function Explorer() {
  // Our data array
  const destinations = [
    { id: 1, name: "Bhavesh", location: "Veraval", desc: "Web Developer", rate: 4.9 },
    { id: 2, name: "Aayush", location: "Ahmedabad", desc: "Sr. Web Developer", rate: 4.8 },
    { id: 3, name: "Bhai", location: "Surat", desc: "TL.", rate: 5.0 }
  ];

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial', padding: '20px' }}>
      <h1>Explorer</h1>
      <p>using React Props!</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {destinations.map((place) => (
          /* Passing data via props here */
          <Card 
            key={place.id} 
            name={place.name}
            location={place.location}
            description={place.desc}
            rating={place.rate}
          />
        ))}
      </div>
    </div>
  );
}

export default Explorer;