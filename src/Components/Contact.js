import React from 'react'

export default function Contact() {
    let person =
        {name: "Chanmin Lee",
            phone: "587-938-2657",
            address: "11449 Ellersli Rd. SW, AB, Canada"
    }
    return(
        <div>
            <div className="contact-container">
                <h2>Contact Information</h2>
                <div className="contact-information">
                    <p>Name: {person.name}</p>
                    <p>Phone: {person.phone}</p>
                    <p>Address: {person.address}</p>
                </div>
            </div>
        </div>
    )
}