<template>
    <!--this is about of footer-->
    <footer class="bg-green-800 text-white px-8 py-10 mt-10">
    <div class="flex flex-wrap justify-between gap-8">
        
        <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">TEMBERAURWANDA</h3>
            <P class="text-sm text-white-400">Discover the beauty of the land of thousand hills</P>
            <ul class=" space-y-2 text-sm">
                
            </ul>
        </div>
         <!--Quick links -->
         <div>
            <h3 class="text-yellow-300 front-bold text-lg mb-3">Quick links</h3>
            <ul class=" space-y-2 text-sm">
                
                   <li><RouterLink to="/" class="hover:text-yellow-300">home</RouterLink></li> 
                    <li><RouterLink to="/about" class="hover:text-yellow-300">About</RouterLink></li>
                    <li><RouterLink to="/service" class="hover:text-yellow-300">service</RouterLink></li>
            

            </ul>

        
        </div>
    
        <!--Destination-->
        <div>
            <h3 class=" text-yellow-300 font-bold text-lg mb-3">Destination</h3>
            <ul class="space-y-2 text-sm">
              
              <li><RouterLink to="/kigali" class="hover:bg-yellow-300">kigali</RouterLink></li>
                 <li><RouterLink to="/western" class="hover:bg-yellow-300">western</RouterLink></li>
                 <li><RouterLink to="/northern" class="hover:bg-yellow-300">northern</RouterLink></li>
                 <li><RouterLink to="/eastern" class="hover:bg-yellow-300">eastern</RouterLink></li>
            </ul>
        </div>
        <!--contact-->
        <div>
          <h3 class=" text-yellow-300 font-bold text-lg mb-3">Destination</h3>
          <ul class="space-y-2 text-sm">
            <li>kirezigustave22@gmail.com</li>
            <li>0798886475</li>
            <li>kagugu-kigali</li>

          </ul>

        </div>
        <!--place for copy right-->
        <div class="w-full text-center mt-8 text-sm text-green-300">
            <p> &copy2027 Visit Rwanda. All rights reserved. </p>

        </div>

    </div>    

    </footer>
</template>

