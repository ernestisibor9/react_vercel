import React,{useState} from 'react'

function LessonTwo() {
    const[profile, setProfile] = useState({
        name: "John Doe",
        job: "Web Developer",
        company: "Microsoft"
    })
    // Create a function to update a PERSON'S PROFILE
    function updateProfile(){
        setProfile({...profile, company: "Google"})
    }
  return (
    <div>
      <h1>My name is {profile.name}</h1>
      <h2>{profile.name} works @ {profile.company}</h2>
      <button onClick={updateProfile}>Update Profile</button>
    </div>
  )
}

export default LessonTwo
