<template>
  <div class="footer-basic">
          <footer>
              <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
              <ul class="list-inline">
                  <li class="list-inline-item"><a href="#">Home</a></li>
                  <li class="list-inline-item"><a href="#">Categories</a></li>
                  <li class="list-inline-item"><a href="#">Sponsor</a></li>
                  <li class="list-inline-item"><a href="#">Lodging</a></li>
                  <li class="list-inline-item"><a href="#">FAQ</a></li>
                  <li class="list-inline-item"><a href="#">Contact</a></li>
                  <li class="list-inline-item"><a href="#">Account</a></li>
              </ul>
              <p class="copyright">Reto del Pacífico © 2018</p>
          </footer>
  </div>
</template>

<style lang="scss" scoped>
.footer-basic {
  padding: 40px 0;
  background-color: #ffffff;
  color: #4b4c4d;
  ul {
    padding: 0;
    list-style: none;
    text-align: center;
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 0;
  }
  li {
    padding: 0 10px;
    a {
      color: inherit;
      text-decoration: none;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
  }
  .social {
    text-align: center;
    padding-bottom: 25px;

    > a {
      font-size: 24px;
      width: 40px;
      height: 40px;
      line-height: 40px;
      display: inline-block;
      text-align: center;
      border-radius: 50%;
      border: 1px solid #ccc;
      margin: 0 8px;
      color: inherit;
      opacity: 0.75;
      &:hover {
        opacity: 0.9;
      }
    }
  }
  .copyright {
    margin-top: 15px;
    text-align: center;
    font-size: 13px;
    color: #aaa;
    margin-bottom: 0;
  }
}
</style>
