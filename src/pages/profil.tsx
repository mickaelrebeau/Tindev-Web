import { useState } from 'react'

export function Profil() {
  const [user, setUser] = useState({
    USER_ID: 1,
    USER_PSEUDO: 'JohnDoe',
    USER_BDAY: '1990-01-01',
    USER_NAME: 'John',
    USER_LASTNAME: 'Doe',
    USER_BIO: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    USER_DEGREE: 'Bachelor',
    USER_JOB: 'Software Engineer',
    USER_COMPANY: 'ABC Company',
    USER_FORMATION: 'Computer Science',
    USER_CITY: 'New York',
    USER_EMAIL: 'johndoe@example.com',
  })

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Envoyer les modifications de l'utilisateur au serveur ici
    console.log('Modifications enregistrées:', user)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profil</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="USER_PSEUDO" className="font-bold">
            Pseudo :
          </label>
          <input
            type="text"
            id="USER_PSEUDO"
            name="USER_PSEUDO"
            value={user.USER_PSEUDO}
            onChange={handleChange}
            className="border border-gray-300 px-2 py-1 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="USER_BDAY" className="font-bold">
            Date de naissance :
          </label>
          <input
            type="date"
            id="USER_BDAY"
            name="USER_BDAY"
            value={user.USER_BDAY}
            onChange={handleChange}
            className="border border-gray-300 px-2 py-1 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="USER_NAME" className="font-bold">
            Prénom :
          </label>
          <input
            type="text"
            id="USER_NAME"
            name="USER_NAME"
            value={user.USER_NAME}
            onChange={handleChange}
            className="border border-gray-300 px-2 py-1 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="USER_LASTNAME" className="font-bold">
            Nom de famille :
          </label>
          <input
            type="text"
            id="USER_LASTNAME"
            name="USER_LASTNAME"
            value={user.USER_LASTNAME}
            onChange={handleChange}
            className="border border-gray-300 px-2 py-1 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="USER_BIO" className="font-bold">
            Biographie :
          </label>
          <textarea
            id="USER_BIO"
            name="USER_BIO"
            value={user.USER_BIO}
            maxLength={500}
            onChange={handleChange}
            className="border border-gray-300 px-2 py-1 rounded-md w-full resize-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="USER_DEGREE" className="font-bold">
            Diplôme :
          </label>
          <input
            type="text"
            id="USER_DEGREE"
            name="USER_DEGREE"
            value={user.USER_DEGREE}
            onChange={handleChange}
            className="border border-gray-300 px-2 py-1 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="USER_JOB" className="font-bold">
            Profession :
          </label>
          <input
            type="text"
            id="USER_JOB"
            name="USER_JOB"
            value={user.USER_JOB}
            onChange={handleChange}
            className="border border-gray-300 px-2 py-1 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="USER_COMPANY" className="font-bold">
            Entreprise :
          </label>
          <input
            type="text"
            id="USER_COMPANY"
            name="USER_COMPANY"
            value={user.USER_COMPANY}
            onChange={handleChange}
            className="border border-gray-300 px-2 py-1 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="USER_FORMATION" className="font-bold">
            Formation :
          </label>
          <input
            type="text"
            id="USER_FORMATION"
            name="USER_FORMATION"
            value={user.USER_FORMATION}
            onChange={handleChange}
            className="border border-gray-300 px-2 py-1 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="USER_CITY" className="font-bold">
            Ville :
          </label>
          <input
            type="text"
            id="USER_CITY"
            name="USER_CITY"
            value={user.USER_CITY}
            onChange={handleChange}
            className="border border-gray-300 px-2 py-1 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="USER_EMAIL" className="font-bold">
            Email :
          </label>
          <input
            type="email"
            id="USER_EMAIL"
            name="USER_EMAIL"
            value={user.USER_EMAIL}
            onChange={handleChange}
            className="border border-gray-300 px-2 py-1 rounded-md w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Enregistrer les modifications
        </button>
      </form>
    </div>
  )
}
