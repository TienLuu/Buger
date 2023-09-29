import React from 'react'

const Banner = () => {
  return (
    <div className="page-title bg-[url('http://rayoflightthemes.com/wordpress-themes/burgos-wordpress-theme/wp-content/uploads/2020/12/shop-bg-2.jpg')] bg-cover bg-center bg-no-repeat text-center text-gray-color bg-black-navy-color">  
        <div className="page-title-inner pt-[96px] pb-[35px] bg-[rgba(0,0,0,0.3)] md:pt-[120px] md:pb-[58px]">    
          <div className="container "> 
            <div className="text-left row "> 
              <div className="col lg:flex-[0_0_66.666667%] lg:max-w-[66.666667%]"> 
                <div className="breadcrumb1 pl-5 border-l-2 border-l-yellow-color border-solid"> 
                  <span className="text-lg leading-[1] break-words" property="itemListElement" typeof="ListItem">
                    <a href="http://rayoflightthemes.com/wordpress-themes/burgos-wordpress-theme" className="home text-lg leading-[1] break-words">
                      <span property="name" className="p-0 font-[500] text-white-color text-lg leading-[1] break-words">Burgos</span>
                      </a>
                    <meta property="position"  />
                    </span> - 
                    <span property="itemListElement" typeof="ListItem" className="post text-lg leading-[1] break-words">
                      <span property="name" className="post p-0 font-[500] text-lg leading-[1] break-words">Cart</span>
                    <meta property="url" content="http://rayoflightthemes.com/wordpress-themes/burgos-wordpress-theme/cart/" />
                    <meta property="position"  />
                    </span>        
                    </div> 
                <h1 className="text-[55px] leading-[70px] pt-0 mb-0 mt-3 font-black text-white-color uppercase md:text-[72px] md:leading-[90px] ">Cart</h1> 
                <p className="titlesmall" />      </div> 
              <div className="col-lg-4"> 
              </div> 
            </div> 
          </div> 
        </div> 
      </div>
  )
}

export default Banner