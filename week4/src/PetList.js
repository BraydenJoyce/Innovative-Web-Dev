import React, { useState } from "react";
import pets from "./data";

function PetList() {
  const [search, setSearch] = useState("");

  const filteredPets = pets.filter((pet) =>
    pet.animal.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Search your favorite pet by animal like dog or bird</h3>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          style={{ maxWidth: "300px" }}
          placeholder="Enter animal type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Specialty</th>
          </tr>
        </thead>
        <tbody>
          {filteredPets.map((pet) => (
            <tr key={pet.id}>
              <td>
                <img
                  src={pet.image}
                  alt={pet.name}
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
              </td>
              <td className="align-middle">{pet.name}</td>
              <td className="align-middle">{pet.specialty}</td>
            </tr>
          ))}
          {filteredPets.length === 0 && (
            <tr>
              <td colSpan="3" className="text-center">No pets found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PetList;
