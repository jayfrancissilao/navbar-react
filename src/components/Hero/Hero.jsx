

const Hero = () => {
   
               return (
                              <div className='px-7 md:px-10 my-14 md:h-screen bg-[#1a1a29]' id='home'>
                                  <div>
                                      <div className='w-full flex flex-col md:flex-row items-center justify-between'>
                                          {/* text */}
                                          <div className='text-white ml-5'>
                                              <h6 className='text-3x1 mt-12'>Hello i am</h6>
                                              <h1 className='font-semibold text-3x1 md:text-5x1 my-4'>Jay Francis Silao</h1>
                                              <p className='md:w-96'>Freelance UI designer, Front-end developer, &  I create seamless web experience for end-user</p>
                      
                                              {/* button */}
                                              <div className='mt-5'>
                                                  <button className='btn bg-primary py-2 px-4 text-white rounded hover:bg-white hover:text-primary transition-all duration-500'>About me</button>
                                                  <button className='btn outline px-6 py-1.5 rounded border-none text-white ml-5'>Projects</button>
                                                  
                                              </div>
                                          </div>
                                          {/* image */}
                                          <div className='order-first md:order-last relative md:mr-5'>
                                             <h1>Image here</h1>
                                          </div>
                                      </div>
                                      {/* divider */}
                                      <div className='w-full h-24 bg-[#181824] mx-auto absolute left-0 hidden md:block mt-5'>
                      
                                      </div>
                                  </div>
                              </div>
                          );
}

export default Hero