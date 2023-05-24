import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-wh-900 text-wh-50 py-10 px-10'>
      <div className='justify-between mx-auto gap-16 sm:flex'>
        {/* FIRST COLLUMN */}
        <div className='mt-16 basis-1/2 sm:mt-0'>
          <h4 className='font-bold'>BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius et iure ex! Esse distinctio ut eaque iure dicta unde repellat quis, vitae eligendi harum voluptas in officiis accusamus placeat asperiores!
          </p>
          <p>copyright Blog of the Futre All Rights Reserved.</p>
        </div>
        {/* SECOND COLLUMN */}
        <div className='mt-16 basis-1/4 sm:mt-0'>
          <h4 className='font-bold'>Links</h4>
          <p className="my-5">
            Massa Orna Snolaparo
          </p>
          <p className="my-5">
            Some random link
          </p>
          <p>Ullmacorperater visacomando</p>
        </div>
        {/* THIRD COLLUMN */}
        <div className='mt-16 basis-1/4 sm:mt-0'>
          <h4 className='font-bold'>Contact Us</h4>
          <p className="my-5">
            Massa Orna Snolaparo
          </p>
          <p className="my-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <p>(222)481-739</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
