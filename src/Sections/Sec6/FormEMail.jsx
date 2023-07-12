// import { useState } from "react"

// export default function FormEMail() {
//     const [formState, setFormState] = useState({})

//     const config = {
//         // Host: "smtp.elasticemail.com",
//         // Username: "gorrus200@gmail.com",
//         // Password: "86A5DBD5DA107ADE8DD4A1956669B50B0AA0",
//         // Port: 2525,
//         SecureToken :"0c41617f-71d8-4be9-bd07-dc5239d17a5b",
//         To: "gorrus200@gmail.com",
//         From: "brooklynmillworkworker@gmail.com",
//         Subject: "This is the subject",
//         Body: "And this is the body"
//     }


//     function handleChangeInput(e) {
//         setFormState({ ...formState, [e.target.name]: e.target.value })
//     }
//     const sendEmail = (e) => {
//         e.preventDefault();
    
//         emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//           .then((result) => {
//               console.log(result.text);
//           }, (error) => {
//               console.log(error.text);
//           });
//       };

//     return (
//         <div className='FormEMail h-screen bg-yellow-800 flex flex-col w-50vw items-start justify-start gap-5 text-black'>
//             <form className="flex flex-col gap-5 p-5"
//                 onSubmit={sendEmail}
//             >
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="name"
//                     value={formState.name || ''}
//                     onChange={handleChangeInput}
//                 />
//                 {/* <input
//                     type="email"
//                     name="email"
//                     placeholder="email"
//                     value={formState.email || ''}
//                     onChange={handleChangeInput}
//                     className="border border-blue-800"
//                 /> */}
//                 <input
//                     type="submit"
//                     value='send email'
//                     className="bg-blue-200 text-black"
//                 />
//             </form>
//         </div>
//     )
// }