import Head from "next/head";
import Link from "next/link";

export const metadata = {
  title: "The Cafe",
};

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <div className='sectionContainer'>
        <div className='sectionTextContainer'>
          <h2>Coffee.</h2>
          <p>
            Our coffee is made only from the best coffee beans in the world.
            Coming to a Cafe near you. Try our coffees from around the world:
            Portugal, Brazil, India... Check them all out today!
          </p>
        </div>
        <img src='/hero-coffee.png' className='heroImageCoffee' />
      </div>
      <div className='brownBar'> </div>
      <div className='sectionContainerAcc'>
        <img src='/hero-accessories.png' className='heroImageAcc' />
        <div className='sectionTextContainer'>
          <h2>Accessories</h2>
          <p className='accText'>
            Complement your coffee journey with our extensive selection of
            premium coffee beans and thoughtfully curated accessories. Delight
            in our range of high-quality beans sourced from different origins
            and flavorful blends, perfectly complemented by a diverse collection
            of accessories. From stylish mugs to innovative brewing tools and
            travel cups, our accessories enhance your coffee rituals. Explore
            our unique merchandise and home decor items, each designed to
            elevate your brewing experience. Find the perfect beans and
            accessories to match your taste preferences and brewing style,
            creating a truly delightful coffee moment with every sip.
          </p>
          <button className='accButton'>More</button>
        </div>
      </div>
      <div className='brownBar'> </div>
      <div className='gridContainer'>
        <h3 className='sectionTitle'>Accessories</h3>
        <div className='grid'>
          <div className='gridElement'>
            <div>
              <img src='/grid1.png' />
              <h3>Coffee beans</h3>
              <p className='gridText'>
                Discover our premium coffee beans sourced from around the world,
                including single-origin beans, unique blends, and specialty
                roasts. Elevate your coffee experience with the depth of flavors
                and aromas in each bean.
              </p>
            </div>
            <div className='gridButtonContainer'>
              <button className='gridElementButton'>Shop</button>
              <span className='gridMoreButton'>More</span>
            </div>
          </div>
          <div className='gridElement'>
            <div>
              <img src='/grid2.png' />
              <h3>Innovative Brewing Tools</h3>
              <p className='gridText'>
                Discover a selection of innovative brewing tools such as
                pour-over devices, AeroPress kits, French presses, or unique
                extraction methods. These tools cater to various brewing styles
                and preferences, allowing users to experiment and craft their
                ideal cup of coffee.
              </p>
            </div>
            <div className='gridButtonContainer'>
              <button className='gridElementButton'>Shop</button>
              <span className='gridMoreButton'>More</span>
            </div>
          </div>
          <div className='gridElement'>
            <div>
              <img src='/grid3.png' />
              <h3>Stylish Coffee Mugs</h3>
              <p className='gridText'>
                Explore a variety of stylish and durable coffee mugs designed to
                enhance the visual and tactile experience of enjoying your
                favorite brew. Options may include ceramic, insulated, or
                novelty mugs to suit different preferences.
              </p>
            </div>
            <div className='gridButtonContainer'>
              <button className='gridElementButton'>Shop</button>
              <span className='gridMoreButton'>More</span>
            </div>
          </div>
          <div className='gridElement'>
            <div>
              <img src='/grid4.png' />
              <h3>On-the-Go Travel Cups</h3>
              <p className='gridText'>
                Find practical and durable travel cups designed for coffee
                enthusiasts on the move. These cups offer insulation,
                spill-proof lids, and ergonomic designs for convenience during
                travel or daily commutes.
              </p>
            </div>
            <div className='gridButtonContainer'>
              <button className='gridElementButton'>Shop</button>
              <span className='gridMoreButton'>More</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
