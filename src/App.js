import React from "react";
import "./App.css";

import opera from "./assets/operatwo_jikang.jpg";

export default function App() {

  return (
    <div className="App">
      <div style={{ paddingTop: "40px" }}>
        <img
          src={opera}
          alt="article_pic"
          style={{ height: "400px", width: "auto" }}
        />
        <p style={{ fontSize: "12px" }}>
          "Death of the opera performer" - Jikang liu
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "800px" }}>
          <h1>The Next Chapter</h1>

          <div className="blog-body">
            <p>
              It is fitting that Wordpress broke on me. I think it's time to
              migrate to a website built by myself. This is what I was able to
              whip up in a hurry because I wish not to delay this new chapter
              any longer.
            </p>

            <p>
              This is a narcissistic and biographical post that may be of zero
              interest to you. In any case, thank you for reading my blog. I
              have fun writing whatever I write, and I hope you get something
              out of it. Now, on with it. I was tempted to write something
              highfalutin, but I think a brief and sober assessment of things
              will serve me better.
            </p>

            <p>
              I have a lovely family and incredibly loving people waiting for me
              back home. Here in New York, I have friends that I deeply care
              about, and two kittens that I love like nothing else. I get to
              study philosophy with some of the best philosophers of this
              generation. I got to attend a blockchain bootcamp (
              <a href="https://www.chainshot.com/">Chainshot</a>) and work at a
              tech startup (
              <a href="https://github.com/AdventurePizza">Adventure Corp.</a>),
              which has instilled in me an immeasurable passion for the new.
            </p>

            <p>It really feels like things have come together.</p>

            <p>
              No kind of force – economic, academic, or otherwise – will halt my
              pursuit of philosophy. In my remaining years as an undergrad, I’ll
              be writing a senior thesis in logic with Prof. Cian Dorr as my
              thesis advisor. It seems my general philosophical investigations
              will continue, whether it be at leisure with my books and mind, or
              in a class. After undergrad, I’ll apply to the NYU philosophy PhD
              program, and the Oxford BPhil program. Only these graduate
              programs excite me.
            </p>

            <p>
              I’ve formed an equally deep connection with tech. Yes – ‘tech’
              interpreted as the umbrella term it is. There are incredible minds
              working on what we’d term as the ‘future’, right now in the
              present. I’ve given myself to this concrete yearning for the new.
              I plan to work for a tech startup, next semester. I’ll be building
              my own little projects (ex:{" "}
              <a href="https://poofnotes.com">poofnotes.com</a>) in parallel.
              You read it here first – if I get into Y Combinator in 2021, I’ll
              readily drop out of college.
            </p>

            <p>
              Lastly, the literature. I am no authority on literature, so I’ll
              just list the books I’m excited to read this winter –
              <a href="https://www.amazon.com/Dune-Frank-Herbert/dp/0441172717">
                Dune
              </a>
              ,
              <a href="https://www.amazon.com/Gay-Science-Prelude-Rhymes-Appendix/dp/0394719859">
                {" "}
                The Gay Science
              </a>
              ,
              <a href="https://www.amazon.com/How-Innovation-Works-Flourishes-Freedom-ebook/dp/B07WSBV7YZ">
                {" "}
                How Innovation Works
              </a>
              ,
              <a href="https://www.amazon.com/Incerto-Deluxe-Randomness-Procrustes-Antifragile/dp/198481981X">
                {" "}
                Incerto series
              </a>
              ,
              <a href="https://www.amazon.com/Philosophy-Physics-Princeton-Foundations-Contemporary/dp/0691165718">
                {" "}
                Tim Maudlin’s philosophy of physics texts{" "}
              </a>
              ,
              <a href="https://www.amazon.com/Six-Easy-Pieces-Essentials-Explained/dp/0465025277">
                {" "}
                Six Easy Pieces
              </a>
              ,
              <a href="https://www.amazon.com/Total-Freedom-Essential-Krishnamurti-Jiddu/dp/0060648805">
                {" "}
                Total Freedom
              </a>
              ,
              <a href="https://www.amazon.com/Bhagavad-Gita-Penguin-Classics/dp/0140447903/ref=pd_lpo_14_img_0/146-2526493-5603417?_encoding=UTF8&pd_rd_i=0140447903&pd_rd_r=318306d0-dac1-43cc-8905-78ea73b0679c&pd_rd_w=TDJi8&pd_rd_wg=Y6s9n&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=4XGAJ76CC3ATNYXMJ5T0&psc=1&refRID=4XGAJ76CC3ATNYXMJ5T0">
                {" "}
                Bhagavad Gita
              </a>
              , and
              <a href="https://www.amazon.com/Brown-Harper-Perennial-Modern-Thought/dp/0061312118/ref=pd_lpo_14_img_0/146-2526493-5603417?_encoding=UTF8&pd_rd_i=0061312118&pd_rd_r=cb399232-1693-48e6-a307-78867f75440d&pd_rd_w=kJcUQ&pd_rd_wg=tcs0S&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=872F6HFG4DQTSTRACEZZ&psc=1&refRID=872F6HFG4DQTSTRACEZZ">
                {" "}
                Blue & Brown book
              </a>
              . At least that’s what comes to mind.
            </p>

            <p style={{paddingBottom: "40px"}}>
              And that’s it. I’m afraid, dear reader, that there may not be a
              clean cut lesson to draw here. I won’t force one upon you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
