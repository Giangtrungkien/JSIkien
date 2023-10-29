import { auth, Login, signup } from "./firebaseConfig.js";
import { getSpotify } from "./app.js";
import { loadRecentSearch } from "./app.js";
export const loadFormLogin = () => {
  document.querySelector("#content").innerHTML = `
    <section class="vh-100 gradient-custom">
              <div class="container py-5 h-100">
                <div
                  class="row d-flex justify-content-center align-items-center h-100"
                >
                  <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div
                      class="card bg-dark text-white"
                      style="border-radius: 1rem"
                    >
                      <div class="card-body p-5 text-center">
                        <div class="mb-md-5 mt-md-4 pb-5">
                          <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                          <p class="text-white-50 mb-5">
                            Please enter your login and password!
                          </p>

                          <div class="form-outline form-white mb-4">
                            <label
                              style="
                                color: white;
                                display: block;
                                text-align: left;
                              "
                              class="form-label"
                              for="typeEmailX"
                              >Email</label
                            >
                            <input
                              type="email"
                              id="typeEmailX"
                              class="form-control form-control-lg"
                            />
                          </div>

                          <div class="form-outline form-white mb-4">
                            <label
                              style="
                                color: white;
                                display: block;
                                text-align: left;
                              "
                              class="form-label"
                              for="typePasswordX"
                              >Password</label
                            >
                            <input
                              type="password"
                              id="typePasswordX"
                              class="form-control form-control-lg"
                            />
                          </div>

                          <p class="small mb-5 pb-lg-2">
                            <a class="text-white-50" href="#!"
                              >Forgot password?</a
                            >
                          </p>

                          <button
                            class="btn btn-outline-light btn-lg px-5"
                            type="submit"
                            id="login"
                          >
                            Login
                          </button>
                          <button
                          class="btn btn-outline-light btn-lg px-5"
                          type="submit"
                          id="register"
                        >
                          Register
                        </button>
                          <div
                            class="d-flex justify-content-center text-center mt-4 pt-1"
                          >
                            <a href="#!" class="text-white"
                              ><i class="fab fa-facebook-f fa-lg"></i
                            ></a>
                            <a href="#!" class="text-white"
                              ><i class="fab fa-twitter fa-lg mx-4 px-2"></i
                            ></a>
                            <a href="#!" class="text-white"
                              ><i class="fab fa-google fa-lg"></i
                            ></a>
                          </div>
                        </div>

                        <div>
                          <p class="mb-0">
                            Don't have an account?
                            <a href="#!" class="text-white-50 fw-bold"
                              >Sign Up</a
                            >
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`;
  const btnLogin = document.querySelector("#login");
  const btnregister = document.querySelector("#register");
  btnLogin.addEventListener("click", async () => {
    const email = document.querySelector("#typeEmailX");
    const password = document.querySelector("#typePasswordX");
    console.log(email.value);
    console.log(password.value);
    const success = await Login(auth, email.value, password.value);
    if (success.isChecked) {
      alert("Đăng nhập thành công");
      localStorage.setItem("name", email.value);
      loadRecentSearch();
      checkAccount();
    } else {
      alert("Đăng nhập thất bại");
    }
  });
  btnregister.addEventListener("click", async () => {
    const email = document.querySelector("#typeEmailX");
    const password = document.querySelector("#typePasswordX");
    console.log(email.value);
    console.log(password.value);
    const success = await signup(auth, email.value, password.value);
    if (success.isChecked) {
      alert("Đăng ký thành công");
      localStorage.setItem("name", email.value);
      loadRecentSearch();
      getSpotify("son tung");
      checkAccount();
    } else {
      alert("Đăng ký thất bại");
    }
  });
};
export const checkAccount = () => {
  if (localStorage.getItem("name")) {
    document.querySelector(".user").innerHTML = `
    <i class="fa-solid fa-user"></i>
              <p id="info">${localStorage.getItem("name")}</p>
              <ul>
                 <li>thông tin tài khoản</li>
                <li id="logout">Đăng xuất</li>
              </ul>`;

    document.querySelector("#logout").addEventListener("click", () => {
      localStorage.removeItem("name");
      checkAccount();
    });
  } else {
    document.querySelector(".user").innerHTML = `
    <i class="fa-solid fa-user"></i>
              <p id="info"></p>
              <ul>
                <li class="dangnhap">Đăng nhập</li>
                <li>Đăng ký</li>
    `;
    const btnlogin = document.querySelector(".dangnhap");
    btnlogin.addEventListener("click", () => {
      loadFormLogin();
    });
  }
};
