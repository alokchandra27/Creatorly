import { useState } from "react";
import { ArrowRight, LineSquiggle, MoveRight } from "lucide-react";
import { toast } from "react-toastify";
import API from "../components/API/API"; // Adjust the import path based on your project structure
import { useNavigate } from "react-router-dom";

const Auth = ({ setIsLoggedIn }) => {
  const [isLogin, setIsLogin] = useState(false); // false for register, true for login
  const [isLoading, setIsLoading] = useState(false); // For handling loading state
  const [showPassword, setShowPassword] = useState(false); // For toggling password visibility

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("Form Data:", data);

    if (!data.email || !data.password) {
      toast.info("Please fill in your email and password");
      return;
    }

    if (!isLogin && !data.name) {
      toast.info("Your name helps personalize your experience 🙂");
      return;
    }

    handleAuth(data, e);
  };

  const handleAuth = async (data, e) => {
    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";

    try {
      setIsLoading(true);

      const toastId = toast.loading(
        isLogin ? "Signing you in..." : "Creating your account...",
      );

      const response = await API.post(endpoint, data);

      if (isLogin) {
        const token = response?.data?.token;

        if (token) {
          localStorage.setItem("token", token);
        }

        if (response?.data?.user) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
        }

        setIsLoggedIn(true);
        navigate("/dashboard");
      }

      toast.update(toastId, {
        render: isLogin
          ? `Welcome back, ${response?.data?.user?.name || "User"} 👋`
          : "Account created successfully 🎉",
        type: "success",
        isLoading: false,
        autoClose: 2500,
      });

      e.target.reset();
      // navigate("/");
    } catch (error) {
      toast.dismiss();

      const message =
        error?.response?.data?.message === "Invalid credentials"
          ? "That doesn’t look right. Try again."
          : error?.response?.data?.message ||
            "Something went wrong. Please try again.";

      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-creator-bg text-creator-text lg:-mt-10">
      <section className="flex h-full w-full flex-col lg:flex-row">

        {/* ================= LEFT ================= */}
        <div className="relative hidden h-full min-h-0 w-full overflow-hidden px-8 py-10 sm:px-12 md:px-16 lg:flex lg:w-1/2 lg:px-20 xl:px-24">
          {/* Soft decorative background shapes */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-creator-pink/10 blur-3xl" />

          <div className="absolute bottom-[-120px] left-[20%] w-80 h-80 rounded-full bg-amber-100/40 blur-3xl" />

          {/* Main Content */}
          <div className="relative z-10 mx-auto flex h-full w-full max-w-xl flex-col justify-center pb-10">
            {/* Small label */}
            <div className="mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-creator-pink" />

              <p className="font-caveat text-xl text-creator-pink">
                A home for creative work
              </p>
            </div>

            {/* Main Heading */}
            <div className="flex flex-col gap-3">
              <div>
                <h1 className="font-caveat text-5xl font-normal leading-[0.82] -rotate-2 text-neutral-800 xl:text-5xl">
                Make
              </h1>

              <h2 className="font-caveat text-5xl font-normal leading-[0.82] -rotate-2 text-neutral-800 xl:text-5xl">
                it Creatorly.
              </h2>
              </div>

              <h2 className="mt-2 font-caveat text-5xl font-normal leading-[0.82] -rotate-1 text-creator-pink xl:text-5xl">
                Share your story.
              </h2>
            </div>

            {/* Description */}
            <div className="mt-6 max-w-md">
              <p className="text-sm leading-6 text-neutral-500 xl:text-sm">
                Your work, your space, your people. Creatorly helps you put it
                all in one place.
              </p>

              <LineSquiggle
                size={40}
                strokeWidth={1.5}
                className="text-creator-pink"
              />
            </div>

            {/* Creator Features */}
            <div className="mt-2 flex flex-wrap gap-2">
              <div className="border border-neutral-200 bg-white px-3 py-1.5 text-[11px] text-neutral-600 shadow-sm">
                ✦ Your own storefront
              </div>

              <div className="border border-neutral-200 bg-white px-3 py-1.5 text-[11px] text-neutral-600 shadow-sm">
                ♡ Showcase your work
              </div>

              <div className="border border-neutral-200 bg-white px-3 py-1.5 text-[11px] text-neutral-600 shadow-sm">
                ↗ Share anywhere
              </div>
            </div>

            {/* Mini CTA */}
            <div className="mt-5">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-creator-pink text-white">
                  <MoveRight size={15} />
                </span>

                <span>Your creator journey starts here.</span>
              </div>
            </div>
          </div>

          {/* ================= DECORATIVE ARTWORK ================= */}

          {/* Main artwork */}
          <div className="absolute bottom-[16%] right-[5%] aspect-square w-[150px] rotate-6 border-[7px] border-creator-bg bg-white shadow-[0_15px_40px_rgba(0,0,0,0.15)] xl:right-[6%] xl:w-[190px]">
            <img
              src="/src/assets/yarnKaGola.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* clay artwork */}
          <div className="absolute bottom-[15%] right-[28%] aspect-square w-[90px] -rotate-12 border-[6px] border-creator-bg bg-white shadow-[0_12px_30px_rgba(0,0,0,0.12)] xl:right-[30%] xl:w-[110px]">
            <img
              src="/src/assets/clay.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* palette decoration */}
          <div className="absolute bottom-[10%] right-[1%] xl:right-[5%] opacity-90">
            <img src="/src/assets/palette.png" alt="" className="w-12 xl:w-16" />
          </div>

          {/* Daisy */}
          <div className="absolute bottom-[12%] left-[7%] opacity-70">
            <img
              src="/src/assets/redcolor.png"
              alt=""
              className="w-12 xl:w-16"
            />
          </div>
        </div>

        {/* ================= RIGHT (SELLER REGISTER PANEL)================= */}
        <div className="w-full lg:w-1/2 h-screen lg:h-screen flex items-center justify-center px-4 sm:px-8 py-6 lg:py-0 border-t-0 lg:border-t-0 lg:border-l-[1px] border-creator-accent relative bg-creator-bg overflow-hidden">
          {/* Form Main Container */}
          <div className="w-full max-w-[440px] bg-white rounded-2xl px-5 py-0 sm:p-7 shadow-sm border border-neutral-100/80 flex flex-col relative">
            {/* Header / Logo Style */}
            <div className="text-center mb-4">
              <div className="flex items-center justify-center gap-1 mb-0.5">
                <span className="font-bold text-lg tracking-tight text-neutral-800">
                  C
                </span>
                <span className="font-serif font-bold text-lg tracking-tight text-neutral-800">
                  Creatorly
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-neutral-800 tracking-tight">
                {!isLogin ? "Create Your Store 😎" : "Welcome Back👋!"}
              </h3>
              <p className="text-[11px] text-neutral-400 mt-0.5 font-light">
                {!isLogin
                  ? "Join a community of creators"
                  : "Login to your creator dasboard"}
              </p>
            </div>

            {/* Form Elements */}
            <form onSubmit={submitHandler} className="space-y-2.5">
              {/* First Name & Last Name (Side by Side) */}
              {!isLogin && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-neutral-600 mb-1">
                      First Name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="Enter first name"
                      className="w-full px-3 py-2 bg-neutral-50/50 border border-neutral-200 rounded-xl text-xs focus:outline-none focus:border-creator-pink transition-colors placeholder:text-neutral-300"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-neutral-600 mb-1">
                      Last Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Enter last name"
                      className="w-full px-3 py-2 bg-neutral-50/50 border border-neutral-200 rounded-xl text-xs focus:outline-none focus:border-creator-pink transition-colors placeholder:text-neutral-300"
                    />
                  </div>
                </div>
              )}

              {/* Email (Full Width) */}
              <div>
                <label className="block text-[11px] font-semibold text-neutral-600 mb-1">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-3 py-2 bg-neutral-50/50 border border-neutral-200 rounded-xl text-xs focus:outline-none focus:border-creator-pink transition-colors placeholder:text-neutral-300"
                />
              </div>

              {/* Username & Store Name (Side by Side) */}
              {!isLogin && (
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-600 mb-1">
                    Username
                  </label>
                  <input
                    name="username"
                    type="text"
                    placeholder="Your username"
                    className="w-full px-3 py-2 bg-neutral-50/50 border border-neutral-200 rounded-xl text-xs focus:outline-none focus:border-creator-pink transition-colors placeholder:text-neutral-300"
                  />
                </div>
              )}

              {/* Store Name Custom Handle (Full Width) */}
              {!isLogin && (
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-600 mb-1">
                    Store Name
                  </label>
                  <div className="relative">
                    <input
                      name="storeName"
                      type="text"
                      placeholder="Your store name"
                      className="w-full px-3 py-2 bg-neutral-50/50 border border-neutral-200 rounded-xl text-xs focus:outline-none focus:border-creator-pink transition-colors placeholder:text-neutral-300 pr-8"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-300 text-xs">
                      🔗
                    </span>
                  </div>
                </div>
              )}

              {/* Password (Full Width) */}
              <div>
                <label className="block text-[11px] font-semibold text-neutral-600 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="w-full px-3 py-2 bg-neutral-50/50 border border-neutral-200 rounded-xl text-xs focus:outline-none focus:border-creator-pink transition-colors placeholder:text-neutral-300 pr-8"
                  />

                  {/* Click hone par state ko toggle */}
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 text-xs cursor-pointer select-none"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </span>
                </div>
              </div>

              {/* Custom Info Alert for Password Safety (Only shows on Register mode) */}
              {!isLogin && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2.5 animate-pulse-slow">
                  {/* Alert Icon */}
                  <span className="text-base sm:text-lg mt-0.5 leading-none">
                    ⚠️
                  </span>
                  <div>
                    <h4 className="text-[11px] font-bold text-amber-800 tracking-wide uppercase">
                      Important Note
                    </h4>
                    <p className="text-[11px] text-amber-700 leading-normal mt-0.5 font-medium">
                      Kripya apna{" "}
                      <b>Email aur Password safe rakhen aur note kar lein</b>.
                      Abhi forget password ka option available nahi hai, isliye
                      login karne ka yahi ekmaatra tarika hai.
                    </p>
                  </div>
                </div>
              )}

              {/* Submit Action Button */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isLoading} // React handles disabling here cleanly
                  className={`w-full py-2.5 rounded-xl text-xs font-medium transition-all duration-300 tracking-wide text-white flex items-center justify-center gap-2 ${ isLoading ? "bg-neutral-400 cursor-not-allowed opacity-80" : "bg-[#1A2E26] hover:bg-neutral-800 cursor-pointer" }`}
                >
                  {/* Corrected Text Logic Hierarchy */}
                  {isLoading
                    ? isLogin
                      ? "Signing in..."
                      : "Creating Store..."
                    : isLogin
                      ? "Sign In"
                      : "Create Store"}

                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Footer Redirect Link */}
              <div className="text-center pt-1">
                <p className="text-[11px] text-neutral-500 font-light">
                  {isLogin
                    ? "Don't have an account?"
                    : "Already have an account?"}
                  <span
                    onClick={() => {
                      setIsLogin(!isLogin);
                      setShowPassword(false); // Reset password visibility when switching views
                    }}
                    className="font-semibold text-neutral-800 hover:underline cursor-pointer ml-1"
                  >
                    {isLogin ? "Register" : "Login"}
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Auth;
