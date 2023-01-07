let navbar=document.querySelector(".navbar-nav");
            document.querySelector("#menu").onclick =()=>{
                navbar.classList.toggle('active');
                searchForm.classList.remove('active');
                loginForm.classList.remove('active');
                shoppingCart.classList.remove('active');
            }

            let searchForm=document.querySelector(".search-form");
            document.querySelector("#search").onclick=()=>{
                searchForm.classList.toggle('active');
                navbar.classList.remove('active');
                loginForm.classList.remove('active');
                shoppingCart.classList.remove('active');
            }

            let loginForm=document.querySelector(".login-form") ;
            document.querySelector("#userBtn").onclick=()=>{
                loginForm.classList.toggle('active');
                searchForm.classList.remove('active');
                navbar.classList.remove('active');
                shoppingCart.classList.remove('active');
            }

            let shoppingCart=document.querySelector(".shopping-cart");
            document.querySelector("#cartBtn").onclick=()=>{
                shoppingCart.classList.toggle('active');
                searchForm.classList.remove('active');
                loginForm.classList.remove('active');
                navbar.classList.remove('active');
            }

            window.onscroll=()=>{
                navbar.classList.remove('active');
                searchForm.classList.remove('active');
                loginForm.classList.remove('active');
                shoppingCart.classList.remove('active');
            }