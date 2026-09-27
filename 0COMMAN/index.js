const nav_contener = document.querySelector(".nav_contener");
nav_contener.innerHTML = `     <nav class="upper_nav">
        <a href="" class="upper_nav_a"
          ><div
            class="upper_nav_div"
            style="
              font-size: 2rem;font-weight: bold;
              background-color: var(--color1);
              color: var(--color6);height:calc(var(--fontsize1)*3);overflow-y: hidden;
            "
          >
            TΛTΛ
            <sub style="font-size: calc(var(--fontsize1) / 1.5)"
              >web school</sub
            >
          </div></a
        >
        <a href="" class="upper_nav_a">
          <div class="upper_nav_div">Home</div></a
        >
        <a href="" class="upper_nav_a">
          <div class="upper_nav_div">Exercise▾ </div></a
        >
          

           
      </nav>
<!-- class="lower_nav"D -->
      <nav class="lower_nav"><div class="left_arraw"><</div>
        <div class="right_arraw"> > </div>

        <div class="ak"style="display:flex;overflow:auto;overflow-x:scroll;">

        
        <div class="three_bar">&#9776;</div>
        <a href="" class="lower_nav_a">
          <div class="lower_nav_div">html</div> </a
        ><a href="" class="lower_nav_a">
          <div class="lower_nav_div">css</div> </a
        ><a href="" class="lower_nav_a">
          <div class="lower_nav_div">javascript</div>
        </a>

        <a href="" class="lower_nav_a">
          <div class="lower_nav_div">react</div> </a
        ><a href="" class="lower_nav_a">
          <div class="lower_nav_div">nodejs</div> </a
        ><a href="" class="lower_nav_a">
          <div class="lower_nav_div">expressjs</div>
        </a>
        <a href="" class="lower_nav_a">
          <div class="lower_nav_div">mongodb</div>
        </a>
        <a href="" class="lower_nav_a">
          <div class="lower_nav_div">sonu</div> </a
        ><a href="" class="lower_nav_a">
          <div class="lower_nav_div">sonu</div> </a
        ><a href="" class="lower_nav_a">
          <div class="lower_nav_div">sonu</div> </a
        ><a href="" class="lower_nav_a">
          <div class="lower_nav_div">sonu</div> </a
        ><a href="" class="lower_nav_a">
          <div class="lower_nav_div">sonu</div> </a
        ><a href="" class="lower_nav_a">
          <div class="lower_nav_div">sonu</div>
        </a></div>
        <!-- /.ak -->
      </nav>`;
const left_arrow = document.querySelector(".left_arraw");
const right_arraw = document.querySelector(".right_arraw");
const ak = document.querySelector(".ak");

let currentXl = 0;
let intervalIdl = null;
let currentXr = 0;
let intervalIdr = null;

left_arrow.addEventListener("mousedown", () => {
  intervalIdl = setInterval(() => {
    if (true) {
      console.log(0);
      currentXl -= 5;
      ak.style.transform = `translateX(${currentXl}px)`;
    }
  }, 10);
});
right_arraw.addEventListener("mousedown", () => {
  intervalIdr = setInterval(() => {
    if (true) {
      console.log(0);
      currentXr += 5; // Adjust speed by changing this number
      ak.style.transform = `translateX(${currentXr}px)`;
    }
  }, 10); // Runs every 10 milliseconds
});

const stopMovingl = () => clearInterval(intervalIdl);
const stopMovingr = () => clearInterval(intervalIdr);

left_arrow.addEventListener("mouseup", stopMovingl);
left_arrow.addEventListener("mouseleave", stopMovingl);

right_arraw.addEventListener("mouseup", stopMovingr);
right_arraw.addEventListener("mouseleave", stopMovingr);
