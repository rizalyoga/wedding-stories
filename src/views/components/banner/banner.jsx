import "./banner.css";

const Banner = () => {
  // const animScroll = () => {
  //   const bg = document.getElementById("banner");
  //   window.addEventListener("scroll", function () {
  //     bg.style.backgroundSize = 160 - +window.pageYOffset / 12 + "%";
  //     bg.style.opacity = 1 - +window.pageYOffset / 700 + "";
  //   });
  // };

  return (
    <div>
      <div className="banner" id="banner">
        <div className="container">
          <div className="text-box">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ea accusantium fugit amet animi quod sint labore nisi accusamus? Saepe nulla alias doloribus veritatis dolor omnis quas illo sit enim!</p>
            <a href="" class="explore-btn">
              Explore
            </a>
          </div>
        </div>
      </div>
      {/* /* ------------------------------- END-BANNER -------------------------------  */}
    </div>
  );
};

export default Banner;
